import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import { LoadingWrapper, Main, NotFoundWrapper } from '../style'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './shelf'

export const Professionals = () => {
  const {
    professionals,
    navigateTo,
    handleOrder,
    isLoading,
    handleUpdateStatus
  } = useContext(List.Professional.Context)

  const POPOVER_OPTIONS = (id: number, status: boolean) => [
    {
      label: 'Editar',
      callback: () => navigateTo(`/professional/${id}`)
    },
    {
      label: status ? 'Inativar' : 'Ativar',
      callback: () => handleUpdateStatus(id)
    }
  ]

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )
    if (professionals.length === 0)
      return (
        <NotFoundWrapper>
          <Typography
            color={theme.neutrals.gray5}
            fontWeight='bold'
            type='h3'
          >
            Usuário não encontrado
          </Typography>
        </NotFoundWrapper>
      )

    return professionals.map((props) => (
      <Shelf
        key={props.id}
        config={{
          template: GRID_TEMPLATE,
          options: POPOVER_OPTIONS(props.id, props.is_active)
        }}
        {...{ props }}
      />
    ))
  }, [isLoading])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
        handleCheckedAll={() => {}}
      />
      {Table}
    </Main>
  )
}
