import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import Shelf from './Shelf'

export const Notes = () => {
  const { isLoading, notes, handleOrder } = useContext(
    List.Notes.Context
  )

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (notes.length === 0) {
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Nota fiscal não encontrada
          </Typography>
        </NotFoundWrapper>
      )
    }
    return notes?.map((props) => (
      <Shelf key={props.id} {...{ props }} />
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
