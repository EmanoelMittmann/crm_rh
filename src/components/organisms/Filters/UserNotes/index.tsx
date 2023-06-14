import { useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'

import { Container, Main } from '../style'

export const UserNotes = () => {
  const { handleDateReference, handleSearch, handleEmissionNf } =
    useContext(List.UserNotes.Context)
  const [dateInitial, setDateInitial] = useState('')

  return (
    <Main>
      <Container gap='1em' width='100%'>
        <Inputs.Default
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target.value)}
          type='text'
          label='q'
          labelColor='white'
          width={'20%'}
        />
        <Inputs.Default
          value={dateInitial}
          type='date'
          width={'17%'}
          label='Periodo Inicial'
          onChange={(e) => setDateInitial(e.target.value)}
        />
        <Inputs.Default
          type='date'
          width={'17%'}
          label='Periodo Final'
          onChange={(e) =>
            handleDateReference(dateInitial, e.target.value)
          }
        />
        <Inputs.Default
          type='date'
          width={'17%'}
          label='Emissão da NF'
          onChange={(e) => handleEmissionNf(e.target.value)}
        />
      </Container>
    </Main>
  )
}
