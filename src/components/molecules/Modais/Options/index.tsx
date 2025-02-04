import { ContainerModal, Options } from './style'
import { IModalProps } from 'types'

const Modal = ({
  eventOne,
  eventTwo,
  optionOne,
  optionTwo
}: IModalProps) => {
  return (
    <>
      <ContainerModal>
        <div className='options'>
          <Options onClick={eventOne}>{optionOne}</Options>
          <Options onClick={eventTwo}>{optionTwo}</Options>
        </div>
      </ContainerModal>
    </>
  )
}

export default Modal
