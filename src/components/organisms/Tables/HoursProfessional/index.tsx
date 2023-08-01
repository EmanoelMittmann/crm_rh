import React, { useContext, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { HoursProps } from 'contexts/List/Hours/Professional/types'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
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

    if (releases.length === 0) {
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
    return releases.map((props) => (
      <Shelf
        key={props.user_id}
        config={{
          template: GRID_TEMPLATE,
          options: []
        }}
        {...{ props }}
      />
    ))
  }, [isLoading, releases])

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
