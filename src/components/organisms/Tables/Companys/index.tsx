import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main } from '../style'
import { HEADERS, GRID_TEMPLATE } from './constants'
import { Shelf } from './Shelf'

export const Companys = () => {
  const navigate = useNavigate()
  const { companys, isLoading, handleOrder } = useContext(
    List.Company.Context
  )

  const POPOVER_OPTIONS = (id: number) => [
    { label: 'Editar', callback: () => navigate(`/company/${id}`) }
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
          options: POPOVER_OPTIONS(props.id)
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
        handleCheckedAll={() => {}}
      />
      {Table}
    </Main>
  )
}
