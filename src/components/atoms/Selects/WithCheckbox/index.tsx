import type { ReactNode } from 'react'
import { Typography } from '@stardust-ds/react'
import { Container, Main } from './style'

interface Props {
  options: { label: string; input: ReactNode; active: boolean }[]
  label?: string
}

export const WithCheckbox = ({ label, options }: Props) => {
  return (
    <Main>
      <Typography type='l3'>{label}</Typography>
      <div className='wrapper'>
        {options.map(({ label, input, active }) => (
          <Container active={active} key={label}>
            {input}
            {!!label && <Typography type='l2'>{label}</Typography>}
          </Container>
        ))}
      </div>
    </Main>
  )
}
