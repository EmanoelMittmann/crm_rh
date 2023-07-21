import { mask } from 'remask'

import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'

import {
  ContainerShelf,
  ContainerShelfColumn,
  Image,
  Text
} from '../style'
import type { ShelfProps } from '../types'
import { Mask } from './constants'
import type { ProfessionalProps } from './types'

export const Shelf = ({
  props,
  config
}: ShelfProps<ProfessionalProps>) => {
  const {
    avatar,
    name,
    job,
    email,
    telephone_number,
    city_name,
    is_active
  } = props
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' title={name} left='.7em'>
        <Image src={avatar} />
        <Text>{name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={job.name} left='1em'>
        <Text>{job.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={email} left='1em'>
        <Text>{email}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={telephone_number} left='1em'>
        <Text>{mask(telephone_number, Mask)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={city_name} left='1em'>
        <Text>{city_name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='center' gap='2em'>
        <Badge.Status status={is_active} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
