import { useContext, useRef } from 'react'

import { Badge } from '@stardust-ds/react'
import { List } from 'contexts'
import {
  PendingProps,
  StatusHours
} from 'contexts/List/ExtraHoursRh/types'

import {
  IHandleModalPropsExtrasHoursRh,
  Modal
} from 'components/molecules/Modais'
import { formatDate } from 'components/utils/formatDate'

import {
  ContainerShelf,
  ContainerShelfColumn,
  Text,
  TextProfessional
} from '../style'
import { ShelfProps } from '../types'

export const Shelf = ({
  props,
  config
}: ShelfProps<PendingProps>) => {
  const { extraHoursRh, projects, statusHours } = useContext(
    List.ExtraHoursRh.Context
  )

  const {
    user_id,
    user_name,
    status_name,
    launch_date,
    hour_quantity,
    project_name,
    status_id
  } = props

  const status = statusHours.find(
    (item: StatusHours) => item.id === status_id
  )
  const modalRef = useRef<IHandleModalPropsExtrasHoursRh>(null)

  const handleClick = () => {
    handleOpenModal(user_id, user_name, project_name)
  }

  function handleOpenModal(
    user_id: number,
    user_name: string,
    project_name: string
  ) {
    modalRef.current?.open(user_id, user_name, project_name)
  }

  return (
    <>
      <ContainerShelf template={config.template}>
        {status_name === 'Pendente - RH' ? (
          <ContainerShelfColumn onClick={() => handleClick()}>
            <TextProfessional>{user_name}</TextProfessional>
          </ContainerShelfColumn>
        ) : (
          <ContainerShelfColumn>
            <TextProfessional>{user_name}</TextProfessional>
          </ContainerShelfColumn>
        )}
        <ContainerShelfColumn>
          <Text title='0.5em'>{hour_quantity}hr</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text title='0.5em'>{project_name}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text title='0.5em'>{formatDate(launch_date)}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Badge
            style={{ width: '170px', border: 'none' }}
            label={status_name}
            variant='flat'
            bgColor={status?.color.text_color}
            typographyProps={{
              textAlign: 'center',
              color: status?.color.text_color
            }}
          />
        </ContainerShelfColumn>
      </ContainerShelf>
      <Modal.OvertimeReleaseRh
        ref={modalRef}
        text={'Lançamento' + ' # ' + user_id}
        placeholder='Lançamento'
        EventOne={handleOpenModal}
      />
    </>
  )
}
