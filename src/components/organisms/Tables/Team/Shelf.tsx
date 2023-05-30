import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { TeamMemberProps } from 'components/organisms/Forms/Team/types'

import {
  ContainerShelf,
  ContainerShelfColumn
} from 'components/organisms/Tables/style'

import { Image, TeamJobName, Text, TextJob } from '../../Forms/Project/style'

import { ShelfProps } from '../types'

export const Shelf = ({ props, config }: ShelfProps<TeamMemberProps>) => {
  const {
    extra_hours_estimated,
    hours_mounths_estimated,
    hours_mounths_performed,
    extra_hours_performed,
    jobs,
    professional,
    status,
    avatar,
  } = props


  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' width='210px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{professional?.name?.label}</Text>
          <TextJob>{jobs?.name?.label}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='130px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='120px'>
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='140px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='120px'>
        <Text>{extra_hours_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn
        width='140px'
        justify='center'
        gap='1.5em'
      >
        <Badge.Status status={status} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
