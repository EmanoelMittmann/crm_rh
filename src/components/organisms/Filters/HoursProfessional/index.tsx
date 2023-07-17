import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass, Inputs, Selects } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const HoursProfessional = () => {
  const [start, setStart] = useState('')
  const {
    meta,
    handleDate,
    handleSearch,
    handleStatus,
    handleProject,
    filterOptions
  } = useContext(List.ProfessionalHours.Context)
  const navigate = useNavigate()
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
        <Inputs.Date
          width={190}
          placeholder='Inicial'
          value={start}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setStart(e.target.value)
          }
        />
        <Inputs.Date
          width={190}
          placeholder='Final'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleDate(start, e.target.value)
          }
        />
      </Container>
    </Main>
  )
}
