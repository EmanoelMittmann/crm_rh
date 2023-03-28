import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { ContainerShelf, ContainerShelfColumn, Image, Text } from '../style'

import type { ShelfProps } from './types'

export const Shelf = ({ props, config }: ShelfProps) => {
  const { avatar, name, job, email, telephone_number, city_name, is_active } = props
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' title={name}>
        <Image src={avatar} />
        <Text>{name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={job.name}>
        <Text>{job.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={email}>
        <Text>{email}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={telephone_number}>
        <Text>{telephone_number}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={city_name}>
        <Text>{city_name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='center' gap='3em'>
        <Badge.Status status={is_active} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
