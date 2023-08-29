import { useContext, useMemo, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { toast } from '@stardust-ds/react'
import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalPropsUserNew } from 'components/molecules/Modais/UserEditor'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import api from 'api'
import { routes } from 'routes'

import { GRID_TEMPLATE, HEADERS } from '../../Forms/Project/constants'
import { Shelf } from './Shelf'
import { ScrollContainer } from './style'

export const Team = () => {
  const { watch, setValue } = useFormContext<FormTeamProps>()
  const { isLoading, handleOrder } = useContext(List.Project.Context)

  const modalRef = useRef<IHandleModalPropsUserNew>(null)

  const Team = watch('team', [])

  const { id } = useParams()
  const project_id = id

  const POPOVER_OPTIONS = (
    user_id: number,
    status: boolean,
    name: string,
    job_: string,
    user_projects_id: number
  ) => {
    const options = []

    if (project_id) {
      const option = {
        label: 'Editar',
        callback: () => modalRef.current?.open(user_id, job_)
      }
      options.push(option)
    }
    const option = {
      label: 'Remover',
      callback: () => removeUser(user_id, user_projects_id)
    }
    options.push(option)
    return options
  }

  async function handleUpdateUser(user_id: number, data: any) {
    try {
      if (project_id) {
        const updatedTeam = [...Team]
        const index = Team.findIndex(
          (item) => item.user_id === user_id
        )

        if (index !== -1) {
          const updatedUser = {
            ...updatedTeam[index],
            user_id: user_id,
            user_projects_id: data.user_projects_id,
            hours_mounths_estimated: data.hours_mounths_estimated,
            extra_hours_estimated: data.extra_hours_estimated,
            extra_hours_performed: data.extra_hours_performed,
            hours_mounths_performed: data.hours_mounths_performed,
            date_start_allocation: data.date_start_allocation,
            date_end_allocation: data.date_end_allocation,
            status: data.status,
            job_: data.job_,
            job_id: data.job_id,
            isTechLead: data.isTechLead
          }
          updatedTeam[index] = updatedUser
          setValue('team', updatedTeam)

          const editTeam = routes.project.userProjects(
            Number(project_id)
          )
          const update = {
            user_id: user_id,
            user_projects_id: data.user_projects_id,
            hours_mounths_estimated: data.hours_mounths_estimated,
            extra_hours_estimated: data.extra_hours_estimated,
            extra_hours_performed: data.extra_hours_performed,
            hours_mounths_performed: data.hours_mounths_performed,
            date_start_allocation: data.date_start_allocation,
            date_end_allocation: data.date_end_allocation,
            status: data.status,
            job_: data.job_,
            job_id: data.job_.id,
            isTechLead: data.isTechLead
          }
          setValue('team', updatedTeam)
          await api.put(editTeam, update)
        }
      }

      toast.success({
        title: 'Profissional atualizado com sucesso'
      })
    } catch (err) {
      toast.error({
        title: 'Erro ao atualizar profissional'
      })
    }
  }

  function removeUser(
    user_id: number,
    user_projects_id: number
  ) {
    if (project_id) {
      api.delete(routes.project.userProjects(Number(project_id)), {
        data: {user_projects_id, user_id }
      })
    }

    const indexToRemove = Team.findIndex(
      (item) => item.user_id === user_id
    )

    if (indexToRemove !== -1) {
      const newTeam = [...Team]
      newTeam.splice(indexToRemove, 1)
      setValue('team', newTeam)

      toast({
        title: 'Profissional removido com sucesso',
        type: 'success',
        position: 'bottom-right'
      })
    } else {
      toast({
        title: 'Profissional não encontrado na equipe',
        type: 'error',
        position: 'bottom-right'
      })
    }
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
              key={props.user_id}
              config={{
                template: GRID_TEMPLATE,
                options: POPOVER_OPTIONS(
                  props.user_id,
                  props.is_active,
                  props.name,
                  props.job_,
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
      {Table}
    </Main>
  )
}
