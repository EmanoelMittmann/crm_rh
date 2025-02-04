import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { TeamMemberProps } from 'components/organisms/Forms/Project/types'
import {
  ContainerShelf,
  ContainerShelfColumn
} from 'components/organisms/Tables/style'
import { formatDate } from 'components/utils/formatDate'

import {
  Image,
  TeamJobName,
  Text,
  TextJob
} from '../../Forms/Project/style'
import { ShelfProps } from '../types'
import { ContainerPopover } from './style'

export const Shelf = ({
  props,
  config
}: ShelfProps<TeamMemberProps>) => {
  const {
    hours_mounths_estimated = 0,
    name,
    professional,
    date_start_allocation,
    date_end_allocation,
    status,
    job_,
    avatar
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='0.5rem'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{name ? name : professional.name?.label}</Text>
          <TextJob>{job_}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='.5em'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='.5em'>
        <Text>{formatDate(date_start_allocation)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='.5em'>
        <Text>{formatDate(date_end_allocation)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='start'>
        <Badge.Status status={status} />
        <ContainerPopover>
          <Popover options={config.options} />
        </ContainerPopover>
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
