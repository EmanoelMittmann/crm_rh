import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext
} from 'react'
import { useFormContext } from 'react-hook-form'

import { Input } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { List } from 'contexts'
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
interface IModalProps {
  text: string
  placeholder: string
  defaultOpened?: boolean
}
export interface IHandleModalPropsCommission {
  open(): void
  close(): void
}
const Commission = forwardRef<
  IHandleModalPropsCommission,
  IModalProps
>((props, ref) => {
  const { text } = props
  const { selectSendProfessionals } = useContext(
    List.OrderOfServiceprofessionalOS.Context
  )

  const professionalsHaveCommission = selectSendProfessionals.filter(
    (professional) => professional.isCommission
  )

  const [isOpen, setIsOpen] = useState(false)

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])
  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setIsOpen(true)
      },
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
          <ContainerAbsolute>
            <TitleComissionProfessional>
              <h6>Profissional</h6>
              <h6>Comissão</h6>
            </TitleComissionProfessional>
            {professionalsHaveCommission.map((item, index) => (
              <ContainerWap key={index}>
                <ContainerLabelProfessional>
                  {item.name}
                  <IconButton>
                    <IconTrash />
                  </IconButton>
                </ContainerLabelProfessional>
                <Input
                  width={180}
                  value={item?.commission}
                  onChange={(e) =>
                    (item.commission = Number(e.target.value))
                  }
                  placeholder='R$ 0,00'
                />
              </ContainerWap>
            ))}
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
              onClick={() => close()}
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
