import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import DEFAULT from './constants'
import { ContextTeamProps, ReactNode } from './types'
import { UserProjectsProps } from 'types'

export const Context = createContext({} as ContextTeamProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [meta, setMeta] = useState(DEFAULT.META_PROPS)
  const [team, setTeam] = useState<UserProjectsProps[]>([])
  const [filterOptionsTeam, setFilterOptionsTeam] = useState(
    DEFAULT.FILTER_OPTIONS_USERS
  )

  const contextProjectProps = {
    team,
    isLoading,
    meta,
    filterOptionsTeam,
    navigateTo,
    handleUpdateUser
  }

  async function fetchListUsers() {
    setIsLoading(true)
    const { data } = await api.get(routes.usersProjects.list, {
      params: {
        search: meta.search && meta.search,
        user_id: meta.user_id && meta.user_id,
        team: meta.team && meta.team
      }
    })
    setTeam(data)
    setIsLoading(false)
  }

  const fetchUsers = async () => {
    try {
      try {
        const response = await api.get(routes.usersProjects.list)
        setTeam(response.data)
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const allUsers = team.flatMap((selectUser: any) => selectUser.users)

  async function handleUpdateUser(id: number, name: string) {
    await api.put(routes.usersProjects.userProjects(id), {
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

    setFilterOptionsTeam({
      users: data.data.map(
        ({ name, id }: { name: string; id: number }) => ({
          label: name,
          value: id
        })
      )
    })
  }

  function navigateTo(url: string) {
    navigate(url)
  }

  useDebounce({
    fn: fetchListUsers,
    listener: [meta.search, meta.team, meta.user_id]
  })

  useDebounce({
    fn: fetchFiltersUsers,
    delay: 0,
    listener: []
  })

  return (
    <Context.Provider value={contextProjectProps}>
      {children}
    </Context.Provider>
  )
}
