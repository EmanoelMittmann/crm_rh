import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect
} from 'react'
import { useParams } from 'react-router-dom'

import Close from 'components/atoms/Buttons/Close'
import { Image } from 'components/organisms/Tables/style'
import { formatDate } from 'components/utils/formatDate'
import { GenerateValue } from 'components/utils/OptionsAplication'

import api from 'api'
import { routes } from 'routes'

import {
  Columns,
  ContaineDetails,
  Container,
  ContainerAbsolute,
  ContainerDataUser,
  ContainerModal,
  ContainerOne,
  ContainerRow,
  Overlay,
  ProfessionalJob,
  ProfessionalName,
  Row,
  TableLine,
  Title
} from './style'
import {
  IHandleModalPropsDetails,
  IModalProps,
  TeamUserProps
} from './type'
import { ProjectProps } from 'types'

const Detais = forwardRef<IHandleModalPropsDetails, IModalProps>(
  (props, ref) => {
    const { text } = props
    const [projectUser, setProjectUser] = useState<any[]>([])
    const [isOpen, setIsOpen] = useState({
      id: 0,
      name: '',
      status: '',
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
        name: '',
        status: '',
        project_type: '',
        date_start: '',
        date_end: '',
        date_end_performed: '',
        date_start_performed: '',
        team_cost: ''
      })
    }, [])

    useImperativeHandle(
      ref,
      () => ({
        open: (
          id,
          name,
          status,
          project_type,
          date_start,
          date_end,
          date_end_performed,
          date_start_performed,
          team_cost
        ) =>
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

    function getUsers() {
      api.get(routes.usersProjects.list).then((response) => {
        setProjectUser(response.data)
      })
    }

    useEffect(() => {
      getUsers()
    }, [])

    const professional = projectUser.filter(
      (project) => project.id === isOpen.id
    )
    const users = professional[0]?.users || []

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
              <ContaineDetails>
                <Title>Projeto</Title>
                {isOpen.name}
              </ContaineDetails>
              <ContaineDetails>
                <Title>Contrato</Title>
                {isOpen.id}
              </ContaineDetails>
              <ContaineDetails>
                <Title>Tipo do Projeto</Title>
                {isOpen.project_type}
              </ContaineDetails>
              <ContaineDetails>
                <Title>Status do Projeto</Title>
                {isOpen.status}
              </ContaineDetails>
            </ContainerRow>

            <ContainerOne>
              <ContainerRow>
                <ContaineDetails>
                  <Title>Data Início efetivo</Title>
                  {formatDate(isOpen.date_start)}
                </ContaineDetails>
                <ContaineDetails>
                  <Title>Data final efetivo</Title>
                  {formatDate(isOpen.date_end)}
                </ContaineDetails>
              </ContainerRow>
            </ContainerOne>

            <Container>
              <ContainerRow>
                <ContaineDetails>
                  <Title>Data Início do contrato</Title>
                  {formatDate(isOpen.date_start_performed)}
                </ContaineDetails>
                <ContaineDetails>
                  <Title>Data final do contrato</Title>
                  {formatDate(isOpen.date_end_performed)}
                </ContaineDetails>
              </ContainerRow>
            </Container>

            <ContainerRow>
              <ContaineDetails>
                <Title>Custo do Projeto</Title>
                {GenerateValue(String(isOpen.team_cost))}
              </ContaineDetails>
            </ContainerRow>

            <ContainerAbsolute>
              <ContainerRow>
                <Title>Time</Title>
              </ContainerRow>
              <TableLine>
                {
                  users.map((user: TeamUserProps) => (
                    <ContainerDataUser>
                        <Image src={user.avatar} />
                      <div className='professional'>
                        <ProfessionalName> {user.name} </ProfessionalName>
                        <ProfessionalJob> {user.job_} </ProfessionalJob>
                      </div>
                    </ContainerDataUser>
                  ))}
              </TableLine>
            </ContainerAbsolute>
          </Columns>
        </ContainerModal>
        <Overlay />
      </>
    )
  }
)

export default Detais
