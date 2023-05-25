import { useContext, useMemo, useRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from '../../Forms/Project/constants'
import { FormProjectProps } from '../../Forms/Project/types'
import { Shelf } from './Shelf'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalPropsUserNew } from 'components/molecules/Modais/UserEditor'


export const ProjectTeam = () => {
  const { watch, setValue } = useFormContext<FormProjectProps>()
  const { isLoading, handleOrder } = useContext(List.Project.Context)
  const navigate = useNavigate()
  const modalRef = useRef<IHandleModalPropsUserNew>(null)
  const Team = watch('team', [])
  const project_id = watch('id', 0)

  const POPOVER_OPTIONS = (user_id: number, status: boolean, name: string) => [
    project_id ?
    {
      label: 'Editar',
      callback: () => modalRef.current?.open(user_id, name)
    }
    :
    {
      label: 'Remover',
      callback: () => {
        const newTeam = Team.filter(
          (item) => item.user_id !== user_id
        )
        setValue('team', newTeam)
      }
    }
  ]

  function handleUpdateUser(user_id: number) {
    const newTeam = Team.map((item) =>
    item.user_id === user_id ? { ...item, } : item
    )
    setValue('team', newTeam)
    
  }


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
          options: POPOVER_OPTIONS(props.user_id, props.is_active, props.name)
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
