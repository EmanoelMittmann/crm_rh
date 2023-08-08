import { useContext } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass } from 'components/atoms'

import { Container, Main } from './style'

export const OrderFormFilter = () => {
  const { meta, handleSearch } = useContext(
    List.OrderOfServiceprofessionalOS.Context
  )

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          width={230}
          height={42}
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500
          }}
          placeholder='Buscar...'
          iconLeft={<IconGlass />}
          value={search}
          onChange={(e) => handleSearch(e.target?.value)}
        />
      </Container>
    </Main>
  )
}
