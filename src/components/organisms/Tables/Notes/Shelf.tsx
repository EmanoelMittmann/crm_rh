import { formatDate } from '../../../utils/formatDate'
import { ContainerShelf, ContainerShelfColumn } from '../style'
import { GRID_TEMPLATE } from './constants'
import { ShelfProps } from './types'

const Shelf = ({ props }: ShelfProps) => {
  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn left='0.2em'>
        {props.id}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.4em'>
        {formatDate(props.created_at)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        {formatDate(props.file_xml.date_emission_nf)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        {props.file_xml.number_nf}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.7em'>
        {props.file_xml.value_nf}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.8em'>
        {props.file.name}
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
