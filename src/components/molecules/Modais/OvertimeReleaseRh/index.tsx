import {
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useContext,
  useEffect
} from 'react'

import {
  Badge,
  Button,
  Input,
  Select,
  Textarea
} from '@stardust-ds/react'
import { List } from 'contexts'
import {
  PendingProps,
  StatusHours
} from 'contexts/List/ExtraHoursRh/types'
import { Options } from 'prettier'
import { theme } from 'styles'

import Close from 'components/atoms/Buttons/Close'
import { formatDate } from 'components/utils/formatDate'

import api from 'api'
import { routes } from 'routes'

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
  const {
    extraHoursRh,
    projects,
    statusHours,
    detais,
    handleFillAccept
  } = useContext(List.ExtraHoursRh.Context)

  const [isOpen, setIsOpen] = useState(false)
  const [currentJustification, setCurrentJustification] = useState('')
  const [toAccept, setToAccept] = useState<boolean>(true)

  const data = detais.find((item) => ({ id: item.id }))
  const status: StatusHours | undefined = statusHours.find(
    (item) => item.id === data?.status.id
  )
  const justification = detais.find((item) => item.id === data?.id)

  const handleApprovalHours = async (release_id: number) => {
    try {
      await api.post(routes.extraHoursRH.register, {
        release_id: release_id,
        approved: toAccept,
        justification: currentJustification
      })
      close()
    } catch (err) {
      console.log(err)
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
              <TitleProject>{data?.project.name}</TitleProject>
              <ContainerData>
                <Text>
                  Lançado em {formatDate(String(status?.updated_at))}{' '}
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
                <Text>{formatDate(String(data?.launch_date))}</Text>
                <Text>{data?.hour_quantity}</Text>
              </ContainerTitles>
              <ContainerTitleJustification>
                <TextTitle>Justificativa</TextTitle>
                <TextJustification>
                  {justification?.justification}
                </TextJustification>
              </ContainerTitleJustification>
              <ContainerTitleJustification>
                <Select
                  width={200}
                  options={optionsApproval}
                  clearable={false}
                  value={
                    toAccept
                      ? optionsApproval.find(
                          (option) => option.value === 'Aceito'
                        )
                      : optionsApproval.find(
                          (option) => option.value === 'Recusado'
                        )
                  }
                  onSelect={(option: Option | null) => {
                    if (option) {
                      setToAccept(option.value === 'Aceito')
                      handleFillAccept(option.value)
                      if (option.value === 'Aceito') {
                        setCurrentJustification('')
                      }
                    }
                  }}
                />
              </ContainerTitleJustification>
            </ContainerAbsolute>
          </Row>
          <Row>
            {toAccept === false && (
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
                  close()
                }}
              >
                Confirmar
              </Button>
            </ContainerButtons>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default OvertimeReleaseRh
