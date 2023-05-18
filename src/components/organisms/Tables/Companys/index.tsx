import { useContext, useMemo } from 'react'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { HEADERS, GRID_TEMPLATE } from './constants'
import { Shelf } from './Shelf'

export const Companys = () => {
  const { companys, isLoading, handleOrder } = useContext(
    List.Company.Context
  )

  const POPOVER_OPTIONS = () => [
    { label: 'Editar', callback: () => {} }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return companys.map((props) => (
      <Shelf
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS()
        }}
        key={props.id}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        handleOrder={handleOrder}
        headers={HEADERS}
        template={GRID_TEMPLATE}
      />
      {Table}
    </Main>
  )
}
