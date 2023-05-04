import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import {
  ContainerShelf,
  ContainerShelfColumn,
} from 'components/organisms/Tables/style'
import { Image, TeamJobName, Text, TextJob } from './style'
import { ShelfUserProject } from './types'

export const Shelf = ({ props, config }: ShelfUserProject) => {
  const {
    id,
    jobs ,
    professional,
    extra_hours_estimated,
    hours_mounths_estimated,
    avatar,
    is_active,
  } = props
  console.log('props: ', props)
  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' width='210px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text >{professional.name?.label}</Text>
          <TextJob >{jobs.name?.label}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='90px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='130px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='85px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='115px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='115px'>
        <Badge.Status status={is_active} />
      </ContainerShelfColumn>

      <ContainerShelfColumn width='5px'>
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
