import { Box } from '@stardust-ds/react'
import { StatusProps } from 'contexts/List/Settings/StatusProjects/types'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from '../types'

const Shelf = ({ props, config }: ShelfProps<StatusProps>) => {
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn title={props.name} left='1.2em'>
        <Box
          px='xxs'
          bgColor={props.color.button_color}
          color={props.color.text_color}
          style={{ borderRadius: '10px' }}
        >
          {props.name}
        </Box>
      </ContainerShelfColumn>
      <ContainerShelfColumn gap='1em'>
        <Badge.Status status={props.is_active} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
