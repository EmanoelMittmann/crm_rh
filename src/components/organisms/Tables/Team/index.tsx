import { useContext, useMemo, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { List } from 'contexts'
import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'
import { GRID_TEMPLATE, HEADERS } from '../../Forms/Project/constants'
import { Shelf } from './Shelf'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalPropsUserNew } from 'components/molecules/Modais/UserEditor'
import { FormTeamProps } from 'components/organisms/Forms/Project'
import api from 'api'
import { routes } from 'routes'
import { percentCalculate } from 'components/utils/percentCalculate'
import { toast } from '@stardust-ds/react'


export const Team = () => {
  const { watch, setValue } = useFormContext<FormTeamProps>()
  const { isLoading, handleOrder } = useContext(List.Project.Context)
  const modalRef = useRef<IHandleModalPropsUserNew>(null)
  const Team = watch('team', [])
  const project_id = watch('id')

  const POPOVER_OPTIONS = (user_id: number, status: boolean, name: string) => [
    {
      label: 'Editar',
      callback: () => modalRef.current?.open(user_id, name)
    },
    {
      label: 'Remover',
      callback: () => removeUser(user_id)
    }
  ]

  function handleUpdateUser(user_id: number) {
    const newTeam = Team.map((item) =>
      item.user_id === user_id ? { ...item, } : item
    )
    api.put(routes.project.userProjects(Number(user_id)), newTeam)

    setValue('team', newTeam)
    return newTeam


  }

  function removeUser(user_id: number) {
    if (project_id) {
      api.delete(routes.project.userProjects(Number(project_id)), { data: { user_id } })

    }
    const newTeam = Team.filter(
      (item) => item.user_id !== user_id
    )

    setValue('team', newTeam)
    toast({
      title: 'Profissional removido com sucesso',
      type: 'success',
    })
    
  }

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return (
      <>
        {Team.map((props) => (
          < Shelf
            key={props.user_id}
            config={{
              template: GRID_TEMPLATE,
              options: POPOVER_OPTIONS(props.user_id, props.is_active, props.name)
            }
            }
            {...{ props }}
          />
        ))}
        {Team.length > 0 && (
          <Shelf
            config={{
              template: GRID_TEMPLATE,
              options: []
            }}
            {...{
              props: {

                hours_mounths_estimated: Team.reduce(
                  (acc, cur) => acc + cur.hours_mounths_estimated,
                  0
                ),
                hours_mounths_performed: Team.reduce(
                  (acc, cur) => acc + cur.hours_mounths_performed,
                  0
                ),
                extra_hours_estimated: Team.reduce(
                  (acc, cur) => acc + cur.extra_hours_estimated,
                  0
                ),
                extra_hours_performed: Team.reduce(
                  (acc, cur) => acc + cur.extra_hours_performed,
                  0
                ),
                hours_mounths_percent: +Team
                  .map((item) =>
                    percentCalculate(
                      item.hours_mounths_performed,
                      item.hours_mounths_estimated
                    )
                  )
                  .reduce((acc, cur) => acc + cur, 0)
                  .toFixed(),
                extra_hours_percent: Team
                  .map((item) =>
                    percentCalculate(
                      item.extra_hours_performed,
                      item.extra_hours_estimated
                    )
                  )
                  .reduce((acc, cur) => acc + cur, 0),
                id: 0,
              }
            }}
          />
        )
        }
      </>
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
        placeholder="Editar"
        text="Editar Dados do Profissional"
        EventOne={handleUpdateUser}
      />
      {Table}
    </Main>
  )
}
