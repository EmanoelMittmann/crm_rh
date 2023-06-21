import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import { IconLeftArrow } from 'components/atoms'
import { Paginate } from 'components/molecules'

import { Button as Buttons } from '../../atoms/Buttons'
import { Container, Footer, Main, Button, Row } from './style'

interface Props {
  title?: string
  arrow?: boolean
  children?: ReactNode
  btnText: string
  path: string
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, arrow, btnText, path, children }: Props) => {
  const navigate = useNavigate()
  return (
    <Main>
      <Container gap='2rem'>
        <Row>
          {!!title && (
            <Typography type='h3' color={FONT_COLOR}>
              {title}
            </Typography>
          )}
          <Buttons.New
            text={btnText}
            onClick={() => navigate(path)}
          />
        </Row>
        <Container gap='1rem'>{children}</Container>
      </Container>
      <Footer>
        <Paginate />
      </Footer>
    </Main>
  )
}
