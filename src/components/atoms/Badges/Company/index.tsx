import { Badge } from '@stardust-ds/react'
import { colors } from 'styles'

interface Props {
  status: string
}

export default ({ status }: Props) => {
  const props = {
    background:
      status === 'ACTIVE'
        ? colors.positive.transparent
        : status === 'SUSPENDED'
        ? colors.status.alert
        : status === 'UNFIT'
        ? colors.negative.transparent
        : status === 'DOWNLOADED'
        ? colors.negative.transparent
        : status === 'NULL' && '#000000',
    color:
      status === 'ACTIVE'
        ? colors.positive.pure
        : status === 'SUSPENDED'
        ? colors.status.alert
        : status === 'UNFIT'
        ? colors.negative.pure
        : status === 'DOWNLOADED'
        ? colors.negative.pure
        : status === 'NULL' && colors.negative.dark,
    text:
      status === 'ACTIVE'
        ? 'Ativa'
        : status === 'SUSPENDED'
        ? 'Suspensa'
        : status === 'UNFIT'
        ? 'Inapta'
        : status === 'DOWNLOADED'
        ? 'Baixada'
        : status === 'NULL'
        ? 'Nula'
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
