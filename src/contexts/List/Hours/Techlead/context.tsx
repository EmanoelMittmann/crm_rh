import { createContext, ReactNode, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import DEFAULT from './contants'
import { ContextTechLeadProps, TechLeadProps } from './types'
export const Context = createContext({} as ContextTechLeadProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [meta, setMeta] = useState(DEFAULT.META)
  const [techLead, setTechLead] = useState<TechLeadProps[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    meta,
    techLead,
    isLoading,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleFilterProject,
    handleFilterStatus,
    handleOrder,
    handleDate
  }

  function handleSearch(text: string) {
    setMeta((old) => ({
      ...old,
      search: text,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFilterProject(id: number) {
    setMeta((old) => ({
      ...old,
      project_id: id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFilterStatus(id: number) {
    setMeta((old) => ({
      ...old,
      status_id: id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      orderField: field,
      order: old.order === 'ASC' ? 'DESC' : 'ASC',
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

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

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
