import React from 'react'

import { ContractProps } from 'contexts/List/Contracts/types'

import { Badge } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import {
  ContainerShelf,
  ContainerShelfColumn,
  Image,
  Text
} from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({
  config,
  props
}: ShelfProps<ContractProps>) => {
  const {
    avatar_profissional,
    name_profissional,
    job_profissional,
    company_profissional,
    date_sent_contract,
    date_signature_contract,
    date_finish_contract,
    status
  } = props
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5em'>
        <Image src={avatar_profissional} />
        <Text>{name_profissional}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>{job_profissional}</ContainerShelfColumn>
      <ContainerShelfColumn>
        {company_profissional}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        {formatDate(date_sent_contract)}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        {date_signature_contract
          ? formatDate(date_signature_contract)
          : '-'}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        {date_finish_contract
          ? formatDate(date_finish_contract)
          : '-'}
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Badge.Contract status={status} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
