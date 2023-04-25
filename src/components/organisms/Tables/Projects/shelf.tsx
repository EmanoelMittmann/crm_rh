import { Badge } from '@stardust-ds/react'

import { formatDate } from 'components/utils/formatDate'

import { ContainerShelf, ContainerShelfColumn, Text } from '../style'
import { ShelfProjectsProps } from './types'

export const Shelf = ({ props, config }: ShelfProjectsProps) => {
  const { id, name, project_type, status, date_start } = props

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn gap='1rem' title={project_type.id}>
        <Text title='1.5em'>{id}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={project_type.name}>
        <Text title='1em'>{name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={project_type.name}>
        <Text title='1em'>{project_type.name}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn title={date_start}>
        <Text title='1.3em'>{formatDate(date_start)}</Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn width='170px' title={status.name}>
        <Badge
          style={{ width: '170px', padding: '0.8rem 1rem' }}
          label={status.name}
          variant='flat'
          bgColor={status.color.text_color}
          typographyProps={{
            textAlign: 'center',
            color: status.color.text_color
          }}
        />
      </ContainerShelfColumn>
    </ContainerShelf>
  )
}
