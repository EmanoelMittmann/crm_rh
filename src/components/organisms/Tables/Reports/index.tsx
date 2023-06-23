import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { GRID_TEMPLATE, HEADER } from './constants'
import Shelf from './shelf'

export const Reports = () => {
  const { isLoading, reports, handleOrder, handleDownLoad } =
    useContext(List.Reports.Context)

  const POPOVER_OPTIONS = (id: number) => [
    { label: 'Detalhes', callback: () => {} },
    {
      label: 'Baixar PDF',
      callback: () => handleDownLoad(id, 'PDF')
    },
    { label: 'Baixar XML', callback: () => handleDownLoad(id, 'XML') }
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
          options: POPOVER_OPTIONS(props.user_id)
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
