import { useContext, useMemo } from 'react'

import { List } from 'contexts'
import {
  ExtraHoursRhProps,
  PendingProps
} from 'contexts/List/ExtraHoursRh/types'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'

export const ExtraHoursRh = () => {
  const { extraHoursRh, navigateTo, isLoading, handleOrder } =
    useContext(List.ExtraHoursRh.Context)

  const POPOVER_OPTIONS = (user_id: number) => []

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
              options: POPOVER_OPTIONS(props.user_id)
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
      />
      {Table}
    </Main>
  )
}
