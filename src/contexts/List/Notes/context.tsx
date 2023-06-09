import { createContext, useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { PaginateContext } from 'components/molecules'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { META_PROPS } from './constants'
import { ContextNotesProps, NotesProps } from './types'
export const Context = createContext({} as ContextNotesProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [notes, setNotes] = useState<NotesProps[]>([])
  const [meta, setMeta] = useState(META_PROPS)

  const contextProps = {
    notes,
    isLoading,
    meta,
    navigate,
    paginate: { ...meta.pagination, setCurrent_page: setPage },
    handleSearch,
    handleOrder,
    handleDateReference
  }

  async function fetchList() {
    const { data } = await api.get(routes.notes.list, {
      params: {
        page: meta.pagination.current_page,
        order: meta.order,
        orderField: meta.orderField,
        search: meta.search,
        date_start: meta.date_start,
        date_end: meta.date_end
      }
    })
    setNotes(data)
    setMeta((old) => ({
      ...old,
      pagination: {
        ...old.pagination,
        last_page: data.meta.last_page
      }
    }))
    setIsLoading(false)
  }

  function handleSearch(text: string) {
    setMeta((old) => ({
      ...old,
      text,
      pagination: { ...old.pagination, current_page: 1 }
    }))
  }

  function handleOrder(field: string) {
    setMeta((old) => ({
      ...old,
      orderField: field,
      order: old.order === 'ASC' ? 'DESC' : 'ASC'
    }))
  }

  function handleDateReference(start: string, end: string) {
    setMeta((old) => ({
      ...old,
      date_start: start,
      date_end: end,
      pagination: { ...old.pagination, current_page: 1 }
    }))
  }

  function setPage(current_page: number) {
    setMeta((old) => ({
      ...old,
      pagination: { ...old.pagination, current_page }
    }))
  }

  useDebounce({
    fn: fetchList,
    listener: [
      meta.date_end,
      meta.date_start,
      meta.order,
      meta.orderField,
      meta.pagination.current_page,
      meta.search
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
