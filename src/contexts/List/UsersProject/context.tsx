import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PaginateContext } from 'components/molecules'
import api from 'api'
import { routes } from 'routes'
import { useDebounce } from 'hooks'
import DEFAULT from './constants'
import {
  ContextUsersProps,
  ReactNode
} from './types'
import { UserProjectsProps } from 'types'


export const Context = createContext({} as ContextUsersProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [users, setUsers] = useState<UserProjectsProps[]>([])
  const [filterOptionsUserType, setFilterOptionsUserType] = useState(
    DEFAULT.FILTER_OPTIONS_USERS
  )

  const contextProjectProps = {
    users,
    isLoading,
    meta,
    paginate: { ...meta.paginate, setCurrent_page: setPage },
    filterOptionsUserType,
    handleSearch,
    handleOrder,
    handleFillProject_User,
    handleFillProject_Job,
    navigateTo,
    handleUpdateUser,
  }

  async function fetchListUsers() {
    setIsLoading(true)
    const { data } = await api.get(routes.usersProjects.list, {
      params: {
        page: meta.paginate.current_page,
        search: meta.search && meta.search,
        user_type_id: meta.users && meta.users,
        order: meta.order,
        orderField: meta.orderField,
      }
    })
    setUsers(data?.data)
    setMeta((old) => ({ ...old, paginate: { ...old.paginate, last_page: data.meta.last_page } }))
    setIsLoading(false)
  }

  async function handleUpdateUser(id: number, name: string) {
    await api.patch(routes.usersProjects.userProjects(id), {
      project_id: id
    })
    fetchListUsers()
  }


  async function fetchFiltersUsers() {
    const { data } = await api.get(
      routes.professional.list + '?limit=120',
      {
        params: { is_active: 1 }
      }
    )

    setFilterOptionsUserType({
      users: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    }) 
  }

  function handleFillProject_User(
    user_type_id: number | null
    ) {
      setMeta((old) => ({
        ...old,
        user_type_id,
        paginate: { ...old.paginate, current_page: 1 }
      }))
    }

  function handleFillProject_Job(
    job_type_id: number | null
    ) {
      setMeta((old) => ({
        ...old,
        job_type_id,
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
      fn: fetchListUsers,
      listener: [
        meta.paginate.current_page,
        meta.search,
        meta.users,
        meta.order,
      ]
    })

    useDebounce({
      fn: fetchFiltersUsers,
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
