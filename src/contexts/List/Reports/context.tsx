import { createContext, ReactNode, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './contants'
import { ContextReportsProps, ReportsProps } from './types'

export const Context = createContext({} as ContextReportsProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<ReportsProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)

  const contextProps = {
    reports,
    isLoading,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    meta,
    handleSearch,
    handleStatus,
    handleDate,
    handleOrder,
    handleCompany
  }

  async function fetchReports() {
    setIsLoading(true)
    try {
      const { data } = await api.get(routes.reports.list, {
        params: {
          search: meta.search,
          status: meta.status,
          date_start: meta.date_start,
          date_end: meta.date_end,
          companies_id: meta.companies_id,
          order: meta.order,
          orderField: meta.orderField,
          page: meta.paginate.current_page
        }
      })
      setReports(data.data)
      setMeta(data.meta)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(true)
  }

  function handleSearch(search: string) {
    setMeta((old) => ({
      ...old,
      search: search,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  async function fetchFilters() {
    const { data: companies } = await api.get(routes.company.list)
    setFilterOptions({
      companies: companies.data.map(
        ({
          razao_social,
          id
        }: {
          razao_social: string
          id: number
        }) => ({
          label: razao_social,
          value: String(id)
        })
      ),
      status: [
        { label: 'Pendente', value: 'Pendente' },
        { label: 'Pronto Para Pagar', value: 'Pronto Para Pagar' },
        { label: 'Pago', value: 'Pago' }
      ] as never
    })
  }

  function handleStatus(status: string) {
    setMeta((old) => ({
      ...old,
      status: status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleDate(start: string, end: string) {
    setMeta((old) => ({
      ...old,
      date_start: start,
      date_end: end,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC',
      orderField: field,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleCompany(id: number) {
    setMeta((old) => ({
      ...old,
      companies_id: id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

  useDebounce({
    fn: fetchReports,
    listener: [
      meta.companies_id,
      meta.date_end,
      meta.companies_id,
      meta.order,
      meta.orderField,
      meta.paginate.current_page,
      meta.search,
      meta.status
    ]
  })

  useDebounce({
    fn: fetchFilters,
    listener: []
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
