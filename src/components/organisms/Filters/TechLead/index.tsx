import React, { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass, Inputs, Selects } from 'components/atoms'

import { Container, ContainerDate, Main } from '../style'
import { Option } from 'types'

export const TechLead = () => {
  const [start, setStart] = useState<string>('')
  const navigate = useNavigate()
  const {
    meta,
    handleDate,
    filterOptions,
    handleFilterProject,
    handleFilterStatus,
    handleSearch
  } = useContext(List.TechLeadHours.Context)

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          width={230}
          height={42}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          value={search}
          iconLeft={<IconGlass />}
          placeholder='Buscar ...'
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Selects.Default
          width={230}
          height={42}
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
          width={230}
          height={42}
          options={filterOptions.status}
          placeholder='Status'
          onSelect={
            ((value: Option | null) =>
              value && handleFilterStatus(Number(value.value))) as any
          }
          onClear={() => handleFilterStatus(null)}
        />
        <ContainerDate>
          <Inputs.Date
            width={230}
            height={42}
            placeholder='Inicial'
            value={start}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStart(e.target.value)
            }
          />
          <Inputs.Date
            width={230}
            height={42}
            placeholder='Final'
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDate(start, e.target.value)
            }
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
