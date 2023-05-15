import { useContext, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './Shelf'
import { FormProjectProps } from './types'

export const ProjectTeam = () => {
  const { watch, setValue } = useFormContext<FormProjectProps>()
  const Team = watch('team', [])
  const { isLoading, handleOrder } = useContext(List.Project.Context)
  const navigate = useNavigate()



  const POPOVER_OPTIONS = (user_id: number, status: any) => [
    user_id ? (
      {
        label: 'Remover',
        callback: () => {
          const newTeam = Team.filter((item) => item.user_id !== user_id)
          setValue('team', newTeam)
        }
      }
     
    ) : (
        {
          label: 'Editar',
          callback: () => navigate(`/userProjects/project/${user_id}`)
        }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return Team.map((props) => (
      <Shelf
        key={props.user_id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.user_id, props.is_active)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, Team])

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


