import type { ReactNode } from 'react'

import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import { Paginate } from 'components/molecules'

import { Button as Buttons } from '../../atoms/Buttons'
import { Container, Footer, Main, Row } from './style'

interface Props {
  title?: string
  arrow?: boolean
  children?: ReactNode
  btnText: string
  Icon?: JSX.Element
  event?(): void
}

const FONT_COLOR = theme.neutrals.gray8

export default ({
  title,
  arrow,
  btnText,
  children,
  Icon,
  event
}: Props) => {
  return (
    <Main>
      <Container gap='1rem'>
        <Row>
          {!!title && (
            <Typography type='h3' color={FONT_COLOR}>
              {title}
            </Typography>
          )}
          <Buttons.New
            text={btnText}
            iconLeft={Icon}
            onClick={event}
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
