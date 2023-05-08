import { createContext, useState } from 'react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constanst'
import { ContextPropsTypeProject, TypesProps } from './types'

export const Context = createContext({} as ContextPropsTypeProject)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [typesProjects, setTypesProjects] = useState<TypesProps[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    typesProjects,
    isLoading,
    meta,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    navigate,
    handleSearch,
    handleOrder,
    handleStatus,
    handleOrderField,
    handleCreateType,
    handleUpdateType,
    handleUpdateStatus
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.project_type.list, {
      params: {
        search: meta.search && meta.search,
        orderField: meta.orderField,
        page: meta.paginate.current_page,
        order: meta.order,
        is_active: meta.isActive
      }
    })
    setTypesProjects(data?.data)
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

  function handleOrder() {
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

  async function handleCreateType(name: string) {
    try {
      await api.post(routes.project_type.list, { name: name })
      toast({
        type: 'success',
        title: 'Tipo de projeto cadastrado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'Tipo de projeto Existente',
        position: 'bottom-right'
      })
    }
  }

  async function handleUpdateType(id: number, name: string) {
    try {
      await api.put(routes.project_type.update(id), { name: name })
      toast({
        type: 'success',
        title: 'Tipo de projeto atualizado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'Tipo de projeto Existente',
        position: 'bottom-right'
      })
    }
  }

  async function handleUpdateStatus(id: number) {
    try {
      await api.put(routes.project_type.updateStatus, { id: id })
    } catch (error) {
      console.error(error)
    }
    fetchList()
  }

  useDebounce({
    fn: fetchList,
    delay: 500,
    listener: [
      meta.paginate.current_page,
      meta.isActive,
      meta.search,
      meta.order,
      meta.orderField
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
