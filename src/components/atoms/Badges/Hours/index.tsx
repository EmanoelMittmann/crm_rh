import { Badge } from '@stardust-ds/react'
import { colors, theme } from 'styles'

interface Props {
  status: {
    name: string
    id: number
  }
}

export default ({ status }: Props) => {
  const props = {
    background:
      status.name === 'Pendente - Líder Técnico'
        ? colors.status.alert
        : status.name === 'Pendente - RH'
        ? colors.status.alert
        : status.name === 'Pronta para Pagamento'
        ? colors.positive.pure
        : status.name === 'Paga'
        ? colors.positive.pure
        : status.name === 'Negado' && colors.status.negative,
    color:
      status.id === 1
        ? colors.status.alert
        : status.id === 2
        ? colors.status.alert
        : status.id === 3
        ? colors.positive.pure
        : status.id === 4
        ? theme.neutrals.pureWhite
        : status.id === 5 && colors.status.negative
  }

  return (
    <Badge
      style={{
        width: '15em',
        display: 'flex',
        padding: '0.8rem',
        justifyContent: 'center',
        border: 'none',
        whiteSpace: 'nowrap',
        backgroundColor:
          status.id === 4
            ? `${props.background}`
            : `${props.background}15`
      }}
      label={status.name}
      variant='flat'
      typographyProps={{
        textAlign: 'center',
        color: `${props.color}`
      }}
    />
  )
}
