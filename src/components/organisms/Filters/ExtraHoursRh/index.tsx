import { useContext, useMemo } from 'react'

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
    handleFillFinalDate,
    handleFillInitialDate
  } = useContext(List.ExtraHoursRh.Context)

  const { search, status_id, project_id, initialDate, finalDate } =
    meta

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
          width={170}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />

        <Select
          placeholder='Projetos'
          width={230}
          clearable={false}
          value={currentValueProject ?? null}
          options={filterOptions_Project?.project}
          onSelect={(option: ValueProps) =>
            option && handleFilterProject(Number(option?.value))
          }
        />
        <Select
          placeholder='Status'
          width={230}
          clearable={false}
          options={filterOptions_Status?.status}
          value={currentValueStatus ?? null}
          onSelect={(option: ValueProps) =>
            option && handleFilterStatus(Number(option?.value))
          }
        />
        <Inputs.Date
          type={'date'}
          width={230}
          placeholder='Periodo Inicial'
          onChange={(e) => handleFillInitialDate(e.target?.value)}
          value={initialDate ?? ''}
        />
        <Inputs.Date
          type={'date'}
          width={230}
          placeholder='Periodo Final'
          onChange={(e) => handleFillFinalDate(e.target?.value)}
          value={finalDate ?? ''}
        />
      </Container>
    </Main>
  )
}
