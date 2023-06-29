import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback
} from 'react'
import { useFormContext } from 'react-hook-form'

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
interface IModalProps {
  text: string
  placeholder: string
  EventOne: (
    professionals: {
      professional_id: number
      companies_id: number
      commission: number
    }[]
  ) => void
  isOpen?: boolean
  defaultOpened?: boolean
}
export interface IHandleModalPropsCommission {
  open(
    professionals?: {
      professional_id: number
      companies_id: number
      commission?: number
    }[]
  ): void
  close(): void
}
const Commission = forwardRef<
  IHandleModalPropsCommission,
  IModalProps
>((props, ref) => {
  const { text, EventOne } = props
  const [isOpen, setIsOpen] = useState(false)
  const [professionalList, setProfessionalList] = useState<any[]>([])
  const professionalExistComission = professionalList.filter(
    (professional) => professional.isCommission
  )
  const close = useCallback(() => {
    setIsOpen(false)
  }, [])
  useImperativeHandle(
    ref,
    () => ({
      open: (professionals: any[]) => {
        setProfessionalList(professionals)
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
            {professionalExistComission.map((item, index) => (
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
              onClick={() => {
                EventOne(
                  professionalList.map((professional) => {
                    const findProfessional =
                      professionalExistComission.find(
                        (professionalCommission) =>
                          professional.professional_id ===
                          professionalCommission.professional_id
                      )
                    if (!!findProfessional) {
                      return {
                        ...professional,
                        commission: findProfessional.commission
                      }
                    }
                    return professional
                  })
                )
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
