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
import { IconTrash } from 'components/atoms/Icons/IconTrash'

import { Columns, Row } from '../Edit/style'
import {
  ContainerAbsolute,
  ContainerLabelProfessional,
  ContainerModal,
  ContainerWap,
  IconButton,
  Overlay,
  TitleComissionProfessional
} from './style'

export interface IModalProps {
  text: string
  placeholder: string
  EventOne: (
    id: number,
    name: string,
    company_id: string,
    commission: string
  ) => void
  commission: string
  defaultOpened?: boolean
}

export interface IHandleModalPropsCommission {
  open(
    id: number,
    name: string,
    company_id: string,
    commission: string
  ): void
  close(): void
}

const Commission = forwardRef<
  IHandleModalPropsCommission,
  IModalProps
>((props, ref) => {
  const { text, placeholder, EventOne } = props
  const [isOpen, setIsOpen] = useState({
    id: 0,
    name: '',
    commission: ''
  })

  const close = useCallback(() => {
    setIsOpen({
      id: 0,
      name: '',
      commission: ''
    })
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (id, name, commission) =>
        setIsOpen({
          id: id,
          name: name,
          commission: commission
        }),
      close
    }),
    []
  )
  if (isOpen.id === 0) return null
  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>
          <ContainerAbsolute>
            <TitleComissionProfessional>
              <h6>Profissional</h6>
              <h6>Comissão</h6>
            </TitleComissionProfessional>

            <ContainerWap>
              <ContainerLabelProfessional>
                {isOpen.name}
                <IconButton>
                  <IconTrash />
                </IconButton>
              </ContainerLabelProfessional>

              <Input width={180} placeholder='R$ 0,00' />
            </ContainerWap>
          </ContainerAbsolute>

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
                // EventOne(() => {})
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
})

export default Commission
