import { createContext, useEffect, useState } from 'react'
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
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    filterOptions_Status,
    filterOptions_Project,
    handleFilterStatus,
    handleFilterProject,
    handleFillInitialDate,
    handleFillFinalDate,
    handleFillAccept,
    handleDetails
  }

  let params = {
    page: meta.paginate.current_page,
    search: meta.search,
    order: meta.order,
    orderField: meta.orderField,
    status_id: meta.status_id,
    project_id: meta.project_id,
    approved: meta.approved,
    initialDate: meta.initialDate,
    finalDate: meta.finalDate
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.extraHoursRH.listPending, {
      params: { params }
    })
    setExtraHoursRh(data.data)
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
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

  function handleFilterProject(project_id: number) {
    setMeta((old) => ({
      ...old,
      project_id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
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

  function handleFilterStatus(status_id: number) {
    setMeta((old) => ({
      ...old,
      status_id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFillInitialDate(initialDate: string | null) {
    setMeta((old) => ({
      ...old,
      initialDate,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFillFinalDate(finalDate: string | null) {
    setMeta((old) => ({
      ...old,
      finalDate,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFillAccept(accept: string) {
    setMeta((old) => ({
      ...old,
      accept,
      paginate: { ...old.paginate, current_page: 1 }
    }))
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
      meta.order,
      meta.orderField,
      meta.status_id,
      meta.project_id,
      meta.initialDate,
      meta.finalDate,
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
