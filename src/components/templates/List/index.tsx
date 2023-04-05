import type { ReactNode } from 'react'
import { Typography } from '@stardust-ds/react'
import { Paginate } from 'components/molecules'
import { theme } from 'styles'
import { Container, Footer, Main } from './style'

interface Props {
  title?: string
  children?: ReactNode
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, children }: Props) => {
  return (
    <Main>
      <Container gap='2rem'>
        {!!title && (
          <Typography type='h3' color={FONT_COLOR}>
            {title}
          </Typography>
        )}
        <Container gap='1rem'>{children}</Container>
      </Container>
      <Footer>
        <Paginate />
      </Footer>
    </Main>
  )
}
