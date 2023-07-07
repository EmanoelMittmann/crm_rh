import React, { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './contants'
import { Shelf } from './shelf'

export const HoursProfessional = () => {
  const { handleOrder, isLoading, releases } = useContext(
    List.ProfessionalHours.Context
  )
  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )
    return releases.map((props) => (
      <Shelf
        key={props.user_id}
        config={{ template: GRID_TEMPLATE, options: [] }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        template={GRID_TEMPLATE}
        headers={HEADERS}
        handleOrder={() => handleOrder}
      />
      {Table}
    </Main>
  )
}
