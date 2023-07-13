import { useContext } from 'react'

import { List } from 'contexts'

import { formatDate } from '../../../utils/formatDate'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text,
  TextProfessional
} from '../style'
import { GRID_TEMPLATE } from './constants'
import { ShelfProps } from './types'

const Shelf = ({ props }: ShelfProps) => {
  const { dowloandFile } = useContext(List.Notes.Context)
  // console.log('props: ', props);

  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn left='0.2em'>
        <Text>{props.id}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.4em'>
        <Text>{formatDate(props.created_at)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Text>{formatDate(props.file_xml.date_emission_nf)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.5em'>
        <Text>{props.file_xml.number_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='0.7em'>
        <Text>{props.file_xml.value_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        left='0.8em'
        onClick={() => dowloandFile(props.file.id)}
      >
        <TextProfessional>{props.file.name}</TextProfessional>
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
