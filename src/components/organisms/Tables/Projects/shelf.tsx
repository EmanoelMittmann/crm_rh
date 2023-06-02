import { Badge } from '@stardust-ds/react'

import { Popover } from 'components/molecules'
import { IHandleModalPropsDetails, Modal } from 'components/molecules/Modais'
import { formatDate } from 'components/utils/formatDate'
import { useRef } from 'react'

import { ContainerShelf, ContainerShelfColumn, ShelfHover, Text } from '../style'
import { ShelfProps } from '../types'
import { ProjectIProps } from './types'

export const Shelf = ({
  props,
  config
}: ShelfProps<ProjectIProps>) => {
  const { id, name, project_type, status, date_start } = props
  const modalRef = useRef<IHandleModalPropsDetails>(null)

  function handleOpenModal(id: number, name: string) {
    modalRef.current?.open(id, name)
  }

  return (
    <><ShelfHover>
      <ContainerShelf template={config.template}>
        <ContainerShelfColumn
          onClick={() => handleOpenModal(id, name)}
        >
          <Text title='1.5em'>{id}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn
          onClick={() => handleOpenModal(id, name)}
        >
          <Text title='0.5em'>{name}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn
          onClick={() => handleOpenModal(id, name)}
        >
          <Text title='0.5em'>{project_type.name}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn
          onClick={() => handleOpenModal(id, name)}
        >
          <Text>{formatDate(date_start)}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn width='170px'
          onClick={() => handleOpenModal(id, name)}
        >
          <Badge
            style={{ width: '170px', border: 'none' }}
            label={status.name}
            variant='flat'
            bgColor={status.color.text_color}
            typographyProps={{
              textAlign: 'center',
              color: status.color.text_color
            }} />
        </ContainerShelfColumn>
        <ContainerShelfColumn justify='center'>
          <Popover options={config.options} />
        </ContainerShelfColumn>
      </ContainerShelf>
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
