import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import {
  ContainerShelf,
  ContainerShelfColumn,
} from 'components/organisms/Tables/style'
import { Image, TeamJobName, Text, TextJob } from './style'
import { ShelfUserProject } from './types'

export const Shelf = ({ props, config,}: ShelfUserProject) => {
  const {
    jobs,
    professional,
    extra_hours_estimated,
    hours_mounths_estimated,
    hours_mounths_performed,
    extra_hours_performed,
    is_active,
    avatar,
    status,
  } = props
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' width='210px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text >{professional.name?.label}</Text>
          <TextJob >{jobs.name?.label}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='100px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='130px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='110px'>
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='110px'>
        <Text>{extra_hours_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='100px'>
        <Badge.Status status={status} />
      </ContainerShelfColumn>

      <ContainerShelfColumn width='5px'>
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}