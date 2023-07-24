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
  const { downloadFile, notes } = useContext(List.Notes.Context)

  return (
    <ContainerShelf template={GRID_TEMPLATE}>
      <ContainerShelfColumn>
        <Text>{props.id}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{formatDate(props.created_at)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{formatDate(props.file_xml.date_emission_nf)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{props.file_xml.number_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{props.file_xml.value_nf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        onClick={() => downloadFile(props.file_id, props.file.name)}
      >
        <TextProfessional>{props.file.name}</TextProfessional>
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}

export default Shelf
