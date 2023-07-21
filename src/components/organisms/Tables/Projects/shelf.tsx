import { useRef } from 'react'

import { Badge } from '@stardust-ds/react'

import { Popover } from 'components/molecules'
import {
  IHandleModalPropsDetails,
  Modal
} from 'components/molecules/Modais'
import { formatDate } from 'components/utils/formatDate'

import {
  ContainerShelf,
  ContainerShelfColumn,
  ShelfHover,
  Text
} from '../style'
import { ShelfProps } from '../types'
import { ProjectIProps } from './types'
export const Shelf = ({
  props,
  config
}: ShelfProps<ProjectIProps>) => {
  const {
    id,
    name,
    project_type,
    status,
    date_start,
    date_end,
    date_end_performed,
    date_start_performed,
    team_cost
  } = props
  const modalRef = useRef<IHandleModalPropsDetails>(null)

  const handleClick = () => {
    handleOpenModal(
      id,
      name,
      status.name,
      project_type.name,
      date_start,
      date_end,
      date_end_performed,
      date_start_performed,
      team_cost
    )
  }

  function handleOpenModal(
    id: number,
    name: string,
    status: string,
    project_type: string,
    date_start: string,
    date_end: string,
    date_end_performed: string,
    date_start_performed: string,
    team_cost: string
  ) {
    modalRef.current?.open(
      id,
      name,
      status,
      project_type,
      date_start,
      date_end,
      date_end_performed,
      date_start_performed,
      team_cost
    )
  }

  return (
    <>
      <ShelfHover template={config.template}>
        <ContainerShelfColumn onClick={handleClick}>
          <Text title='1.5em'>{id}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn onClick={handleClick} left='.7em'>
          <Text title='0.5em'>{name}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn onClick={handleClick} left='.9em'>
          <Text title='0.5em'>{project_type.name}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn onClick={handleClick} left='1.3em'>
          <Text>{formatDate(date_start)}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn onClick={handleClick} left='1.4em'>
          <Badge
            style={{
              width: '170px',
              border: 'none',
              whiteSpace: 'nowrap'
            }}
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
      </ShelfHover>
      <Modal.Details
        ref={modalRef}
        placeholder='Detalhes do Projeto'
        text='Detalhes do Projeto'
        EventOne={handleOpenModal}
      />
    </>
  )
}
