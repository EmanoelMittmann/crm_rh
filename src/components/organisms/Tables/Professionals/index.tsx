import { useContext, useMemo } from 'react'
import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { Shelf } from './shelf'
import { List } from 'contexts'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { LoadingWrapper, Main } from '../style'

export const Professionals = () => {
  const { professionals, navigateTo, handleOrder, isLoading } = useContext(List.Professional.Context)

  const POPOVER_OPTIONS = (id: number) => [
    {
      label: 'Editar',
      callback: () => navigateTo(`/professionals/${id}`),
    },
    {
      label: 'Excluir',
      callback: () => {},
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
      <Shelf key={props.id} config={{ template: GRID_TEMPLATE, options: POPOVER_OPTIONS(props.id) }} {...{ props }} />
    ))
  }, [isLoading, professionals])

  return (
    <Main>
      <TableHeader headers={HEADERS} template={GRID_TEMPLATE} handleOrder={handleOrder} />
      {Table}
    </Main>
  )
}
