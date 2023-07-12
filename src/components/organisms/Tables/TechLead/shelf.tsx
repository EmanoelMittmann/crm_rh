import React from 'react'

import { TechLeadProps } from 'contexts/List/Hours/Techlead/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({
  config,
  props
}: ShelfProps<TechLeadProps>) => {
  const {
    avatar,
    hour_quantity,
    launch_date,
    project_name,
    status_id,
    status_name,
    user_name
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn>{user_name}</ContainerShelfColumn>
      <ContainerShelfColumn>{hour_quantity}</ContainerShelfColumn>
      <ContainerShelfColumn>{project_name}</ContainerShelfColumn>
      <ContainerShelfColumn>
        {formatDate(launch_date)}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Badge.Hours status={{ id: status_id, name: status_name }} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
