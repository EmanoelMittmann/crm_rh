import {
  PropsWithChildren,
  PropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useState
} from 'react'

import { Input } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'

import { Columns, ContainerModal, Row } from './style'

interface IModalProps {
  text: string
  placeholder: string
  EventOne?: () => void
  EventTwo?: () => void
  defaultOpened?: boolean
}

// ref: any,
//     { text, placeholder, EventOne, EventTwo, defaultOpened = false }

const Edit = forwardRef(
  (
    {
      text,
      placeholder,
      EventOne,
      EventTwo,
      defaultOpened = false
    }: IModalProps,
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpened)

    useImperativeHandle(
      ref,
      () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
      }),
      []
    )
    return (
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={EventOne} />
          </Row>
          <Row>
            <Input
              width={385}
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
              onClick={EventOne}
            >
              Cancelar
            </Button>
            <Button
              style={{
                borderRadius: '500px',
                boxShadow: '0px 5px 10px 0px #0066FF40'
              }}
              bgColor='#0066FF'
              onClick={EventTwo}
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
