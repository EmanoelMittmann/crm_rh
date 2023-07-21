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
      <ContainerShelfColumn gap='.5em' left='.7em'>
        <Image src={avatar_profissional} />
        <Text>{name_profissional}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {job_profissional}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {company_profissional}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {formatDate(date_sent_contract)}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {date_signature_contract
          ? formatDate(date_signature_contract)
          : '-'}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        {date_finish_contract
          ? formatDate(date_finish_contract)
          : '-'}
      </ContainerShelfColumn>
      <ContainerShelfColumn left='1em'>
        <Badge.Contract status={status} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
