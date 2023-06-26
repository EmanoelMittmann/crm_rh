import React from 'react'

import { ReportsProps } from 'contexts/List/Reports/types'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from '../types'
import { GRID_TEMPLATE } from './constants'

const Shelf = ({ props, config }: ShelfProps<ReportsProps>) => {
  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn>
        {props.order.companies.razao_social}
      </ContainerShelfColumn>
      <ContainerShelfColumn>{props.user.name}</ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        {props.order.companies.cnpj}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.7em'>
        {props.fiscal_note !== null
          ? props.fiscal_note.file_xml.value_nf
          : 'R$ 0,00'}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {formatDate(props.date_payment)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Badge.Report status={props.status_payment} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
