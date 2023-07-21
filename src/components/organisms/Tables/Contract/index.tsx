import React, { useContext, useMemo } from 'react'

import * as S from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import * as C from './constants'
import { Shelf } from './shelf'

export const Contracts = () => {
  const { contract, handleOrder, isLoading } = useContext(
    List.Contract.Context
  )

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (contract.length === 0) {
      return (
        <NotFoundWrapper>
          <S.Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Usuário não encontrado
          </S.Typography>
        </NotFoundWrapper>
      )
    }

    return contract.map((props) => (
      <Shelf
        key={props.id}
        config={{ template: C.GRID_TEMPLATE, options: [] }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        handleOrder={handleOrder}
        headers={C.HEADERS}
        template={C.GRID_TEMPLATE}
      />
      {Table}
    </Main>
  )
}
