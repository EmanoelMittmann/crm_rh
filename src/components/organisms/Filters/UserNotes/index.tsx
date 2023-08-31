import { useContext, useState } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { handleDateChange } from 'components/utils/changeYear'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'

export const UserNotes = () => {
  const {
    meta,
    handleDateReference,
    handleSearch,
    handleEmissionNf
  } = useContext(List.UserNotes.Context)

  const { search } = meta
  const [dateInitial, setDateInitial] = useState('')

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          value={search}
          width={230}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ContainerDate>
          <Inputs.Date
            value={dateInitial}
            type='date'
            width={230}
            height={42}
            max={TODAY}
            placeholder='Período Inicial'
            onChange={(e) => setDateInitial(handleDateChange(e))}
          />
          <Inputs.Date
            width={230}
            height={42}
            min={dateInitial}
            max={TODAY}
            placeholder='Período Final'
            onChange={(e) =>
              handleDateReference(dateInitial, handleDateChange(e))
            }
          />
          <Inputs.Date
            width={230}
            height={42}
            max={TODAY}
            placeholder='Emissão da NF'
            onChange={(e) => handleEmissionNf(e.target.value)}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
