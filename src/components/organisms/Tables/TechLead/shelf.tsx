import React from 'react'

import { TechLeadProps } from 'contexts/List/Hours/Techlead/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import {
  ContainerShelf,
  ContainerShelfColumn,
  HoverText
} from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({
  config,
  props
}: ShelfProps<TechLeadProps>) => {
  const {
    hour_quantity,
    launch_date,
    project_name,
    status_id,
    status_name,
    user_name
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn cursor='pointer' left='1.2em'>
        <HoverText onClick={() => config.options[0].callback()}>
          {user_name}
        </HoverText>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1.2em'>
        {hour_quantity}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {project_name}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {formatDate(launch_date)}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Badge.Hours status={{ id: status_id, name: status_name }} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
