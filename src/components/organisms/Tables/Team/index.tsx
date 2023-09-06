import { useContext, useMemo, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  IHandleModalPropsDelete,
  Modal
} from 'components/molecules/Modais'
import { IHandleModalPropsUserNew } from 'components/molecules/Modais/UserEditor'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import { handleDeleteTeam } from 'components/organisms/Forms/Team/logic'
import { TeamMemberProps } from 'components/organisms/Forms/Team/types'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from '../../Forms/Project/constants'
import { Shelf } from './Shelf'
import { ScrollContainer } from './style'

export const Team = () => {
  const {
    isLoading,
    handleOrder,
    handleUpdateUser,
    team,
    removeUser
  } = useContext(List.Team.Context)
  const Context = useFormContext<FormTeamProps>()
  const { watch } = Context

  const modalRef = useRef<IHandleModalPropsUserNew>(null)
  const modalRefRemove = useRef<IHandleModalPropsDelete>(null)

  const TeamUserForms = watch('team') || []
  const Team = team.length == 0 ? TeamUserForms : team

  const { id } = useParams()
  const project_id = id

  const POPOVER_OPTIONS = (
    payload: TeamMemberProps,
    user_projects_id: number
  ) => {
    const options = []

    if (project_id) {
      const option = {
        label: 'Editar',
        callback: () => modalRef.current?.open(user_projects_id)
      }
      options.push(option)
    }
    const option = {
      label: 'Remover',
      callback: () =>
        project_id
          ? modalRefRemove.current?.open(
              user_projects_id,
              payload.user_id
            )
          : handleDeleteTeam(Context, payload)
    }
    options.push(option)
    return options
  }

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return (
      <ScrollContainer>
        <>
          {Team.map((props) => (
            <Shelf
              key={props.user_projects_id}
              config={{
                template: GRID_TEMPLATE,
                options: POPOVER_OPTIONS(
                  props,
                  props.user_projects_id
                )
              }}
              {...{ props }}
            />
          ))}
        </>
      </ScrollContainer>
    )
  }, [isLoading, Team])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      <Modal.UserEditor
        ref={modalRef}
        placeholder='Editar'
        text='Editar Dados do Profissional'
        EventOne={handleUpdateUser}
      />
      <Modal.Delete
        ref={modalRefRemove}
        title='Remover Profissional'
        EventOne={removeUser}
      />
      {Table}
    </Main>
  )
}
