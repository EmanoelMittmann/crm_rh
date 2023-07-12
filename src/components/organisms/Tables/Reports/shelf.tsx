import React from 'react'

import { ReportsProps } from 'contexts/List/Reports/types'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProps } from '../types'
import { GRID_TEMPLATE } from './constants'

const Shelf = ({ props, config }: ShelfProps<ReportsProps>) => {
  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn>
        <Text> {props.order.companies.razao_social}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{props.user.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Text> {props.order.companies.cnpj}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.7em'>
        <Text>
          {' '}
          {props.fiscal_note !== null
            ? props.fiscal_note.file_xml.value_nf
            : 'R$ 0,00'}
        </Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        <Text>{formatDate(props.date_payment)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Badge.Report status={props.status_payment} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
