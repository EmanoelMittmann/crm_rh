import React from 'react'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import Edit from 'components/molecules/Modais/Edit'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from './types'

const Shelf = ({ props, config }: ShelfProps) => {
  return (
    <>
      <ContainerShelf template={config.template}>
        <ContainerShelfColumn title={props.name}>
          {props.name}
        </ContainerShelfColumn>
        <ContainerShelfColumn gap='1em'>
          <Badge.Status status={props.is_active} />
          <Popover options={config.options} />
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}

export default Shelf
