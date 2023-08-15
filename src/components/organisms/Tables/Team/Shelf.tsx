import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { TeamMemberProps } from 'components/organisms/Forms/Project/types'
import {
  ContainerShelf,
  ContainerShelfColumn
} from 'components/organisms/Tables/style'
import { percentCalculate } from 'components/utils/percentCalculate'

import {
  Image,
  TeamJobName,
  Text,
  TextJob
} from '../../Forms/Project/style'
import { ShelfProps } from '../types'

export const Shelf = ({
  props,
  config
}: ShelfProps<Partial<TeamMemberProps>>) => {
  const {
    hours_mounths_estimated = 0,
    hours_mounths_performed = 0,
    extra_hours_performed = 0,
    extra_hours_percent = 0,
    hours_mounths_percent = 0,
    professional,
    date_start_allocation,
    status,
    job_,
    avatar
  } = props

  if (!status) return null

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='0.5rem'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{professional?.name?.label}</Text>
          <TextJob>{job_}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn left='2.5em'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn left='2.1em'>
        <Text>{date_start_allocation}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn justify='start'>
        <Badge.Status status={status} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
