import { useContext, useMemo } from 'react'
import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { Shelf } from './shelf'
import { List } from 'contexts'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { LoadingWrapper, Main } from '../style'

export const Professionals = () => {
  const { professionals, navigateTo, handleOrder, isLoading, handleUpdateStatus } = useContext(
    List.Professional.Context
  )

  const POPOVER_OPTIONS = (id: number, status: boolean) => [
    {
      label: 'Editar',
      callback: () => navigateTo(`/professionals/${id}`),
    },
    {
      label: status ? 'Inativar' : 'Ativar',
      callback: () => handleUpdateStatus(id),
    },
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return professionals.map((props) => (
      <Shelf
        key={props.id}
        config={{ template: GRID_TEMPLATE, options: POPOVER_OPTIONS(props.id, props.is_active) }}
        {...{ props }}
      />
    ))
  }, [isLoading, professionals])

  return (
    <Main>
      <TableHeader headers={HEADERS} template={GRID_TEMPLATE} handleOrder={handleOrder} />
      {Table}
    </Main>
  )
}
