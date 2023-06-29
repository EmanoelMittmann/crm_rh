import {
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { useFormContext } from 'react-hook-form'
import { useParams } from 'react-router-dom'

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
  const POPOVER_OPTIONS = (id: number) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

    return (
      <ScrollContainer>
        {professionalOS.map((props: any) => (
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
  }, [isLoading, professionalOS])

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
