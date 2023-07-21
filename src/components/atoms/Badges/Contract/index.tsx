import { Badge } from '@stardust-ds/react'
import { colors } from 'styles'

interface Props {
  status: string
}

export default ({ status }: Props) => {
  const props = {
    background:
      status === 'Assinado'
        ? colors.positive.transparent
        : status === 'Enviado'
        ? '#0066ff15'
        : status === 'Encerrado'
        ? colors.negative.transparent
        : status === 'Pendente' && colors.status.alert,
    color:
      status === 'Assinado'
        ? colors.positive.pure
        : status === 'Enviado'
        ? '#0066FF'
        : status === 'Encerrado'
        ? colors.negative.transparent
        : status === 'Pendente' && colors.status.alert
  }

  return (
    <Badge
      style={{
        width: '10em',
        display: 'flex',
        fontWeight: 500,
        padding: '0.8rem',
        justifyContent: 'center',
        border: 'none',
        backgroundColor: `${props.background}15`
      }}
      label={status}
      variant='flat'
      typographyProps={{
        textAlign: 'center',
        color: `${props.color}`
      }}
    />
  )
}
