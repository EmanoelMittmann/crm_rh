import { ChangeEvent, useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'

export const Contract = () => {
  const [initial, setInitial] = useState('')
  const { filterOptions, handleDate, handleSearch, handleStatus } =
    useContext(List.Contract.Context)
  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          height={42}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <Selects.Default
          options={filterOptions.status}
          placeholder='Status'
          onSelect={(e: any) => e && handleStatus(e.value)}
          onClear={() => handleStatus('')}
        />
        <ContainerDate>
          <Inputs.Date
            placeholder='Início do peróodo'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInitial(e.target.value)
            }
            value={initial}
            max={TODAY}
          />
          <Inputs.Date
            placeholder='Fim do período'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDate(initial, e.target.value)
            }
            min={initial}
            max={TODAY}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
