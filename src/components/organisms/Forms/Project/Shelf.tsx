import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'
import {
  ContainerShelf,
  ContainerShelfColumn
} from 'components/organisms/Tables/style'

import { Image, TeamJobName, Text, TextJob } from './style'
import { ShelfUserProject } from './types'

export const Shelf = ({ props, config }: ShelfUserProject) => {
  const {
    extra_hours_estimated,
    hours_mounths_estimated,
    hours_mounths_performed,
    extra_hours_performed,
   jobs,
   professional,
    status,
    avatar
  } = props
  console.log('props: ', props);

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' width='205px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{professional.name?.label}</Text>
          <TextJob>{jobs.name?.label}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='105px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='110px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='100px'>
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='110px'>
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
