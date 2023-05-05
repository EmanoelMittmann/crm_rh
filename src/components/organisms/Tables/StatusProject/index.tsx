import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import Shelf from './shelf'

export const StatusProject = () => {
  const {
    statusProjects,
    isLoading,
    handleOrder,
    handleUpdateStatusProject,
    handleCreateStatusProject,
    handleUpdateStatus
  } = useContext(List.Status.Context)

  const POPOVER_OPTIONS = (
    id: number,
    name: string,
    status: boolean
  ) => [
    { label: 'Editar', callback: () => {} },
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
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
    </Main>
  )
}
