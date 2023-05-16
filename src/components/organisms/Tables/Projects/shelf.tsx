import { Badge } from '@stardust-ds/react'

import { Popover } from 'components/molecules'
import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProps } from '../types'
import { ProjectIProps } from './types'


export const Shelf = ({ props, config }: ShelfProps<ProjectIProps>) => {
  const { id, name, project_type, status, date_start } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn>
        <Text title='1.5em'>{id}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text title='0.5em'>{name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text title='0.5em'>{project_type.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>{formatDate(date_start)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='170px'>
        <Badge
          style={{ width: '170px', border: 'none' }}
          label={status.name}
          variant='flat'
          bgColor={status.color.text_color}
          typographyProps={{
            textAlign: 'center',
            color: status.color.text_color
          }}
        />
      </ContainerShelfColumn>
      <ContainerShelfColumn justify='center'>
        <Popover options={config.options} />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
