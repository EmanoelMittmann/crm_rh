import type { ReactNode } from 'react'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconLeftArrow } from 'components/atoms'

import { Container, Button, Main } from './style'

interface Props {
  title: string
  children?: ReactNode
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, children }: Props) => {
  return (
    <Main>
      <Container>
        <Button title='Voltar'>
          <IconLeftArrow fill={FONT_COLOR} />
        </Button>
        <Typography type='h3' color={FONT_COLOR}>
          {title}
        </Typography>
      </Container>
      <Container>{children}</Container>
    </Main>
  )
}
