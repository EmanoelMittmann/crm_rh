import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import {
  ContextPropsStatusProject,
  DefaultMetaProps,
  StatusProps
} from './types'
import { ReactNode } from './types'

export const Context = createContext({} as ContextPropsStatusProject)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [statusProjects, setStatusProjects] = useState<StatusProps[]>(
    []
  )
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    statusProjects,
    isLoading,
    meta,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    navigate,
    handleOrder,
    handleOrderField,
    handleStatus,
    handleSearch,
    handleUpdateStatus,
    handleCreateStatusProject,
    handleUpdateStatusProject
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.status.list, {
      params: {
        search: meta.search,
        orderField: meta.orderField,
        page: meta.paginate.current_page,
        order: meta.order,
        is_active: meta.isActive
      }
    })
    setStatusProjects(data?.data)
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
    }))
    setIsLoading(false)
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
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  function handleStatus(status: number | null) {
    setMeta((old) => ({
      ...old,
      isActive: status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrderField(field: string) {
    setMeta((old) => ({
      ...old,
      orderField: field,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  async function handleCreateStatusProject(
    name: string,
    color: number
  ) {
    try {
      await api.post(routes.status.list, {
        name: name,
        colors_id: color
      })
      toast({
        type: 'success',
        title: 'Status cadastrado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'Status Existente',
        position: 'bottom-right'
      })
    }
  }

  async function handleUpdateStatusProject(
    id: number,
    name: string,
    color: string
  ) {
    try {
      await api.put(routes.status.update(id), {
        name: name,
        colors_id: color
      })
      toast({
        type: 'success',
        title: 'Status Atualizado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'Status Existente',
        position: 'bottom-right'
      })
    }
  }

  async function handleUpdateStatus(id: number) {
    try {
      await api.put(routes.status.updateStatus, { id: id })
      fetchList()
    } catch (error) {
      console.error(error)
    }
  }

  useDebounce({
    fn: fetchList,
    listener: [
      meta.isActive,
      meta.search,
      meta.paginate.current_page,
      meta.order
    ]
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
