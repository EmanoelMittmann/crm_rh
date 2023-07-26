import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext,
  useRef
} from 'react'

import {
  Button,
  Select,
  Textarea,
  Typography
} from '@stardust-ds/react'
import { List } from 'contexts'
import { ExtraHoursRhProps } from 'contexts/List/ExtraHoursRh/types'
import { theme } from 'styles'

import { Badge } from 'components/atoms'
import Close from 'components/atoms/Buttons/Close'
import { Modal } from 'components/molecules/Modais'
import { formatDate } from 'components/utils/formatDate'

import api from 'api'
import { routes } from 'routes'

import { IHandleModalPropsAlert } from '../../Alert'
import {
  ContainerButtons,
  ContainerTitleJustification,
  Overlay,
  TextTitle,
  Columns,
  ContainerModal,
  Row
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
  const { detais, handleFillAccept, fetchList } = useContext(
    List.ExtraHoursRh.Context
  )

  const modalRef = useRef<IHandleModalPropsAlert>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [currentJustification, setCurrentJustification] = useState('')
  const [toAccept, setToAccept] = useState<boolean>(true)

  const professional = detais.find((item: ExtraHoursRhProps) => ({
    id: item.id
  }))

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
      <ContainerModal width='40em' height='auto'>
        <Columns content='center' gap='1em'>
          <Row>
            <Typography type='h2'>{text}</Typography>
            <Close onClick={() => close()} />
          </Row>

          <Row>
            <Typography type='h3' color={theme.neutrals.gray5}>
              {professional?.project.name}
            </Typography>
          </Row>
          <Row>
            <Typography
              type='p2'
              color={theme.neutrals.gray4}
              fontStyle='italic'
            >
              Lançado em{' '}
              {formatDate(String(professional?.updated_at))}
            </Typography>
            {professional?.status && (
              <Badge.Hours status={professional.status} />
            )}
          </Row>

          <Row>
            <Columns align='start' gap='0.5em'>
              <Typography type='l3'>Período</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {formatDate(String(professional?.launch_date))}
              </Typography>
            </Columns>

            <Columns align='start' gap='0.5em'>
              <Typography type='l3'>Horas</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {professional?.hour_quantity}
              </Typography>
            </Columns>
          </Row>
          <Row>
            <Columns align='start' space='normal' gap='0.5em'>
              <Typography type='l3'>Justificativa</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {professional?.justification}
              </Typography>
            </Columns>
          </Row>
          <Row>
            <Columns align='start' gap='1em'>
              <Select
                width={280}
                options={optionsApproval}
                clearable={false}
                value={valueApproval}
                onSelect={handleOptionSelect}
              />
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
            </Columns>
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
