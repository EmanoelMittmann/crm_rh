import type { ReactNode } from 'react'
import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'
import { Container, Main } from './style'

interface Props {
  title?: string
  children?: ReactNode
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, children }: Props) => {
  return (
    <Main>
      {!!title && (
        <Typography type='h3' color={FONT_COLOR}>
          {title}
        </Typography>
      )}
      <Container>{children}</Container>
    </Main>
  )
}
