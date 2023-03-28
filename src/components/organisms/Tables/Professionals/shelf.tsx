import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { POPOVER_OPTIONS } from './constants'
import { ContainerShelf, ContainerShelfColumn, Image } from '../style'

import type { ShelfProps } from './types'

export const Shelf = ({ address, avatar, name, company, email, phone, status, template }: ShelfProps) => {
  return (
    <ContainerShelf {...{ template }}>
      <ContainerShelfColumn gap='.5rem'>
        <Image src={avatar} />
        <p>{name}</p>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <p>{company}</p>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <p>{email}</p>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <p>{phone}</p>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <p>{address}</p>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='center' gap='3em'>
        <Badge.Status status={status} />
        <Popover options={POPOVER_OPTIONS} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
