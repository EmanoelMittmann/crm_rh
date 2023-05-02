import { Popover } from 'components/molecules'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Image,
} from 'components/organisms/Tables/style'
import { TeamJobName, Text, TextJob } from './style'
import { ShelfUserProject } from './types'

export const Shelf = ({ props, config }: ShelfUserProject) => {
  const {
    id,
    jobs ,
    professional,
    extra_hours_estimated,
    hours_mounths_estimated,
    status,
  } = props
  console.log('props: ', props)
  return (
    <ContainerShelf template={config.template}>

      <ContainerShelfColumn width='190px' title={professional.id?.value}>
        <TeamJobName>
          <Text >{professional.name?.label}</Text>
          <TextJob >{jobs.name?.label}</TextJob>
        </TeamJobName>
  
      </ContainerShelfColumn>
     
      <ContainerShelfColumn width='120px' gap='1em' title={hours_mounths_estimated}>
        <Text title='.5rem'>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='145px' gap='2em' title={extra_hours_estimated}>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='90px' gap='2em' title={hours_mounths_estimated}>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='90px' gap='1em' title={extra_hours_estimated}>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='120px' gap='1em' title={status}>
        <Text>{status}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='10px'>
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
