import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState
} from 'react'

import { Typography } from '@stardust-ds/react'
import { ReportsProps } from 'contexts/List/Reports/types'
import { theme } from 'styles'

import { Button } from 'components/atoms'

import { Columns, ContainerModal, Overlay, Row } from '../../style'

export interface IHandle {
  open(props: ReportsProps): void
  close(): void
}

const Details = forwardRef<IHandle>((props, ref) => {
  const [isOpen, setIsOpen] = useState<ReportsProps | null>(null)
  const close = useCallback(() => {
    setIsOpen(null)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      open: (props) => setIsOpen(props),
      close
    }),
    []
  )

  if (isOpen === null) return null
  return (
    <>
      <ContainerModal width='35em'>
        <Columns>
          <Row>
            <Columns gap='8px'>
              <Typography
                type='h3'
                fontWeight={'bolder'}
                color={theme.neutrals.pureBlack}
              >
                {isOpen.user.name}
              </Typography>
              <Typography
                type='h5'
                fontWeight={'medium'}
                color={theme.neutrals.gray6}
              >
                {isOpen.user.job.name}
              </Typography>
            </Columns>
            <Button.Close onClick={close} />
          </Row>
          <Row gap='1em'>
            <Columns>
              <Typography type='p2' fontWeight={'bold'}>
                Banco
              </Typography>
              <Typography type='p2' color={theme.neutrals.gray5}>
                {isOpen.user.professional_data.bank}
              </Typography>
            </Columns>
            <Columns>
              <Typography type='p2' fontWeight={'bold'}>
                Agência
              </Typography>
              <Typography type='p2' color={theme.neutrals.gray5}>
                {isOpen.user.professional_data.agency}
              </Typography>
            </Columns>
            <Columns>
              <Typography type='p2' fontWeight={'bold'}>
                Conta
              </Typography>
              <Typography type='p2' color={theme.neutrals.gray5}>
                {isOpen.user.professional_data.account_number}
              </Typography>
            </Columns>
          </Row>
          <Row gap='1em'>
            <Columns>
              <Typography type='p2' fontWeight={'bold'}>
                Tipo de Chave Pix
              </Typography>
              <Typography type='p2' color={theme.neutrals.gray5}>
                {isOpen.user.professional_data.pix_key_type}
              </Typography>
            </Columns>
            <Columns>
              <Typography type='p2' fontWeight={'bold'}>
                Chave Pix
              </Typography>
              <Typography type='p2' color={theme.neutrals.gray5}>
                {isOpen.user.professional_data.pix_key}
              </Typography>
            </Columns>
            <Columns></Columns>
          </Row>
        </Columns>
      </ContainerModal>
      <Overlay />
    </>
  )
})

export default Details
