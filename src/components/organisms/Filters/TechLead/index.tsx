import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'

import { Button, IconGlass, Inputs, Selects } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const TechLead = () => {
  const [start, setStart] = useState<string>('')
  const navigate = useNavigate()
  const {
    handleDate,
    filterOptions,
    handleFilterProject,
    handleFilterStatus,
    handleSearch
  } = useContext(List.TechLeadHours.Context)
  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          width={200}
          height={40}
          iconLeft={<IconGlass />}
          placeholder='Buscar ...'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <Selects.Default
          width={200}
          height={40}
          options={filterOptions.project}
          placeholder='Projeto'
          onSelect={
            ((value: Option | null) =>
              value &&
              handleFilterProject(Number(value.value))) as any
          }
          onClear={() => handleFilterProject(null)}
        />
        <Selects.Default
          width={200}
          height={40}
          options={filterOptions.status}
          placeholder='Status'
          onSelect={
            ((value: Option | null) =>
              value && handleFilterStatus(Number(value.value))) as any
          }
          onClear={() => handleFilterStatus(null)}
        />
        <Inputs.Date
          width={200}
          placeholder='Inicial'
          value={start}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setStart(e.target.value)
          }
        />
        <Inputs.Date
          width={200}
          placeholder='Final'
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleDate(start, e.target.value)
          }
        />
        <Button.New
          text='Lançar Horas'
          onClick={() => navigate('/releaseHours')}
        />
      </Container>
    </Main>
  )
}
