import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounce } from 'hooks'
import api from 'api'
import DEFAULT from './constants'
import type { ContextProps, ProfessionalProps, ReactNode } from './types'

export const Context = createContext({} as ContextProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [professionals, setProfessionals] = useState<ProfessionalProps[]>([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFilterOptions] = useState(DEFAULT.FILTER_OPTIONS)

  const contextProps = {
    professionals,
    isLoading,
    meta,
    navigateTo,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    filterOptions,
    handleFillJob,
    handleSearch,
    handleOrder,
  }

  async function fetchList() {
    setIsLoading(true)
    const { data } = await api.get('/professionals', {
      params: {
        page: meta.paginate.current_page,
        job_id: meta.job_id,
        search: meta.search && meta.search,
        order: meta.order,
        orderField: meta.orderField,
      },
    })
    setProfessionals(data?.data)
    setMeta((old) => ({ ...old, paginate: { ...old.paginate, last_page: data.meta.last_page } }))
    setIsLoading(false)
  }

  async function fetchFilters() {
    const { data } = await api.get('/job', { params: { is_active: 1 } })

    setFilterOptions({
      job: data.data.map(({ name, id }: { name: string; id: number }) => ({ label: name, value: id })),
    })
  }

  function navigateTo(url: string) {
    navigate(url)
  }

  function setPage(current_page: number) {
    setMeta((old) => ({ ...old, paginate: { ...old.paginate, current_page } }))
  }

  function handleFillJob(job_id: number | null) {
    setMeta((old) => ({ ...old, job_id, paginate: { ...old.paginate, current_page: 1 } }))
  }

  function handleSearch(search: string) {
    setMeta((old) => ({ ...old, search, paginate: { ...old.paginate, current_page: 1 } }))
  }

  function handleOrder(_: string) {
    setMeta((old) => ({ ...old, order: old.order === 'ASC' ? 'DESC' : 'ASC' }))
  }

  useDebounce({
    fn: fetchList,
    delay: 500,
    listener: [meta.paginate.current_page, meta.search, meta.job_id, meta.order],
  })

  useDebounce({
    fn: fetchFilters,
    delay: 0,
    listener: [],
  })

  return <Context.Provider value={contextProps}>{children}</Context.Provider>
}
