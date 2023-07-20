import { useContext, useMemo } from 'react'

import { List } from 'contexts'
import { OrderPropsProfessional } from 'contexts/List/OrderOfServiceProfessional/types'

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
  const {
    professionalOS,
    handleOrder,
    isLoading,
    allProfessionalChecked,
    setAllProfessionalChecked
  } = useContext(List.OrderOfServiceprofessionalOS.Context)

  const POPOVER_OPTIONS = (id: number, name: string) => []

  const Table = useMemo(() => {
    if (isLoading)
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )

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
        setAllProfessionalChecked={setAllProfessionalChecked}
        allProfessionalChecked={allProfessionalChecked}
      />
      {Table}
    </Main>
  )
}
