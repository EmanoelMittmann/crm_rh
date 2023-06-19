import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { List } from 'contexts'

import { Loading } from 'components/atoms'
import { TableHeader } from 'components/molecules'

import {
  LoadingWrapper,
  Main
} from 'components/organisms/Tables/style'


import { Shelf } from './Shelf'
import { FormOrderProps } from 'components/organisms/Forms/OrderOfService'
import api from 'api'
import { routes } from 'routes'
import { useParams } from 'react-router-dom'
import { GRID_TEMPLATE, HEADERS } from './constants'
import { ScrollContainer } from './style'


export const OrderFormTable = () => {
  const { watch, setValue } = useFormContext<FormOrderProps>()
  const {
    professionalOS,
    handleOrder,
    isLoading,
  } = useContext(List.OrderOfServiceprofessionalOS.Context)
  
  const POPOVER_OPTIONS = (id: number) => []

  const professional = professionalOS.filter((professional: any) => professional.professional_data !== null)
 

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

   return (
     <ScrollContainer>
       {professional.map((props) => (
       <Shelf
         config={{
           template: GRID_TEMPLATE,
           options: POPOVER_OPTIONS(props.id)
         }}
         {...{ props }}
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
