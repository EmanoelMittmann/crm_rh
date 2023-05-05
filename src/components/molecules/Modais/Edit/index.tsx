import {
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  useEffect,
  useCallback
} from 'react'

import { Input, Button } from '@stardust-ds/react'
import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { Columns, ContainerModal, Overlay, Row } from './style'

interface IModalProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalProps {
  open(id: number, name: string): void
  close(): void
}

const Edit = forwardRef<IHandleModalProps, IModalProps>(
  (props, ref) => {
    const { text, placeholder, EventOne } = props
    const [isOpen, setIsOpen] = useState({ id: 0, name: '' })
    const [name, setName] = useState<string>('')

    const close = useCallback(() => {
      setIsOpen({ id: 0, name: '' })
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (id, name) => setIsOpen({ id: id, name: name }),
        close
      }),
      []
    )

    const handleBlock = useMemo(() => {
      if (isOpen.name === name || name.trim() === '') {
        return true
      }
      return false
    }, [name])

    useEffect(() => {
      setName(isOpen.name)
    }, [isOpen.name])

    if (isOpen.id === 0) return null
    return (
      <>
        <ContainerModal>
          <Columns>
            <Row>
              <h2>{text}</h2>
              <Close onClick={() => close()} />
            </Row>
            <Row>
              <Columns>
                <Input
                  value={name}
                  width={385}
                  onChange={(e) => setName(e.target.value)}
                  label='Cargo'
                  color={theme.neutrals.gray8}
                  placeholder={placeholder}
                />
              </Columns>
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
                disabled={handleBlock}
                bgColor='#0066FF'
                onClick={() => {
                  EventOne(isOpen.id, name)
                  close()
                }}
              >
                Cadastrar
              </Button>
            </Row>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Edit
