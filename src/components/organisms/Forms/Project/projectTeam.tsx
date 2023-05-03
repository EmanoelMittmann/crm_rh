import { useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'
import { UserProjectsProps } from 'types'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './Shelf'

export const ProjectTeam = () => {
  const [userProject, setUserProject] = useState<UserProjectsProps[]>(
    []
  )
  const { projects, isLoading, handleOrder } = useContext(
    List.Project.Context
  )
  const navigate = useNavigate()

  async function fetchListUserProjects() {
    const { data } = await api.get(routes.user_projects.list, {
      params: { is_active: 1 }
    })
    setUserProject(data)
  }

  const POPOVER_OPTIONS = (id: number, status: any) => [
    {
      label: 'Editar',
      callback: () => navigate(`/project/${id}`)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return userProject.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.status)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  useDebounce({
    fn: fetchListUserProjects,
    delay: 0,
    listener: []
  })
  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
    </Main>
  )
}
