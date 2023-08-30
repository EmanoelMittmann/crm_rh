import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'

import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconAlert } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'

import {
  ContainerModal,
  Overlay,
  Columns,
  Row,
  RowButton,
  IconContainer,
  Icon
} from './style'
import { title } from 'process'

interface IModalProps {
  title: string
  message: string
  EventOne: (user_id: number, user_projects_id: number) => void
}

export interface IHandleModalPropsDelete {
  open(user_id: number, user_projects_id: number): void
  close(): void
}

const Delete = forwardRef<IHandleModalPropsDelete, IModalProps>(
  (props, ref) => {
    const { title, message, EventOne } = props
    const [isOpen, setIsOpen] = useState({user_id: 0, user_projects_id: 0})
    console.log('isOpen: ', isOpen);

    const close = useCallback(() => {
      setIsOpen( {user_id: 0, user_projects_id: 0})
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (user_id, user_projects_id) => setIsOpen({user_id: user_id, user_projects_id: user_projects_id}),
        close
      }),
      []
    )
    if (isOpen.user_id === 0 || isOpen.user_projects_id === 0 ) return null

    return (
      <>
        <ContainerModal>
          <Columns>
            <Icon>
              <Close onClick={() => close()} />
            </Icon>
            <IconContainer>
              <IconAlert />
            </IconContainer>
            <Row>
              <Columns>
                <h2>{title}</h2>
                <p>{message}</p>
              </Columns>
            
            </Row>
            <RowButton>
              <Button
                style={{ borderRadius: '500px' }}
                bgColor='#E9EBEE'
                labelColor={theme.neutrals.gray7}
                onClick={close}
              >
                Cancelar
              </Button>
              <Button
                style={{
                  borderRadius: '500px',
                  boxShadow:
                    '0px 5px 10px 0px rgba(255, 53, 65, 0.25)'
                }}
                bgColor='rgba(255, 53, 65, 1)'
                onClick={() => {
                  EventOne(isOpen.user_id, isOpen.user_projects_id)
                  close()
                  
                }}
               
              >
                Sim, remover
             </Button>
            </RowButton>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Delete

