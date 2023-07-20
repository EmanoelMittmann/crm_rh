import { createContext, useState, useCallback } from 'react'

import { toast } from '@stardust-ds/react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { externRoutes, routes } from 'routes'

import { useDebounce } from 'hooks'

import type { ReactNode } from '../Professional/types'
import DEFAULT from './constants'
import { CompanyProps, ContextCompanyProps } from './types'

export const Context = createContext({} as ContextCompanyProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [companys, setCompanys] = useState<CompanyProps[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFiltersOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    meta,
    companys,
    isLoading,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    handleUpdateStatus,
    handleDateReference,
    handleUf,
    handleRegistration,
    handleTypeCompany
  }
  const listFilterFetch = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await api.get(routes.company.filter, {
        params: {
          search: meta.search,
          order: meta.order,
          page: meta.paginate.current_page,
          razao_social: meta.razaoSocial,
          orderField: meta.orderField,
          cnpj: meta.cnpj,
          city_name: meta.cityName,
          referencesDate: meta.referencesDate,
          uf: meta.uf,
          status: meta.registrationStatus,
          type_company: meta.typeCompany
        }
      })
      setCompanys(data?.data)
      setMeta((old) => ({
        ...old,
        paginate: { ...old.paginate, last_page: data.meta.last_page }
      }))
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }, [
    meta.search,
    meta.cityName,
    meta.cnpj,
    meta.order,
    meta.orderField,
    meta.razaoSocial,
    meta.paginate.current_page,
    meta.referencesDate,
    meta.registrationStatus,
    meta.typeCompany,
    meta.uf
  ])

  async function fetchFilters() {
    const { data: states } = await api.get(externRoutes.uf)
    setFiltersOptions({
      uf: states.map((uf: any) => ({
        label: uf.nome,
        value: uf.sigla
      })),
      registration: [
        { label: 'Ativo', value: 'ACTIVE' },
        { label: 'Suspenso', value: 'SUSPENDED' },
        { label: 'Inapta', value: 'UNFIT' },
        { label: 'Baixada', value: 'DOWNLOADED' },
        { label: 'Nula', value: 'NULL' }
      ] as never,
      typeCompany: [
        { label: 'Ubistart', value: 'UBISTART' },
        { label: 'Cliente', value: 'CLIENT' },
        { label: 'Fornecedor', value: 'SUPPLIER' }
      ] as never
    })
  }

  async function handleUpdateStatus(id: number) {
    await api.put(routes.company.updateStatus(id))
    toast({
      type: 'success',
      title: 'Status atualizado',
      position: 'bottom-right'
    })
    listFilterFetch()
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      orderField: field,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  function handleDateReference(date: string) {
    setMeta((old) => ({
      ...old,
      referencesDate: date,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleSearch(text: string) {
    setMeta((old) => ({
      ...old,
      cityName: text,
      cnpj: text,
      razaoSocial: text,
      search: text,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleUf(uf: string) {
    setMeta((old) => ({
      ...old,
      uf: uf,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleRegistration(status: string) {
    setMeta((old) => ({
      ...old,
      registrationStatus: status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleTypeCompany(type: string) {
    setMeta((old) => ({
      ...old,
      typeCompany: type,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  useDebounce({
    fn: fetchFilters,
    listener: []
  })

  useDebounce({
    fn: listFilterFetch,
    listener: [listFilterFetch]
  })

  return (
    <Context.Provider value={contextProps}>
      <PaginateContext.Provider
        value={{ paginate: contextProps.paginate }}
      >
        {children}
      </PaginateContext.Provider>
    </Context.Provider>
  )
}
