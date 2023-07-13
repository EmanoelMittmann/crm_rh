import { Badge } from '@stardust-ds/react'
import { colors } from 'styles'

interface Props {
  status: string
}

export default ({ status }: Props) => {
  const props = {
    background:
      status === 'Pendente'
        ? colors.status.alert
        : status === 'Pronto para pagar'
        ? colors.positive.transparent
        : status === 'Pago' && colors.negative.transparent,
    color:
      status === 'Pendente'
        ? colors.status.alert
        : status === 'Pronto para pagar'
        ? colors.positive.pure
        : status === 'Pago' && colors.negative.pure,
    text:
      status === 'Pendente'
        ? 'Pendente'
        : status === 'Pronto para pagar'
        ? 'Pronto para pagar'
        : status === 'Pago'
        ? 'Pago'
        : ''
  }

  return (
    <Badge
      style={{
        width: '210px',
        display: 'flex',
        padding: '0.8rem',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: `${props.background}15`
      }}
      label={props.text}
      variant='flat'
      typographyProps={{
        textAlign: 'center',
        color: `${props.color}`
      }}
    />
  )
}
