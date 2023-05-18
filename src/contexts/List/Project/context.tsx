import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import {
  ContextProjectProps,
  DefaultMetaProps,
  ReactNode
} from './types'
import { ProjectProps } from 'types'

export const Context = createContext({} as ContextProjectProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [projects, setProjects] = useState<ProjectProps[]>([])
  const [filterOptionsType, setFilterOptionsType] = useState(
    DEFAULT.FILTER_OPTIONS
  )
  const [filterOptionsStatus, setFilterOptionsStatus] = useState(
    DEFAULT.FILTER_OPTIONS_STATUS
  )

  const contextProjectProps = {
    projects,
    isLoading,
    meta,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    filterOptionsType,
    filterOptionsStatus,
    handleSearch,
    handleOrder,
    handleFillProject_Type,
    handleFillProject_Status,
    navigateTo,
    handleUpdateStatus
  }

  function prepareParams(meta: DefaultMetaProps) {
    return {
      page: meta.paginate.current_page,
      search: meta.search && meta.search,
      type_id: meta.project_type_id && meta.project_type_id,
      status_id: meta.project_status_id && meta.project_status_id,
      order: meta.order,
      orderField: meta.orderField
    }
  }
  async function fetchListProject() {
    setIsLoading(true)

    const params = prepareParams(meta)

    const { data } = await api.get(routes.project.list, { params })

    setProjects(data?.data)
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
    }))
    setIsLoading(false)
  }

  async function handleUpdateStatus(id: number, name: string) {
    await api.put(routes.project.updateStatusproject(id), {
      name: name
    })
    fetchListProject()
  }

  async function fetchFilters_Projects() {
    const { data } = await api.get(
      routes.project_type.list + '?limit=120',
      {
        params: { is_active: 1 }
      }
    )

    setFilterOptionsType({
      project_type: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
  }

  async function fetchFilters_Status() {
    const { data } = await api.get(
      routes.status.list + '?limit=120',
      {
        params: { is_active: 1 }
      }
    )
    setFilterOptionsStatus({
      status: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
  }

  function handleFillProject_Type(project_type_id: number | null) {
    setMeta((old) => ({
      ...old,
      project_type_id,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleFillProject_Status(
    project_status_id: number | null
  ) {
    setMeta((old) => ({
      ...old,
      project_status_id,
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

  function handleOrder(_: string) {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  useDebounce({
    fn: fetchListProject,
    listener: [
      meta.paginate.current_page,
      meta.search,
      meta.project_type,
      meta.status,
      meta.order,
      meta.project_status_id,
      meta.project_type_id
    ]
  })

  useDebounce({
    fn: fetchFilters_Projects,
    delay: 0,
    listener: []
  })
  useDebounce({
    fn: fetchFilters_Status,
    delay: 0,
    listener: []
  })

  return (
    <Context.Provider value={contextProjectProps}>
      <PaginateContext.Provider
        value={{ paginate: contextProjectProps.paginate }}
      >
        {children}
      </PaginateContext.Provider>
    </Context.Provider>
  )
}
