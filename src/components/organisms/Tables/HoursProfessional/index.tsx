import React, { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

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
  const navigate = useNavigate()
  const { handleOrder, isLoading, releases, details } = useContext(
    List.ProfessionalHours.Context
  )
  console.log('detalhes: ', details)

  const professional = details.find((item: HoursProps) => ({
    id: item.id
  }))

  const POPOVER_OPTIONS = (id: number) => [
    {
      label: 'Detalhes',
      callback: () => navigate(`/detaisHours/${id}`)
    }
  ]

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
          options: POPOVER_OPTIONS(props.id)
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
