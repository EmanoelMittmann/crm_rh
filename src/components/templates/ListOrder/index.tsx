import type { ReactNode } from 'react'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconLeftArrow } from 'components/atoms'

import { Container, Main, Button, Row } from './style'

interface Props {
  title?: string
  arrow?: boolean
  children?: ReactNode
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, arrow, children }: Props) => {
  return (
    <Main>
      <Container gap='2rem'>
        <Row>
          {!arrow && (
            <Button>
              <IconLeftArrow fill={FONT_COLOR} />
            </Button>
          )}
          {!!title && (
            <Typography type='h3' color={FONT_COLOR}>
              {title}
            </Typography>
          )}
        </Row>
        <Container gap='1rem'>{children}</Container>
      </Container>
    </Main>
  )
}
