import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { TypesCompanys } from './constants'
import { ShelfProps } from './types'

export const Shelf = ({ config, props }: ShelfProps) => {
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn title={props.razao_social}>
        <Text> {props.razao_social}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.cnpj} left='0.2em'>
        <Text>{props.cnpj}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.opening_date} left='0.5em'>
        <Text>{formatDate(props.opening_date)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.city_name} left='0.5em'>
        <Text>{props.city_name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.type_company} left='0.5em'>
        <Text>{TypesCompanys(props.type_company)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.uf} left='0.7em'>
        <Text> {props.uf}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        title={props.registration_status}
        gap='1em'
      >
        <Badge.Company status={props.registration_status} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
