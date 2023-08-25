import { useContext } from 'react'

import * as S from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Button, Inputs, Selects } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const Professionals = () => {
  const {
    meta,
    filterOptions,
    handleSearch,
    handleFillJob,
    navigateTo
  } = useContext(List.Professional.Context)

  const { search } = meta

  return (
    <Main>
      <Container gap='1rem'>
        <Inputs.Default
          value={search}
          onChange={(e) => handleSearch(e.target?.value)}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <Selects.Default
          width={230}
          placeholder='Cargo'
          options={filterOptions.job}
          onSelect={
            ((option: Option | null) =>
              option && handleFillJob(Number(option.value))) as any
          }
          searchable
          onClear={() => handleFillJob(null)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 'inherit',
            fontWeight: '500'
          }}
        />
      </Container>
      <Container gap='1em'>
        <S.Button
          onClick={() => navigateTo('/contractHistory')}
          color='#0066FF'
          style={{
            borderRadius: '40px'
          }}
        >
          Histórico de contrato
        </S.Button>
        <Button.New onClick={() => navigateTo('/professional/new')} />
      </Container>
    </Main>
  )
}
