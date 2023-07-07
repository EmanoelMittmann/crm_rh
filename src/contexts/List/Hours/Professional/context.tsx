import { ReactNode, createContext, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

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

  async function fetchList() {
    setIsLoading(true)
    try {
      const { data } = await api.get(routes.hours.Professional.list, {
        params: {
          search: meta.search,
          page: meta.paginate.current_page,
          project_id: meta.project_id,
          status_id: meta.status_id,
          order: meta.order,
          orderField: 'id',
          date_start: meta.date_start,
          date_end: meta.date_end
        }
      })
      setReleases(data.data)
      setMeta((old) => ({
        ...old,
        paginate: { ...old.paginate, last_page: data.meta.last_page }
      }))
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      setIsLoading(true)
    }
    setIsLoading(false)
  }

  function handleProject(id: number | null) {
    setMeta((old) => ({
      ...old,
      project_id: id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  async function fetchFilters() {
    try {
      const [{ data: extraHour }, { data: project }] =
        await Promise.all([
          await api.get(routes.hours.Status.list),
          await api.get(routes.project.list)
        ])
      setFilterOptions({
        project: project.data.map((prop: any) => ({
          label: prop.name,
          value: prop.id
        })),
        status: extraHour.data.map((prop: any) => ({
          label: prop.name,
          value: prop.id
        }))
      })
    } catch (error) {
      console.error(error)
    }
  }

  function handleStatus(id: number | null) {
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
      search: search ? search : null,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

  function handleOrder() {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC',
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  useDebounce({
    fn: fetchList,
    listener: [
      meta.paginate.current_page,
      meta.date_end,
      meta.order,
      meta.search,
      meta.status_id,
      meta.project_id
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
