import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './contants'
import { Shelf } from './shelf'

export const TechLead = () => {
  const { isLoading, techLead, handleOrder } = useContext(
    List.TechLeadHours.Context
  )

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return techLead.map((props) => (
      <Shelf
        key={props.id}
        {...{ props }}
        config={{ template: GRID_TEMPLATE, options: [] }}
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
      {Table}
    </Main>
  )
}
