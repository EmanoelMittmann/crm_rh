import { HoursProps } from 'contexts/List/Hours/Professional/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({ config, props }: ShelfProps<HoursProps>) => {
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn left='1.3em'>
        {props.id}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {formatDate(props.launch_date)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1.2em'>
        {formatDate(props.end_date)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1.2em'>
        {props.hour_quantity}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {props.project.name}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Badge.Hours status={props.status} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
