import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import {
  ContextPropsExtraHoursRh,
  ExtraHoursRhProps,
  PendingProps,
  ProjectExtraHoursProps,
  StatusHours
} from './types'

export const Context = createContext({} as ContextPropsExtraHoursRh)

export const Provider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [extraHoursRh, setExtraHoursRh] = useState<PendingProps[]>([])
  const [projects, setProjects] = useState<ProjectExtraHoursProps[]>(
    []
  )
  const [statusHours, setStatusHours] = useState<StatusHours[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions_Status, setFilterOptions_Status] = useState(
    DEFAULT.FILTER_OPTIONS_STATUS
  )
  const [filterOptions_Project, setFilterOptions_Project] = useState(
    DEFAULT.FILTER_OPTIONS_PROJECT
  )
  const [detais, setDetails] = useState<ExtraHoursRhProps[]>([])
  const [filtertoAccept, setFilterToAccept] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const ContextPropsExtraHoursRh = {
    extraHoursRh,
    projects,
    statusHours,
    setExtraHoursRh,
    isLoading,
    meta,
    detais,
    filtertoAccept,
    navigateTo,
    paginate: { ...meta.pagination, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    filterOptions_Status,
    filterOptions_Project,
    handleFilterStatus,
    handleFilterProject,
    handleDateReference,
    handleFillAccept,
    handleDetails,
    fetchList
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(
      routes.extraHoursRH.listPending + '?limit=5',
      {
        params: {
          page: meta.pagination.current_page,
          search: meta.search,
          order: meta.order,
          orderField: meta.orderField,
          status_id: meta.status_id,
          project_id: meta.project_id,
          approved: meta.approved,
          date_start: meta.date_start,
          date_end: meta.date_end
        }
      }
    )
    setExtraHoursRh(data.data)
    setMeta((old) => ({
      ...old,
      pagination: {
        ...old.pagination,
        last_page: data.meta.last_page
      }
    }))
    setIsLoading(false)
  }

  async function handleDetails(id: number) {
    const { data } = await api.get(routes.extraHoursRH.getDetails(id))
    setDetails(data)
    return
  }

  async function fechFilterAccept() {
    const { data } = await api.get(routes.extraHoursRH.listPending)
    setProjects(data.data)
    setFilterToAccept({
      approved: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
    fetchList()
  }

  async function fetchProjects() {
    const { data } = await api.get(routes.extraHoursRH.listProject)
    setProjects(data.data)

    setFilterOptions_Project({
      project: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
  }

  async function fetchStatusHours() {
    const { data } = await api.get(
      routes.extraHoursRH.listStatusHours
    )
    setStatusHours(data.data)

    setFilterOptions_Status({
      status: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
  }

  function handleFilterProject(project_id: number) {
    setMeta((old) => ({
      ...old,
      project_id,
      pagination: { ...old.pagination, current_page: 1 }
    }))
  }

  function handleFilterStatus(status_id: number) {
    setMeta((old) => ({
      ...old,
      status_id,
      pagination: { ...old.pagination, current_page: 1 }
    }))
  }

  function handleDateReference(start: string, end: string) {
    setMeta((old) => ({
      ...old,
      date_start: start,
      date_end: end,
      pagination: { ...old.pagination, current_page: 1 }
    }))
  }

  function handleFillAccept(toAccept: string) {
    setMeta((old) => ({
      ...old,
      toAccept
    }))
    return
  }

  function navigateTo(url: string) {
    navigate(url)
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      pagination: { ...old.pagination, current_page }
    }))
  }

  function handleSearch(search: string) {
    setMeta((old) => ({
      ...old,
      search,
      pagination: { ...old.pagination, current_page: 1 }
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
      meta.pagination.current_page,
      meta.search,
      meta.order,
      meta.orderField,
      meta.status_id,
      meta.project_id,
      meta.date_start,
      meta.date_end,
      meta.approved
    ]
  })

  useDebounce({
    fn: fetchProjects,
    delay: 0,
    listener: []
  })

  useDebounce({
    fn: fetchStatusHours,
    delay: 0,
    listener: []
  })

  useDebounce({
    fn: fechFilterAccept,
    delay: 0,
    listener: []
  })

  return (
    <Context.Provider value={ContextPropsExtraHoursRh}>
      <PaginateContext.Provider
        value={{ paginate: ContextPropsExtraHoursRh.paginate }}
      >
        {children}
      </PaginateContext.Provider>
    </Context.Provider>
  )
}
