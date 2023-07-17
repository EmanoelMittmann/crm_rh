import { useContext, useMemo } from 'react'

import { List } from 'contexts'
import { PendingProps } from 'contexts/List/ExtraHoursRh/types'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
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

    return (
      <>
        {extraHoursRh.map((props: PendingProps) => (
          <Shelf
            config={{
              template: GRID_TEMPLATE,
              options: POPOVER_OPTIONS(props.id)
            }}
            {...{ props }}
          />
        ))}
      </>
    )
  }, [isLoading, extraHoursRh])

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
