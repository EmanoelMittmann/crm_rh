import { useContext, useMemo } from 'react'
import { List } from 'contexts'
import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'
import { OrderOfServiceProps } from './types'

export const OrderOfService = () => {
  const { orderOfService, handleOrder, isLoading } =
    useContext(List.OrderOfService.Context)

  const POPOVER_OPTIONS = (id: number, name: string) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return orderOfService.map((props: OrderOfServiceProps) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.name)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, orderOfService])

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
