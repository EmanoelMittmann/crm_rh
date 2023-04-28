import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'
import { createPortal } from 'react-dom'

import { Input } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { Columns, ContainerModal, Row } from './style'

interface IModalProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalProps {
  open(id: number): void
  close(): void
}

const Edit = forwardRef<IHandleModalProps, IModalProps>(
  (props, ref) => {
    const { text, placeholder, EventOne } = props
    const [isOpen, setIsOpen] = useState(0)
    const [name, setName] = useState<string>('')

    const close = useCallback(() => {
      setIsOpen(0)
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (id) => setIsOpen(id),
        close
      }),
      []
    )
    if (!isOpen) return null
    return (
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>
          <Row>
            <Input
              width={385}
              onChange={(e) => setName(e.target.value)}
              label='Cargo'
              color={theme.neutrals.gray8}
              placeholder={placeholder}
            />
          </Row>
          <Row>
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
                boxShadow: '0px 5px 10px 0px #0066FF40'
              }}
              bgColor='#0066FF'
              onClick={() => {
                EventOne(isOpen, name)
                close()
              }}
            >
              Cadastrar
            </Button>
          </Row>
        </Columns>
      </ContainerModal>
    )
  }
)

export default Edit
