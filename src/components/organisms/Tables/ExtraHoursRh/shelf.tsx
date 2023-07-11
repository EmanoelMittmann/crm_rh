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
  const { statusHours, handleDetails } = useContext(
    List.ExtraHoursRh.Context
  )

  const {
    id,
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

  const handleModal = async () => {
    await handleDetails(id)
    modalRef.current?.open()
    return
  }

  return (
    <>
      <ContainerShelf template={config.template}>
        {status_name === 'Pendente - RH' ? (
          <ContainerShelfColumn onClick={handleModal}>
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
        text={'Lançamento' + ' # ' + id}
        placeholder='Lançamento'
        EventOne={() => handleDetails(id)}
      />
    </>
  )
}
