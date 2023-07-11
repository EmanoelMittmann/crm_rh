import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'

import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconAlertAccept } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'

import {
  ContainerModal,
  Overlay,
  Columns,
  Row,
  RowButton
} from './style'

interface IModalProps {
  text: string
  message: string
  EventOne: (id: number) => void
}

export interface IHandleModalPropsAlertAccept {
  open(_: boolean): void
  close(): void
}

const AlertAccept = forwardRef<
  IHandleModalPropsAlertAccept,
  IModalProps
>((props, ref) => {
  const { text, message, EventOne } = props
  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close
    }),
    []
  )
  if (!isOpen) return null
  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <IconAlertAccept />
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>
          <Row>
            <p>{message}</p>
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
                boxShadow: '0px 5px 10px 0px rgba(30, 203, 79, 0.15)'
              }}
              bgColor='rgba(30, 203, 79, 1)'
              onClick={() => {
                EventOne(isOpen ? 1 : 0)
                close()
              }}
            >
              Sim, aceitar
            </Button>
          </RowButton>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default AlertAccept
