import React, { ChangeEvent, useContext, useState } from 'react'

import { List } from 'contexts'

import { IconGlass, Inputs, Selects } from 'components/atoms'

import { Main } from '../style'
import { Option } from 'types'

export const HoursProfessional = () => {
  const [start, setStart] = useState('')
  const {
    handleDate,
    handleSearch,
    handleStatus,
    handleProject,
    filterOptions
  } = useContext(List.ProfessionalHours.Context)

  return (
    <Main>
      <Inputs.Default
        iconLeft={<IconGlass />}
        placeholder='Buscar por codigo'
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleSearch(Number(e.target.value))
        }
      />
      <Selects.Default
        options={filterOptions.project}
        placeholder='Projeto'
        onSelect={
          ((value: Option | null) =>
            value && handleProject(Number(value.value))) as any
        }
        onClear={() => handleProject(null)}
      />
      <Selects.Default
        options={filterOptions.status}
        placeholder='Status'
        onSelect={
          ((value: Option | null) =>
            value && handleStatus(Number(value.value))) as any
        }
        onClear={() => handleStatus(null)}
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
