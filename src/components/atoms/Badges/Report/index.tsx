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
        : status === 'Pronto para Pago'
        ? colors.positive.transparent
        : status === 'Pago' && colors.negative.transparent,
    color:
      status === 'Pendente'
        ? colors.status.alert
        : status === 'Pronto para Pago'
        ? colors.positive.pure
        : status === 'Pago' && colors.negative.pure,
    text:
      status === 'Pendente'
        ? 'Pendente'
        : status === 'Pronto para Pago'
        ? 'Pronto para Pago'
        : status === 'Pago'
        ? 'Pago'
        : ''
  }

  return (
    <Badge
      style={{
        width: '10em',
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
