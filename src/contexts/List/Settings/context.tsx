import { createContext, useState } from 'react'
import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

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
    handleUpdateStatus
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get(routes.job.list, {
      params: {
        page: meta.paginate.current_page,
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

  function handleStatus(status: number) {
    setMeta((old) => ({
      ...old,
      status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  async function handleUpdateStatus(id: number) {
    await api.put(routes.job.updateJob(id))
    fetchList()
  }

  useDebounce({
    fn: fetchList,
    listener: [meta.isActive, meta.search, meta.paginate.current_page]
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
