import { ChangeEvent, useContext, useState } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'
import { handleDateChange } from 'components/utils/changeYear'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
import { Option } from 'types'

export const HoursProfessional = () => {
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const {
    meta,
    handleDate,
    handleSearch,
    handleStatus,
    handleProject,
    filterOptions
  } = useContext(List.ProfessionalHours.Context)
  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          value={search || ''}
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
        <Selects.Default
          width={200}
          options={filterOptions.project}
          placeholder='Projeto'
          onSelect={
            ((value: Option | null) =>
              value && handleProject(Number(value.value))) as any
          }
          onClear={() => handleProject(null)}
        />
        <Selects.Default
          width={200}
          options={filterOptions.status}
          placeholder='Status'
          onSelect={
            ((value: Option | null) =>
              value && handleStatus(Number(value.value))) as any
          }
          onClear={() => handleStatus(null)}
        />
        <ContainerDate>
          <Inputs.Date
            width={230}
            height={42}
            placeholder='Inicial'
            max={TODAY}
            value={start}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setStart(handleDateChange(e))
              handleDate(handleDateChange(e), end)
            }}
          />
          <Inputs.Date
            value={end}
            width={230}
            height={42}
            min={start}
            max={TODAY}
            placeholder='Final'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEnd(handleDateChange(e))
              handleDate(start, handleDateChange(e))
            }}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
