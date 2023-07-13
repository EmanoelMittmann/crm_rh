import { useContext, useState } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'

import { Container, Main } from '../style'

export const Notes = () => {
  const { handleDateReference, handleSearch, meta } = useContext(
    List.Notes.Context
  )

  const { search } = meta
  const [dateInitial, setDateInitial] = useState('')

  return (
    <Main>
      <Container gap='1em'>
        <Input
          type='text'
          value={search}
          width={230}
          height={40}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />
        <Inputs.Date
          value={dateInitial}
          type='date'
          width={230}
          placeholder='Periodo Inicial'
          onChange={(e) => setDateInitial(e.target.value)}
        />
        <Inputs.Date
          type='date'
          width={230}
          placeholder='Periodo Final'
          onChange={(e) =>
            handleDateReference(dateInitial, e.target.value)
          }
        />
      </Container>
    </Main>
  )
}
