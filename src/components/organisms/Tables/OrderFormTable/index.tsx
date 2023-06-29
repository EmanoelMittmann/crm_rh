import { useContext, useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'
import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'

import { GRID_TEMPLATE, HEADERS } from './constants'
import { Shelf } from './Shelf'
import { ScrollContainer } from './style'

export const OrderFormTable = () => {
  const { professionalOS, handleOrder, isLoading } = useContext(
    List.OrderOfServiceprofessionalOS.Context
  )
  const { setValue, watch, getValues } = useFormContext()
  const POPOVER_OPTIONS = (id: number) => []

  const professional = professionalOS.filter(
    (professional: any) => professional.professional_data !== null
  )

  const orderData = getValues('professionals') || []
  console.log('atual: ', orderData)

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return (
      <ScrollContainer>
        {professional.map((props: any) => (
          <Shelf
            key={props.id}
            config={{
              template: GRID_TEMPLATE,
              options: POPOVER_OPTIONS(props.id)
            }}
            orderData={orderData}
            props={props}
          />
        ))}
        {orderData.map((props: any) => (
          <Shelf
            key={props.id}
            config={{
              template: GRID_TEMPLATE,
              options: POPOVER_OPTIONS(props.id)
            }}
            orderData={props}
            props={props}
          />
        ))}
      </ScrollContainer>
    )
  }, [isLoading, professional])

  return (
    <Main>
      <TableHeader
        headers={HEADERS}
        template={GRID_TEMPLATE}
        handleOrder={handleOrder}
      />
      {Table}
    </Main>
  )
}
