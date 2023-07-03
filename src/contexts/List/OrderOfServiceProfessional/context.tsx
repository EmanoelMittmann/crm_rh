import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { ProfessionalProps } from '../Professional/types'
import DEFAULT from './constants'
import { ContextPropsProfessionalOS } from './types'

export const Context = createContext({} as ContextPropsProfessionalOS)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [professionalOS, setProfessionalOS] = useState<
    ProfessionalProps[]
  >([])
  const [selectSendProfessionals, setSelectSendProfessionals] =
    useState<any[]>([])

  const [meta, setMeta] = useState(DEFAULT.META_PROFESSIONAL_PROPS)

  const professionalsHaveCommission = selectSendProfessionals.filter(
    (professional) => professional.isCommission
  )

  const ContextPropsProfessionalOS = {
    mergeCommision,
    professionalsHaveCommission,
    onCreateOs,
    setSelectSendProfessionals,
    selectSendProfessionals,
    professionalOS,
    setProfessionalOS,
    isLoading,
    meta,
    navigateTo,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder
  }

  function mergeCommision() {
    const merged = professionalOS.map(
      (professional: ProfessionalProps) => {
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
    const response = await api.post(
      routes.orderOfService.register,
      selectSendProfessionals
    )
    if (response.data.msg) {
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
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(
      routes.professional.list + '?limit=120',
      {
        params: {
          page: meta.paginate.current_page,
          search: meta.search && meta.search,
          order: meta.order,
          orderField: meta.orderField
        }
      }
    )
    setProfessionalOS(
      data?.data.filter(
        (professional: any) => professional.professional_data !== null
      )
    )

    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
    }))
    setIsLoading(false)
  }

  function navigateTo(url: string) {
    navigate(url)
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
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
