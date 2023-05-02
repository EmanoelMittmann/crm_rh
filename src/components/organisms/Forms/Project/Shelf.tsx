import { Popover } from 'components/molecules'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Image,
  Text,
  TextJob
} from 'components/organisms/Tables/style'

import { ShelfUserProject } from './types'

export const Shelf = ({ props, config }: ShelfUserProject) => {
  const {
    avatar,
    name,
    job,
    extra_hours_estimated,
    hours_mounths_estimated
  } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' title={name}>
        <Image src={avatar} />
        <Text>{name}</Text>
        <TextJob>{job.name}</TextJob>
      </ContainerShelfColumn>
      <ContainerShelfColumn gap='0.5em' title={extra_hours_estimated}>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn
        gap='0.5em'
        title={hours_mounths_estimated}
      >
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
