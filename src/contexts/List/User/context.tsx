import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserProjectsProps } from 'types'
import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import {
  ContextUserProps,
  ReactNode
} from './types'

export const Context = createContext({} as ContextUserProps)

export const Provider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [usersProjects, setUsersProjects] = useState<UserProjectsProps[]>([])


  const ContextUserProps = {
    usersProjects,
    isLoading,
    navigateTo,
    handleOrder,
  }

  let params = {}
  async function fetchListUserProject() {
    setIsLoading(true)

    const { data } = await api.get(routes.usersProjects.list, {
      params: params
    })
    setUsersProjects(data)
  }
  function navigateTo(url: string) {
    navigate(url)
  }

  function handleOrder(_: string) {}

  useDebounce({
    fn: fetchListUserProject,
    delay: 0,
    listener: []
  })


  return (
    <Context.Provider value={ContextUserProps}>
      {children}
    </Context.Provider>
  )
}
