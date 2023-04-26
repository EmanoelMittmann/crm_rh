import { Typography } from '@stardust-ds/react'
import { theme } from 'styles'

import Outline from 'components/atoms/Buttons/Outline'

import { Container, Column } from './style'

export const HeaderSettings = () => (
  <Container>
    <Column>
      <Typography
        type='l1'
        fontWeight='medium'
        color={theme.neutrals.gray6}
      >
        Cadastros
      </Typography>
    </Column>
    <Column>
      <Outline text='Cargos' path='job' />
      <Outline text='Status de Projetos' path='typeProject' />
      <Outline text='Tipos de Projetos' path='statusProject' />
    </Column>
  </Container>
)
