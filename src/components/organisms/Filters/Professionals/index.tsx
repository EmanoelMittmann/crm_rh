import { Input, Select } from '@stardust-ds/react'
import { IconGlass, Button } from 'components/atoms'
import { Container, Main } from '../style'

export const Professionals = () => {
  return (
    <Main>
      <Container gap='1rem'>
        <Input iconLeft={<IconGlass />} placeholder='Buscar...' width={300} style={{ marginTop: '4px' }} />
        <Select placeholder='Cargo' options={[{ label: 'teste 1', value: '1' }]} />
        <Select placeholder='Função' options={[]} />
      </Container>
      <Button.New onClick={() => {}} />
    </Main>
  )
}
