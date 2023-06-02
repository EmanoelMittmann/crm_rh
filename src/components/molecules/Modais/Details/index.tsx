import {
  forwardRef,
  useImperativeHandle,
  useState,
  useMemo,
  useEffect,
  useCallback
} from 'react'

import Close from 'components/atoms/Buttons/Close'

import { Columns, Container, ContainerModal, ContainerOne, ContainerRow, Overlay, Row, Text, Title } from './style'
import { formatDate } from 'components/utils/formatDate'
import { GenerateValue } from 'components/utils/OptionsAplication'



interface IModalProps {
  text: string
  placeholder: string
  EventOne: (_: number, name: string, status: string,
    project_type: string,
    date_start: string,
    date_end: string,
    date_end_performed: string,
    date_start_performed: string,
    team_cost: string) => void
  defaultOpened?: boolean
}

export interface IHandleModalPropsDetails {
  open(
    id: number,
    name: string,
    status:string,
    project_type: string,
    date_start: string,
    date_end: string,
    date_end_performed: string,
    date_start_performed: string,
    team_cost: string
  ): void
  close(): void
}

const Detais = forwardRef<IHandleModalPropsDetails, IModalProps>(
  (props, ref) => {
    const { text, placeholder, EventOne } = props
    const [isOpen, setIsOpen] = useState({ 
      id: 0, 
      name: '', 
      status:'',
      project_type: '',
      date_start: '',
      date_end: '',
      date_end_performed: '',
      date_start_performed: '',
      team_cost: ''
    })
  



    const close = useCallback(() => {
      setIsOpen({ 
        id: 0, 
        name: '' , 
        status:'', 
        project_type: '', 
        date_start: '', 
        date_end: '', 
        date_end_performed: '',
        date_start_performed: '', 
        team_cost: ''})
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (id, name, status, project_type, date_start, date_end, date_end_performed, date_start_performed, team_cost) => 
        setIsOpen({ 
          id: id, 
          name: name, 
          status: status, 
          project_type: project_type,
          date_start: date_start,
          date_end: date_end,
          date_end_performed: date_end_performed,
          date_start_performed: date_start_performed,
          team_cost: team_cost 
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
            <ContainerRow>
              <Text>
                <Title>
                  Projeto
                </Title>
                {isOpen.name}
              </Text>
              <Text>
                <Title>
                  Contrato
                </Title>
                {isOpen.id}
              </Text>
              <Text>
                <Title>Tipo do Projeto</Title>
                {isOpen.project_type}
              </Text>
              <Text>
                <Title>Status do Projeto</Title>
                {isOpen.status}
              </Text>  
            </ContainerRow>
            <ContainerOne>
            <ContainerRow>
              <Text>
                <Title>Data Início efetivo</Title>
                {formatDate(isOpen.date_start)}
              </Text>
              <Text>
                <Title>Data final efetivo</Title>
                {formatDate(isOpen.date_end)}
              </Text>
            </ContainerRow>
            </ContainerOne>
            <Container>
            <ContainerRow>
              <Text>
                <Title>Data Início do contrato</Title>
                {formatDate(isOpen.date_start_performed)}
              </Text>
              <Text>
                <Title>Data final do contrato</Title>
                {formatDate(isOpen.date_end_performed)}
              </Text>
            </ContainerRow>
            </Container>
            <ContainerRow>
              <Text>
                <Title>Custo do Projeto</Title>
                {Number(isOpen.team_cost)}
                </Text>
            </ContainerRow>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Detais
