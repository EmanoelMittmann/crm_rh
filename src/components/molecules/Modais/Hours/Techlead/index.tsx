import {
  ChangeEvent,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState
} from 'react'

import { Textarea, Typography } from '@stardust-ds/react'
import { List } from 'contexts'
import { theme } from 'styles'

import { Badge, Button, Selects } from 'components/atoms'
import { formatDate } from 'components/utils/formatDate'

import { IHandleTechLead, Options } from './constants'
import { Overlay, ContainerModal, Columns, Row } from './style'
import { TextTitle } from '../RH/style'

const TechLead = forwardRef<IHandleTechLead, any>((props, ref) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  const [justify, setJustify] = useState<Number>(1)
  const { professional, handleApprove } = useContext(
    List.TechLeadHours.Context
  )

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close
    }),
    []
  )

  const close = useCallback(() => setIsOpen(false), [])

  if (!isOpen) return null

  return (
    <>
      <ContainerModal width='40em' height='auto'>
        <Columns content='center' gap='1em'>
          <Row>
            <Typography type='h2'>
              Lançamento #{professional[0]?.id}
            </Typography>
            <Button.Close onClick={close} />
          </Row>
          <Row>
            <Typography type='h3' color={theme.neutrals.gray5}>
              {professional[0]?.project.name}
            </Typography>
          </Row>
          <Row>
            <Typography
              type='p2'
              color={theme.neutrals.gray4}
              fontStyle='italic'
            >
              Lançado em {formatDate(professional[0]?.launch_date)}
            </Typography>
            <Badge.Hours status={professional[0]?.status} />
          </Row>
          <Row>
            <Columns align='start' gap='0.5em'>
              <Typography type='l3'>Período</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {professional[0]?.end_date
                  ? formatDate(professional[0]?.end_date)
                  : formatDate(professional[0]?.launch_date)}
              </Typography>
            </Columns>
            <Columns align='start' gap='0.5em'>
              <Typography type='l3'>Horas</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {professional[0]?.hour_quantity}
              </Typography>
            </Columns>
          </Row>
          <Row>
            <Columns align='start' space='normal' gap='0.5em'>
              <Typography type='l3'>Justificativa</Typography>
              <Typography type='p3' color={theme.neutrals.gray5}>
                {professional[0]?.justification}
              </Typography>
            </Columns>
          </Row>
          <Row>
            <Columns align='start' gap='1em'>
              <Selects.Default
                options={Options}
                value={
                  Options.find(
                    (item) => item.value === String(justify)
                  ) as any
                }
                onSelect={(opts: any) =>
                  opts && setJustify(Number(opts.value))
                }
              />
              {justify === 0 && (
              <>
              <TextTitle>Descrição</TextTitle>
              <Textarea
                  width='100%'
                  value={text}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
                  maxLength={200}
                  placeholder="Escreva sua justificativa aqui..."
                  required /></>
              )}
            </Columns>
          </Row>
          <Row>
            <Button.Updade
              bottom='0em'
              onSave={() => {
                handleApprove(
                  professional[0].id,
                  justify === 0 ? false : true,
                  text
                )
                close()
              }}
              saveButtonName='Confirmar'
              cancelButtonName='Cancelar'
              onCancel={close}
            />
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default TechLead
