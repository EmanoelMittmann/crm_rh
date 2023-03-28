import type { ReactNode } from 'react'
import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'
import { Container, Footer, Main } from './style'
import { Paginate } from 'components/molecules'
import type { PaginateProps } from 'components/molecules'

interface Props {
  title?: string
  children?: ReactNode
  pagination: PaginateProps
}

const FONT_COLOR = theme.neutrals.gray8

export default ({ title, pagination, children }: Props) => {
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
        <Paginate {...{ ...pagination }} />
      </Footer>
    </Main>
  )
}
