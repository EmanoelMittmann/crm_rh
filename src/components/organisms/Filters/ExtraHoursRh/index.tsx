import { useContext, useMemo, useState } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

type ValueProps = Option | null | undefined
export const ExtraHoursRh = () => {
  const {
    meta,
    handleSearch,
    handleFilterProject,
    handleFilterStatus,
    filterOptions_Project,
    filterOptions_Status,
    handleDateReference
  } = useContext(List.ExtraHoursRh.Context)

  const [initialDate, setInitialDate] = useState('')
  const { search, status_id, project_id } = meta

  const currentValueProject = useMemo(
    () =>
      filterOptions_Project.project.find(
        (item) => Number(item.value) === project_id
      ),
    [project_id]
  ) as ValueProps

  const currentValueStatus = useMemo(
    () =>
      filterOptions_Status.status.find(
        (item) => Number(item.value) === status_id
      ),
    [status_id]
  ) as ValueProps

  return (
    <Main>
      <Container gap='1em'>
        <Input
          type='text'
          value={search}
          width={230}
          height={40}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />

        <Select
          placeholder='Projetos'
          width={230}
          value={currentValueProject ?? null}
          options={filterOptions_Project?.project}
          onSelect={(option: ValueProps) =>
            option && handleFilterProject(Number(option?.value))
          }
          onClear={() => handleFilterProject(null as any)}
        />
        <Select
          placeholder='Status'
          width={230}
          options={filterOptions_Status?.status}
          value={currentValueStatus ?? null}
          onSelect={(option: ValueProps) =>
            option && handleFilterStatus(Number(option?.value))
          }
          onClear={() => handleFilterStatus(null as any)}
        />
        <Inputs.Date
          width={230}
          placeholder='Período Inicial'
          type={'date'}
          onChange={(e) => setInitialDate(e.target.value)}
          value={initialDate}
        />
        <Inputs.Date
          width={230}
          type={'date'}
          placeholder='Período Final'
          onChange={(e) =>
            handleDateReference(initialDate, e.target.value)
          }
        />
      </Container>
    </Main>
  )
}
