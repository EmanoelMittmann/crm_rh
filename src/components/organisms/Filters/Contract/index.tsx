import { ChangeEvent, useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

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
        />
        <Selects.Default
          options={filterOptions.status}
          placeholder='Status'
          onSelect={(e: any) => e && handleStatus(e.value)}
          onClear={() => handleStatus('')}
        />
        <Inputs.Date
          placeholder='Inicio do periodo'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInitial(e.target.value)
          }
          value={initial}
        />
        <Inputs.Date
          placeholder='Fim do periodo'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleDate(initial, e.target.value)
          }
        />
      </Container>
    </Main>
  )
}
