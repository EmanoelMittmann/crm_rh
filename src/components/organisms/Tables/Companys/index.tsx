import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
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

    if (companys.length === 0) {
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Empresa não encontrada
          </Typography>
        </NotFoundWrapper>
      )
    }
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
      />
      {Table}
    </Main>
  )
}
