import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext,
  useRef
} from 'react'

import { Badge, Button, Select, Textarea } from '@stardust-ds/react'
import { List } from 'contexts'
import {
  ExtraHoursRhProps,
  StatusHours
} from 'contexts/List/ExtraHoursRh/types'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'
import { Modal } from 'components/molecules/Modais'
import { formatDate } from 'components/utils/formatDate'

import api from 'api'
import { routes } from 'routes'

import { IHandleModalPropsAlert } from '../../Alert'
import {
  Columns,
  ContainerAbsolute,
  ContainerButtons,
  ContainerData,
  ContainerModal,
  ContainerTitleJustification,
  ContainerTitles,
  Overlay,
  Row,
  Text,
  TextJustification,
  TextTitle,
  TitleProject
} from './style'
import {
  IHandleModalPropsExtrasHoursRh,
  IModalProps,
  optionsApproval
} from './type'
import { Option } from 'types'

const OvertimeReleaseRh = forwardRef<
  IHandleModalPropsExtrasHoursRh,
  IModalProps
>((props, ref) => {
  const { text } = props
  const { statusHours, detais, handleFillAccept, fetchList } =
    useContext(List.ExtraHoursRh.Context)

  const modalRef = useRef<IHandleModalPropsAlert>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [currentJustification, setCurrentJustification] = useState('')
  const [toAccept, setToAccept] = useState<boolean>(true)

  const approvalData = detais.find((item: ExtraHoursRhProps) => ({
    id: item.id
  }))
  const status: StatusHours | undefined = statusHours.find(
    (item: StatusHours) => item.id === approvalData?.status.id
  )

  const handleApprovalHours = async () => {
    try {
      await api.post(routes.extraHoursRH.register, {
        releases_id: detais[0].id,
        approved: toAccept,
        justification: currentJustification
      })
      await fetchList()
      close()
    } catch (err) {
      console.log(err)
    }
    return
  }

  const valueApproval = toAccept
    ? optionsApproval.find((option) => option.value === 'Aceito')
    : optionsApproval.find((option) => option.value === 'Recusado')

  const handleOptionSelect = (option: Option | null) => {
    if (option) {
      setToAccept(option.value === 'Aceito')
      handleFillAccept(option.value)
      if (option.value === 'Aceito') {
        setCurrentJustification('')
      }
    }
  }

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

  function handleModalAlert() {
    modalRef.current?.open(true)
  }

  return (
    <>
      <ContainerModal>
        <Columns>
          <Row>
            <h2>{text}</h2>
            <Close onClick={() => close()} />
          </Row>

          <Row>
            <ContainerAbsolute>
              <TitleProject>
                {approvalData?.project.name}
              </TitleProject>
              <ContainerData>
                <Text>
                  Lançado em{' '}
                  {formatDate(String(approvalData?.updated_at))}
                </Text>
                <Badge
                  style={{ width: '170px', border: 'none' }}
                  label={String(status?.name)}
                  variant='flat'
                  bgColor={status?.color.text_color}
                  typographyProps={{
                    textAlign: 'center',
                    color: status?.color.text_color
                  }}
                />
              </ContainerData>
              <ContainerTitles>
                <TextTitle>Período</TextTitle>
                <TextTitle>Horas</TextTitle>
              </ContainerTitles>
              <ContainerTitles>
                <Text>
                  {formatDate(String(approvalData?.launch_date))}
                </Text>
                <Text>{approvalData?.hour_quantity}</Text>
              </ContainerTitles>
              <ContainerTitleJustification>
                <TextTitle>Justificativa</TextTitle>
                <TextJustification>
                  {approvalData?.justification}
                </TextJustification>
              </ContainerTitleJustification>
              <ContainerTitleJustification>
                <Select
                  width={200}
                  options={optionsApproval}
                  clearable={false}
                  value={valueApproval}
                  onSelect={handleOptionSelect}
                />
              </ContainerTitleJustification>
            </ContainerAbsolute>
          </Row>
          <Row>
            {!toAccept && (
              <ContainerTitleJustification>
                <TextTitle>Descrição</TextTitle>
                <Textarea
                  placeholder='Descrição'
                  style={{ width: '100%' }}
                  rows={4}
                  value={currentJustification}
                  maxLength={200}
                  onChange={(e) =>
                    setCurrentJustification(e.target.value)
                  }
                />
              </ContainerTitleJustification>
            )}
          </Row>
          <Row>
            <ContainerButtons>
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
                  boxShadow: '0px'
                }}
                bgColor='#0066FF'
                onClick={() => {
                  handleModalAlert()
                }}
              >
                Confirmar
              </Button>
            </ContainerButtons>
          </Row>
        </Columns>
      </ContainerModal>
      {!toAccept && (
        <Modal.Alert
          ref={modalRef}
          text='Negar horas extras'
          message='Tem certeza que deseja negar essas horas extras?'
          EventOne={handleApprovalHours}
        />
      )}
      {toAccept && (
        <Modal.AlertAccept
          ref={modalRef}
          text='Aceitar horas extras'
          message='Tem certeza que deseja aceitar essas horas extras?'
          EventOne={handleApprovalHours}
        />
      )}

      <Overlay />
    </>
  )
})

export default OvertimeReleaseRh
