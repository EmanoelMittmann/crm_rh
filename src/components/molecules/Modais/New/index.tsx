import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useState,
  useCallback
} from 'react'

import { Input } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { ContainerModal, Overlay, Columns, Row } from '../style'

interface IModalProps {
  text: string
  placeholder: string
  EventOne: (name: string) => void
}

export interface IHandleModalPropsNew {
  open(_: boolean): void
  close(): void
}

const New = forwardRef<IHandleModalPropsNew, IModalProps>(
  (props, ref) => {
    const { text, placeholder, EventOne } = props
    const [isOpen, setIsOpen] = useState(false)
    const [name, setName] = useState<string>('')

    const close = useCallback(() => {
      setIsOpen(false)
    }, [])

    const handleBlock = useMemo(() => {
      if (name.trim() === '') {
        return true
      }
      return false
    }, [name])

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
                disabled={handleBlock}
                onClick={() => {
                  EventOne(name)
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

export default New
