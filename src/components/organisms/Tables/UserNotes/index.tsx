import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import Shelf from './shelf'

export const UserNotes = () => {
  const { isLoading, notes, handleOrder } = useContext(
    List.UserNotes.Context
  )
  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

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
        handleCheckedAll={() => {}}
      />
      {Table}
    </Main>
  )
}
