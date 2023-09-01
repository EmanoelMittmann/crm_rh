import { ChangeEvent, useContext, useState } from 'react'

import { Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { handleDateChange } from 'components/utils/changeYear'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
import { Option } from 'types'

export const Reports = () => {
  const {
    handleSearch,
    handleStatus,
    handleDate,
    handleCompany,
    filterOptions,
    meta
  } = useContext(List.Reports.Context)
  const [initial, setInitial] = useState<string>('')
  const [end, setEnd] = useState<string>('')

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          placeholder='Buscar...'
          value={search}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          iconLeft={<IconGlass />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <Select
          searchable
          options={filterOptions.companies}
          placeholder='Empresas'
          width={230}
          onClear={() => handleCompany(null)}
          onSelect={(option: Option | null) =>
            option && handleCompany(Number(option?.value))
          }
        />
        <Select
          searchable
          options={filterOptions.status}
          placeholder='Status'
          width={230}
          onClear={() => handleStatus(null)}
          onSelect={(option: Option | null) =>
            option && handleStatus(option?.value)
          }
        />
        <ContainerDate>
          <Inputs.Date
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInitial(handleDateChange(e))
              handleDate(handleDateChange(e), end)
            }}
            value={initial}
            max={TODAY}
            placeholder='Período Inicial'
            type='date'
            width={230}
          />
          <Inputs.Date
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEnd(handleDateChange(e))
              handleDate(initial, handleDateChange(e))
            }}
            min={initial}
            max={TODAY}
            value={end}
            placeholder='Período Final'
            type='date'
            width={230}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
