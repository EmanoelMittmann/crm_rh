import React from 'react'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from './types'

export const shelf = ({ config, props }: ShelfProps) => {
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn>{props.name}</ContainerShelfColumn>
      <ContainerShelfColumn gap='0.5em' width='130px'>
        <Badge.Status status={props.is_active} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default shelf
