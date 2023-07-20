import { useContext, useMemo, useRef } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { Modal } from 'components/molecules/Modais'
import { IHandleModalColorsPropsNew } from 'components/molecules/Modais/EditorStatus'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'

export const Projects = () => {
  const modalRef = useRef<IHandleModalColorsPropsNew>(null)
  const {
    projects,
    navigateTo,
    handleOrder,
    isLoading,
    handleUpdateStatus
  } = useContext(List.Project.Context)

  const POPOVER_OPTIONS = (id: number, status: any, name: string) => [
    {
      label: 'Editar Projeto',
      callback: () => navigateTo(`/project/${id}`)
    },
    {
      label: 'Editar Status',
      callback: () => modalRef.current?.open(id, name, status)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return projects.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.status, props.name)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, projects])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      <Modal.EditorStatus
        ref={modalRef}
        placeholder='Editar Status'
        text='Editar Status'
        EventOne={handleUpdateStatus}
      />
      {Table}
    </Main>
  )
}
