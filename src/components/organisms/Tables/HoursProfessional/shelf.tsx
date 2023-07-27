import { HoursProps } from 'contexts/List/Hours/Professional/types'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({ config, props }: ShelfProps<HoursProps>) => {
  return (
    <>
      <ContainerShelf template={config.template}>
        <ContainerShelfColumn>{props.id}</ContainerShelfColumn>
        <ContainerShelfColumn>
          {formatDate(props.launch_date)}
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          {formatDate(props.end_date)}
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          {props.hour_quantity}
        </ContainerShelfColumn>
        <ContainerShelfColumn width='130px'>
          {props.project.name}
        </ContainerShelfColumn>
        <ContainerShelfColumn width='240px'>
          <Badge.Hours status={props.status} />
          <Popover options={config.options} />
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}
