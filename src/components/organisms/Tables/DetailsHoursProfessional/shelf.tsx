import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({ config, props }: ShelfProps<any>) => {
  return (
    <ContainerShelf key={props.id} template={config.template}>
      <ContainerShelfColumn>
        <Text>{formatDate(props.created_at)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{props.hour_quantity}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn right='-0.9em'>
        <Text>{props.project.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn right='-0.9em'>
        <Text>{props.justification}</Text>
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
