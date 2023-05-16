import { createContext, useState } from 'react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { toast } from '@stardust-ds/react'
import { title } from 'process'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import type { ContextPropsSettings, JobsProps } from './types'

export const Context = createContext({} as ContextPropsSettings)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [jobs, setJobs] = useState<JobsProps[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    jobs,
    isLoading,
    meta,
    filterOptions,
    navigate,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleStatus,
    handleUpdateStatus,
    handleUpdateJob,
    handleOrder,
    handleJob
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.job.list + '?limit=7', {
      params: {
        page: meta.paginate.current_page,
        order: meta.order,
        search: meta.search,
        is_active: meta.isActive
      }
    })
    setJobs(data?.data)
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

  function handleStatus(status: number | null) {
    setMeta((old) => ({
      ...old,
      isActive: status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrder(_: string) {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  async function handleUpdateJob(id: number, name: string) {
    try {
      await api.put(routes.job.updateJob(id), { name: name })
      toast({
        type: 'success',
        title: 'Cargo atualizado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'Cargo ja existente',
        position: 'bottom-right'
      })
    }
  }

  async function handleUpdateStatus(id: number) {
    await api.put(routes.job.updateStatus, { id: id })
    fetchList()
  }

  async function handleJob(name: string) {
    try {
      await api.post(routes.job.list, { name: name })
      toast({
        type: 'success',
        title: 'Cargo cadastrado',
        position: 'bottom-right'
      })
      fetchList()
    } catch (error) {
      toast({
        type: 'error',
        title: 'O Cargo ja existe',
        position: 'bottom-right'
      })
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
