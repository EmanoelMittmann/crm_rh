import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import { TeamUserProps } from 'components/molecules/Modais/Details/type'
import { TeamMemberProps } from 'components/organisms/Forms/Project/types'
import { TeamProps } from 'components/organisms/Forms/Team/types'
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
}: ShelfProps<TeamMemberProps>) => {
  const {
    extra_hours_estimated = 0,
    hours_mounths_estimated = 0,
    hours_mounths_performed = 0,
    extra_hours_performed = 0,
    extra_hours_percent = 0,
    hours_mounths_percent = 0,
    professional,
    status,
    job_,
    avatar
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='0.5rem' width='190px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{professional?.name?.label}</Text>
          <TextJob>{job_}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='110px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='90px'>
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='35px'>
        <Text>
          {hours_mounths_percent === undefined
            ? percentCalculate(
                hours_mounths_performed,
                hours_mounths_estimated
              ).toFixed()
            : hours_mounths_percent.toFixed()}
          %
        </Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='90px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='90px'>
        <Text>{extra_hours_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='20px'>
        <Text>
          {extra_hours_percent === undefined
            ? percentCalculate(
                extra_hours_performed,
                extra_hours_estimated
              ).toFixed()
            : extra_hours_percent.toFixed()}
          %
        </Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='125px' justify='center'>
        <Badge.Status status={status} />
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
