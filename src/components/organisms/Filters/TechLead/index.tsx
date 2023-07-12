import React, { ChangeEvent, useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'

import { Main } from '../style'
import { Option } from 'types'

export const TechLead = () => {
  const [start, setStart] = useState<string>('')
  const {
    handleDate,
    filterOptions,
    handleFilterProject,
    handleFilterStatus,
    handleSearch
  } = useContext(List.TechLeadHours.Context)
  return (
    <Main>
      <Inputs.Default
        iconLeft={<IconGlass />}
        placeholder='Buscar ...'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(e.target.value)
        }
      />
      <Selects.Default
        options={filterOptions.project}
        placeholder='Projeto'
        onSelect={
          ((value: Option | null) =>
            value && handleFilterProject(Number(value.value))) as any
        }
        onClear={() => handleFilterProject(null)}
      />
      <Selects.Default
        options={filterOptions.status}
        placeholder='Status'
        onSelect={
          ((value: Option | null) =>
            value && handleFilterStatus(Number(value.value))) as any
        }
        onClear={() => handleFilterStatus(null)}
      />
      <Inputs.Date
        placeholder='Inicial'
        value={start}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setStart(e.target.value)
        }
      />
      <Inputs.Date
        placeholder='Final'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleDate(start, e.target.value)
        }
      />
    </Main>
  )
}
