import { Badge } from 'components/atoms'
import { Popover } from 'components/molecules'

import {
  ContainerShelf,
  ContainerShelfColumn
} from 'components/organisms/Tables/style'
import { percentCalculate } from 'components/utils/percentCalculate'

import { Image, TeamJobName, Text, TextJob } from '../../Forms/Project/style'

import { ShelfProps } from '../types'

export const Shelf = ({ props, config }: ShelfProps<any>) => {
  const {
    extra_hours_estimated = 0,
    hours_mounths_estimated = 0,
    hours_mounths_performed = 0,
    extra_hours_performed = 0,
    extra_hours_percent = undefined,
    hours_mounths_percent = undefined,
    jobs,
    professional,
    status,
    avatar,
 
  } = props
  // console.log('props: ', props);


  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='.5rem' width='205px'>
        <Image src={avatar} />
        <TeamJobName>
          <Text>{professional?.name?.label}</Text>
          <TextJob>{jobs?.name?.label}</TextJob>
        </TeamJobName>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='120px'>
        <Text>{hours_mounths_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='105px'>
        <Text>{hours_mounths_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='60px'>
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

      <ContainerShelfColumn width='100px'>
        <Text>{extra_hours_estimated}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='100px'>
        <Text>{extra_hours_performed}</Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn width='30px'>
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

      <ContainerShelfColumn
        width='140px'
        justify='center'
        gap='1em'
      >
        <Badge.Status status={status} />
        <Popover options={config.options} />
        </ContainerShelfColumn>
    </ContainerShelf>
  )
}
