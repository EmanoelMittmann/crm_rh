import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect
} from 'react'

import { Input } from '@stardust-ds/react'
import { Button } from '@stardust-ds/react'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'
import { IconTrash } from 'components/atoms/Icons/IconTrash'

import api from 'api'
import { routes } from 'routes'

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
  const { text, placeholder, EventOne } = props
  const [isOpen, setIsOpen] = useState(false)
  const [professionalList, setProfessionalList] = useState<any[]>([])
  const [professional, setProfessional] = useState([])
  const [commission, setCommission] = useState(0);



  const fetchProfessional = async () => {
    try {
      const response = await api.get(
        routes.professional.list + '?limit=1000'
      )
      setProfessional(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const orderCommission = professional.map((item: any) => ({
    id: item.id,
    name: item.name,
    commission: item.commission
  }))

  const userCommission = professionalList.map((item: any) => ({
    professional_id: item.professional_id,
    commission: item.commission
  }))
 
  const joinedCommission = userCommission.map((item: any) => {
    const matchingProfessional = orderCommission.find(
      (professional: any) => professional.id === item.professional_id
      )
      if (matchingProfessional) {
        return {
          ...item,
          name: matchingProfessional.name
        }
      }
      return item
    })
    
  const professionalsWithUndefinedCommission = joinedCommission.filter((item: any) => item.commission !== 0);
  
  useEffect(() => {
    fetchProfessional()
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (professionals: any[]) => {
        setProfessionalList(professionals);
        setIsOpen(true);
        setCommission(0);
      },
      close
    }),
    []
  );


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

            {professionalsWithUndefinedCommission.map((item, index) => (
              <ContainerWap key={index}>
                <ContainerLabelProfessional>
                  {item.name}
                  <IconButton>
                    <IconTrash />
                  </IconButton>
                </ContainerLabelProfessional>
                <Input
                  width={180}
                  value={professionalList[index]?.commission || ''}
                  onChange={(e) => {
                    const value = e.target.value;
                    const newProfessionalList = [...professionalList];
                    newProfessionalList[index] = {
                      ...newProfessionalList[index],
                      commission: Number(value),
                    };
                    setProfessionalList(newProfessionalList);
                  }}
                  
                  placeholder="R$ 0,00"
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
                  professionalList.map((professional) => ({
                    professional_id: professional.professional_id,
                    companies_id: professional.companies_id,
                    commission: professional.commission
                  }))
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
