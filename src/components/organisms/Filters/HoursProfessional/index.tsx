import { ChangeEvent, useContext, useState } from 'react'

import { Input } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
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
  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={search || ''}
          width={230}
          height={42}
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setStart(e.target.value)
            }
          />
          <Inputs.Date
            width={230}
            height={42}
            min={start}
            max={TODAY}
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
