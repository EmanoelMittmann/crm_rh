import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'
import { OrderOfServiceProps } from './types'

export const OrderOfService = () => {
  const { orderOfService, handleOrder, isLoading } = useContext(
    List.OrderOfService.Context
  )

  const POPOVER_OPTIONS = (id: number, name: string) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (orderOfService.length === 0) {
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Profissional não encontrado
          </Typography>
        </NotFoundWrapper>
      )
    }

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
