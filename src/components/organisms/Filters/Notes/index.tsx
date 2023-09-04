import { ChangeEvent, useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { handleDateChange } from 'components/utils/changeYear'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'

export const Notes = () => {
  const { handleDateReference, handleSearch, meta } = useContext(
    List.Notes.Context
  )

  const { search } = meta
  const [dateInitial, setDateInitial] = useState('')
  const [dateEnd, setDateEnd] = useState('')

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          type='text'
          value={search}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />
        <ContainerDate>
          <Inputs.Date
            value={dateInitial}
            type='date'
            width={230}
            max={TODAY}
            placeholder='Período Inicial'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setDateInitial(handleDateChange(e))
              handleDateReference(handleDateChange(e), dateEnd)
            }}
          />
          <Inputs.Date
            type='date'
            width={230}
            value={dateEnd}
            min={dateInitial}
            max={TODAY}
            placeholder='Período Final'
            onChange={(e) => {
              setDateEnd(handleDateChange(e))
              handleDateReference(dateInitial, handleDateChange(e))
            }}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
