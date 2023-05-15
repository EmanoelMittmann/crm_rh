import { useContext, useRef, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import {
  IHandleModalPropsEdit,
  TableHeader
} from 'components/molecules'
import { Modal } from 'components/molecules/Modais'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE } from './contants'
import { HEADERS } from './contants'
import Shelf from './shelf'

export const TypesProject = () => {
  const {
    isLoading,
    typesProjects,
    handleOrder,
    handleUpdateType,
    handleUpdateStatus
  } = useContext(List.Types.Context)
  const modalRef = useRef<IHandleModalPropsEdit>(null)

  const POPOVER_OPTIONS = (
    id: number,
    name: string,
    status: boolean
  ) => [
    {
      label: 'Editar',
      callback: () => modalRef.current?.open(id, name)
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

    return typesProjects.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(
            props.id,
            props.name,
            props.is_active
          )
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        handleOrder={handleOrder}
        template={GRID_TEMPLATE}
        headers={HEADERS}
      />
      <Modal.Edit
        text='Edição de Tipo de Projeto'
        placeholder='tipo de projeto'
        EventOne={handleUpdateType}
        ref={modalRef}
      />
      {Table}
    </Main>
  )
}
