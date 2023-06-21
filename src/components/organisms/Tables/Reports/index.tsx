import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADER } from './constants'
import Shelf from './shelf'

export const Reports = () => {
  const { isLoading, reports, handleOrder } = useContext(
    List.Reports.Context
  )

  const POPOVER_OPTIONS = () => [
    { label: 'Detalhes', callback: () => {} },
    { label: 'Baixar PDF', callback: () => {} },
    { label: 'Baixar XML', callback: () => {} }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )
    return reports.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS()
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        headers={HEADER}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
    </Main>
  )
}
