import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn } from '../style'
import { TypesCompanys } from './constants'
import { ShelfProps } from './types'

export const Shelf = ({ config, props }: ShelfProps) => {
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn title={props.razao_social} left='1em'>
        {props.razao_social}
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.cnpj} left='0.5em'>
        {props.cnpj}
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.opening_date} left='0.5em'>
        {formatDate(props.opening_date)}
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.city_name}>
        {props.city_name}
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.type_company}>
        {TypesCompanys(props.type_company)}
      </ContainerShelfColumn>
      <ContainerShelfColumn title={props.uf}>
        {props.uf}
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
