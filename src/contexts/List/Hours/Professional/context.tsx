import { ReactNode, createContext, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import DEFAULT from './contants'
import { ContextHoursProps, HoursProps } from './types'

export const Context = createContext({} as ContextHoursProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [meta, setMeta] = useState(DEFAULT.META)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [releases, setReleases] = useState<HoursProps[]>([])

  const contextProps = {
    meta,
    filterOptions,
    isLoading,
    releases,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    handleDate,
    handleStatus,
    handleProject
  }

  function handleProject(id: number) {
    setMeta((old) => ({
      ...old,
      project_id: id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleStatus(id: number) {
    setMeta((old) => ({
      ...old,
      status_id: id,
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

  function handleSearch(search: number) {
    setMeta((old) => ({
      ...old,
      search: search,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function setPage(page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, page }
    }))
  }

  function handleOrder() {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
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
