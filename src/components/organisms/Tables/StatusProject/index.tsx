import { useContext, useMemo, useRef } from 'react'

import { List } from 'contexts'
import { ColorProps } from 'contexts/List/Settings/StatusProjects/types'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  IHandleModalColorsPropsEdit,
  Modal
} from 'components/molecules/Modais'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import Shelf from './shelf'

export const StatusProject = () => {
  const {
    statusProjects,
    isLoading,
    handleOrder,
    handleUpdateStatusProject,
    handleUpdateStatus
  } = useContext(List.Status.Context)
  const modalRef = useRef<IHandleModalColorsPropsEdit>(null)

  const POPOVER_OPTIONS = (
    id: number,
    name: string,
    status: boolean,
    color: ColorProps
  ) => [
    {
      label: 'Editar',
      callback: () => modalRef.current?.open(id, name, color)
    },
    {
      label: status ? 'Inativar' : 'Ativar',
      callback: () => handleUpdateStatus(id)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return statusProjects.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(
            props.id,
            props.name,
            props.is_active,
            props.color
          )
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      <Modal.Colors.Edit
        ref={modalRef}
        Event={handleUpdateStatusProject}
        placeholder='Status de Projeto'
        text='Editar Status'
      />
      {Table}
    </Main>
  )
}
