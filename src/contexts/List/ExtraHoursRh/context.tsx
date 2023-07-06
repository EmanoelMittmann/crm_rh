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

  const ContextPropsExtraHoursRh = {
    extraHoursRh,
    projects,
    statusHours,
    setExtraHoursRh,
    isLoading,
    meta,
    navigateTo,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.extraHoursRH.listPending, {
      params: {}
    })
    setExtraHoursRh(data.data)
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
    }))
    setIsLoading(false)
  }

  async function fetchProjects() {
    const { data } = await api.get(routes.extraHoursRH.listProject)
    setProjects(data.data)
  }

  async function fetchStatusHours() {
    const { data } = await api.get(
      routes.extraHoursRH.listStatusHours
    )
    setStatusHours(data.data)
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
      meta.orderField
    ]
  })

  useDebounce({
    fn: fetchProjects,
    listener: []
  })

  useDebounce({
    fn: fetchStatusHours,
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
