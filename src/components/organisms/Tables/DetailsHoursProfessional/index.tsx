import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './contants'
import { Shelf } from './shelf'

export const DetaislHoursProfessional = () => {
  const { handleOrder, isLoading, details } = useContext(
    List.ProfessionalHours.Context
  )

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (details.length === 0) {
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Nenhum Lançamento não encontrado
          </Typography>
        </NotFoundWrapper>
      )
    }
    return details.map((props) => (
      <Shelf
        key={props.user_id}
        config={{
          template: GRID_TEMPLATE,
          options: []
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        template={GRID_TEMPLATE}
        headers={HEADERS}
        handleOrder={() => handleOrder()}
      />

      {Table}
    </Main>
  )
}
