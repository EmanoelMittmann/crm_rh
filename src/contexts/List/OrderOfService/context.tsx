import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { PaginateContext } from 'components/molecules'
import { dateThan } from 'components/utils/dateThan'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import {
  ContextOrderOfServiceProps,
  OrderOfServiceProps
} from './types'

export const Context = createContext({} as ContextOrderOfServiceProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [orderOfService, setOrderOfService] = useState<
    OrderOfServiceProps[]
  >([])
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextOrderOfServiceProps = {
    orderOfService,
    isLoading,
    meta,
    navigateTo,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    filterOptions,
    handleFillStatus,
    handleDateReference,
    handleFillRefDate,
    handleSearch,
    handleOrder
  }

  async function fetchListOrderOfService() {
    setIsLoading(true)
    const { data } = await api.get(routes.orderOfService.list, {
      params: {
        page: meta.paginate.current_page,
        initialDate: meta.initialDate,
        finalDate: meta.finalDate,
        referencesDate: meta.referencesDate,
        status: meta.status,
        search: meta.search && meta.search,
        order: meta.order,
        orderField: meta.orderField
      }
    })
    setOrderOfService(data?.data)
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, last_page: data.meta.last_page }
    }))
    setIsLoading(false)
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
      order: old.order === 'DESC' ? 'ASC' : 'DESC'
    }))
  }

  async function fechFilterOptionsStatus() {
    const { data } = await api.get(routes.orderOfService.list)
    setFilterOptions({
      status_O_S: data.data.map(
        ({
          name,
          id,
          status
        }: {
          name: string
          id: number
          status: string
        }) => ({
          label: name,
          status,
          value: id
        })
      )
    })
  }

  function handleFillStatus(status: string | null) {
    setMeta((old) => ({
      ...old,
      status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleDateReference(start: string, end: string) {
    if (dateThan(start, end)) {
      setMeta((old) => ({
        ...old,
        initialDate: start,
        finalDate: end,
        pagination: { ...old.paginate, current_page: 1 }
      }))
    }
  }
  function handleFillRefDate(Date: string | null) {
    setMeta((old) => ({
      ...old,
      referencesDate: Date,
      pagination: { ...old.paginate, current_page: 1 }
    }))
  }

  useDebounce({
    fn: fetchListOrderOfService,
    listener: [
      meta.paginate.current_page,
      meta.search,
      meta.order,
      meta.orderField,
      meta.status_O_S,
      meta.status,
      meta.initialDate,
      meta.finalDate,
      meta.referencesDate
    ]
  })

  useDebounce({
    fn: fechFilterOptionsStatus,
    delay: 0,
    listener: []
  })

  return (
    <Context.Provider value={contextOrderOfServiceProps}>
      <PaginateContext.Provider
        value={{ paginate: contextOrderOfServiceProps.paginate }}
      >
        {children}
      </PaginateContext.Provider>
    </Context.Provider>
  )
}
