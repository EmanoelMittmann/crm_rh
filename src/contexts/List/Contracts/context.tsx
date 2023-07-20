import { ReactNode, createContext, useState } from 'react'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import DEFAULT from './contants'
import {
  ContractContextProps,
  ContractProps,
  DefaultMetaProps
} from './types'

export const Context = createContext({} as ContractContextProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const [meta, setMeta] = useState(DEFAULT.META)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contract, setContract] = useState<ContractProps[]>([])
  const [filterOptions, setFilterOptions] = useState(
    DEFAULT.FILTER_OPTIONS
  )

  const contextProps = {
    meta,
    contract,
    isLoading,
    filterOptions,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    handleStatus,
    handleDate
  }

  async function fetchList() {
    setIsLoading(true)
    try {
      const { data } = await api.get(routes.contract.list, {
        params: {
          search: meta.search,
          initialDate: meta.initialDate,
          finalDate: meta.finalDate,
          status: meta.status,
          orderField: meta.orderField,
          order: meta.order,
          page: meta.paginate.current_page
        }
      })
      setContract(data.data)
      setMeta((old) => ({
        ...old,
        paginate: { ...old.paginate, last_page: data.meta.last_page }
      }))
    } catch (error) {
      console.error(error)
    }
    setIsLoading(false)
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      paginate: { ...old.paginate, current_page }
    }))
  }

  function handleSearch(text: string) {
    setMeta((old) => ({
      ...old,
      search: text,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      order: old.order === 'ASC' ? 'DESC' : 'ASC',
      orderField: field
    }))
  }

  function handleStatus(status: string) {
    setMeta((old) => ({
      ...old,
      status: status,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

  function handleDate(initial: string, end: string) {
    setMeta((old) => ({
      ...old,
      initialDate: initial,
      finalDate: end,
      paginate: { ...old.paginate, current_page: 1 }
    }))
  }

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
