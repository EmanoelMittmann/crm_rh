import { useContext } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'

import { Container, Main } from './style'

export const OrderFormFilter = () => {
  const { meta, handleSearch } = useContext(
    List.OrderOfServiceprofessionalOS.Context
  )

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
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
