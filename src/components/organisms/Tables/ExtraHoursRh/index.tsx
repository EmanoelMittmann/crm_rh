import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { PendingProps } from 'contexts/List/ExtraHoursRh/types'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'

export const ExtraHoursRh = () => {
  const { extraHoursRh, isLoading, handleOrder } = useContext(
    List.ExtraHoursRh.Context
  )

  const POPOVER_OPTIONS = (id: number) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (extraHoursRh.length === 0) {
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

    return extraHoursRh.map((props: PendingProps) => (
      <Shelf
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, extraHoursRh])

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
