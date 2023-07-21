import { useContext, useRef } from 'react'

import { List } from 'contexts'
import {
  PendingProps,
  StatusHours
} from 'contexts/List/ExtraHoursRh/types'

import { Badge } from 'components/atoms'
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
          <ContainerShelfColumn onClick={handleModal} left='1em'>
            <TextProfessional>{user_name}</TextProfessional>
          </ContainerShelfColumn>
        ) : (
          <ContainerShelfColumn left='1em'>
            <Text>{user_name}</Text>
          </ContainerShelfColumn>
        )}
        <ContainerShelfColumn left='1.3em'>
          <Text>{hour_quantity}h</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn left='1.3em'>
          <Text>{project_name}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn left='1.3em'>
          <Text>{formatDate(launch_date)}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Badge.Hours
            status={{ id: status_id, name: status_name }}
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
