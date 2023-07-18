import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconLeftArrow } from 'components/atoms'

import { Container, Button, Main } from './style'

interface Props {
  title: string
  arrow?: boolean
  children?: ReactNode
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, arrow, children }: Props) => {
  const navigate = useNavigate()
  return (
    <Main>
      <Container>
        {arrow && (
          <Button onClick={() => navigate(-1)}>
            <IconLeftArrow fill={FONT_COLOR} />
          </Button>
        )}
        <Typography type='h3' color={FONT_COLOR}>
          {title}
        </Typography>
      </Container>
      <Container>{children}</Container>
    </Main>
  )
}
