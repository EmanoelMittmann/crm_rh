import { formatDate } from '../../../utils/formatDate'
import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { GRID_TEMPLATE } from './constants'
import { ShelfProps } from './types'

const Shelf = ({ props }: ShelfProps) => {
  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn left='0.2em'>
        <Text>{props.id}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.4em'>
        <Text>{formatDate(props.created_at)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Text> {formatDate(props.file_xml.date_emission_nf)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Text> {props.file_xml.number_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.7em'>
        <Text>{props.file_xml.value_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.8em'>
        <Text>{props.file.name}</Text>
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
