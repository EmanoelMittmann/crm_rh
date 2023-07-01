import { createContext, ReactNode, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { IHandleModalPropsCommission, PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { ProfessionalProps } from '../Professional/types'
import DEFAULT from './constants'
import { ContextPropsProfessionalOS } from './types'
import { Order } from 'components/organisms/Tables/OrderFormTable/type'

export const Context = createContext({} as ContextPropsProfessionalOS)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [professionalOS, setProfessionalOS] = useState<
    ProfessionalProps[]
  >([])
  const [selectSendProfessionals, setSelectSendProfessionals] =
    useState<Order[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const modalRef = useRef<IHandleModalPropsCommission>(null)
  const ContextPropsProfessionalOS = {
    onCreateOs,
    setSelectSendProfessionals,
    deleteCommission,
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
  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(
      routes.professional.list + '?limit=110',
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
    setIsLoading(false)
  }

  async function onCreateOs() {
    if (selectSendProfessionals.length > 0) {
      try {
        const response = await api.post(
          routes.orderOfService.register,
          selectSendProfessionals);

        setMeta((old) => ({
          ...old,
          paginate: { ...old.paginate, last_page: response.data.meta.last_page }
        }))

        if (response.data.msg) {
          toast({
            type: 'success',
            title: 'Ordem de Serviço gerada com sucesso.',
            position: 'bottom-right'
          });
          navigate('/orderOfService')
          return false;
        } else {
          return true;
        }
      } catch (error) {
        toast({
          type: 'error',
          title: 'Erro ao gerar Ordem de Serviço.',
          position: 'bottom-right'
        });
        return false;
      }
    } else {
      toast({
        type: 'error',
        title: 'Selecione ao menos um profissional.',
        position: 'bottom-right'
      });
      return false;

    }

  }

  async function deleteCommission(id: number) {
    setSelectSendProfessionals((old) =>
      old.filter((professional) => professional.professional_id !== id),
    )
    const lastItemDeleted = selectSendProfessionals.length === 0
    if (lastItemDeleted) {
      modalRef.current?.close()
      console.log('modalRef: ', modalRef);
    }

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
    listener: [
      meta.paginate.current_page,
      meta.search,
      meta.order
    ]
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
