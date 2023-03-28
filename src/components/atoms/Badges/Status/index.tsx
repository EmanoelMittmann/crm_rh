import { Badge } from '@stardust-ds/react'
import { colors } from 'styles'

interface Props {
  status: boolean
}

export default ({ status }: Props) => {
  const props = {
    label: status ? 'Ativo' : 'Inativo',
    background: status ? colors.positive.transparent : colors.negative.transparent,
    color: status ? colors.positive.pure : colors.negative.pure,
  }

  return (
    <Badge
      style={{ width: '100%', padding: '0.8rem 2rem' }}
      label={props.label}
      variant='flat'
      bgColor={props.background}
      typographyProps={{
        textAlign: 'center',
        color: props.color,
      }}
    />
  )
}
