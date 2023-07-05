import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import {
  ContextPropsProfessionalOS,
  OrderProps,
  OrderPropsProfessional
} from './types'

export const Context = createContext({} as ContextPropsProfessionalOS)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [professionalOS, setProfessionalOS] = useState<
    OrderPropsProfessional[]
  >([])

  const [checked, setChecked] = useState<{ [id: number]: boolean }>(
    {}
  )
  const [selectSendProfessionals, setSelectSendProfessionals] =
    useState<OrderProps[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [metaCommision, setMetaCommision] = useState(
    DEFAULT.META_PROPS
  )

  const professionalsHaveCommission = selectSendProfessionals.filter(
    (professional) => professional.isCommission
  )

  const ContextPropsProfessionalOS = {
    mergeCommision,
    professionalsHaveCommission,
    metaCommision,
    onCreateOs,
    checked,
    setChecked,
    setSelectSendProfessionals,
    deleteCommission,
    selectSendProfessionals,
    professionalOS,
    setProfessionalOS,
    isLoading,
    meta,
    navigateTo,
    paginate: { ...metaCommision.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder
  }
  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(
      routes.professional.list + '?limit=110',
      {
        params: {
          page: metaCommision.paginate.current_page,
          search: meta.search && meta.search,
          order: meta.order,
          orderField: meta.orderField
        }
      }
    )
    setProfessionalOS(
      data?.data.filter(
        (professional: OrderPropsProfessional) =>
          professional.professional_data !== null
      )
    )
    setIsLoading(false)
  }

  function mergeCommision() {
    const merged = professionalOS.map(
      (professional: OrderPropsProfessional) => {
        const pCommission = professionalsHaveCommission.find(
          (pHaveCommission) =>
            professional.id === pHaveCommission.professional_id
        )

        if (!pCommission) {
          return professional
        }
        return {
          ...professional,
          commissionHave: pCommission.commission
        }
      }
    )
    setProfessionalOS(merged)
  }

  async function onCreateOs() {
    if (selectSendProfessionals.length > 0) {
      const response = await api.post(
        routes.orderOfService.register,
        selectSendProfessionals
      )

      setMetaCommision((old) => ({
        ...old,
        paginate: {
          ...old.paginate,
          last_page: response.data.meta.last_page
        }
      }))

      if (response.data.msg === 'successfully generated report') {
        toast({
          type: 'success',
          title: 'Ordem de Serviço gerada com sucesso.',
          position: 'bottom-right'
        })

        navigate('/orderOfService')
        return false
      } else {
        return true
      }
    } else {
      toast({
        type: 'error',
        title: 'Selecione os profissionais.',
        position: 'bottom-right'
      })
      return
    }
  }

  async function deleteCommission(id: number) {
    const updatedCommission = professionalsHaveCommission.filter(
      (professional) => professional.professional_id !== id
    )
    setSelectSendProfessionals(updatedCommission)
    setChecked((prevChecked) => {
      const updatedChecked = { ...prevChecked }
      delete updatedChecked[id]
      return updatedChecked
    })
  }

  function navigateTo(url: string) {
    navigate(url)
  }

  function setPage(current_page: number) {
    setMetaCommision((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

  function handleSearch(search: string) {
    setMeta((old) => ({
      ...old,
      search,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      orderField: field,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  useDebounce({
    fn: fetchList,
    listener: [meta.paginate.current_page, meta.search, meta.order]
  })

  return (
    <Context.Provider value={ContextPropsProfessionalOS}>
      <PaginateContext.Provider
        value={{ paginate: ContextPropsProfessionalOS.paginate }}
      >
        {children}
      </PaginateContext.Provider>
    </Context.Provider>
  )
}
