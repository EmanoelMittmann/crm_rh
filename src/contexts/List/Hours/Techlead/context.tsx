import { createContext, ReactNode, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

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

  async function fetchList() {
    setIsLoading(true)
    try {
      const { data } = await api.get(routes.hours.techLead.list, {
        params: {
          page: meta.paginate.current_page,
          search: meta.search,
          status_id: meta.status_id,
          project_id: meta.project_id,
          order: meta.order,
          orderField: meta.orderField,
          date_start: meta.date_start,
          date_end: meta.date_end
        }
      })
      setTechLead(data.data)
      setMeta((old) => ({
        ...old,
        paginate: { ...old.paginate, last_page: data.meta.last_page }
      }))
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
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

  useDebounce({
    fn: fetchList,
    listener: [
      meta.paginate.current_page,
      meta.date_end,
      meta.date_start,
      meta.order,
      meta.orderField,
      meta.project_id,
      meta.status_id,
      meta.search
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
