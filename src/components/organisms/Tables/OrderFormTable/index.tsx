import { useContext, useMemo } from 'react'

import { Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { OrderPropsProfessional } from 'contexts/List/OrderOfServiceProfessional/types'
import { theme } from 'styles'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main,
  NotFoundWrapper
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './Shelf'
import { ScrollContainer } from './style'

export const OrderFormTable = () => {
  const {
    professionalOS,
    handleOrder,
    isLoading,
    allProfessionalChecked,
    toggleCheckedAll
  } = useContext(List.OrderOfServiceprofessionalOS.Context)

  const POPOVER_OPTIONS = (id: number, name: string) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    if (professionalOS.length === 0) {
      return (
        <ScrollContainer>
          <NotFoundWrapper>
            <Typography
              color={theme.neutrals.gray5}
              fontWeight='bold'
              type='h3'
            >
              Profissional não encontrado
            </Typography>
          </NotFoundWrapper>
        </ScrollContainer>
      )
    }

    return (
      <ScrollContainer>
        <>
          {professionalOS.map((props: OrderPropsProfessional) => (
            <Shelf
              config={{
                template: GRID_TEMPLATE,
                options: POPOVER_OPTIONS(props.id, props.name)
              }}
              {...{ props }}
            />
          ))}
        </>
      </ScrollContainer>
    )
  }, [isLoading, professionalOS])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
        toggleCheckedAll={toggleCheckedAll}
        allProfessionalChecked={allProfessionalChecked}
      />
      {Table}
    </Main>
  )
}
