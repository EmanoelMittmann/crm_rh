import { useContext } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass } from 'components/atoms'

import { Container, Main } from '../style'

export const DetailsHours = () => {
  const { meta, handleSearch } = useContext(
    List.ProfessionalHours.Context
  )
  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={search || ''}
          width={200}
          height={42}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />
      </Container>
    </Main>
  )
}
