import { useContext, useMemo } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Button } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

type ValueProps = Option | null | undefined

export const Projects = () => {
  const {
    meta,
    filterOptionsType,
    filterOptionsStatus,
    handleFillProject_Type,
    handleFillProject_Status,
    handleSearch,
    navigateTo
  } = useContext(List.Project.Context)

  const { search, project_status_id, project_type_id } = meta

  const currentValueType = useMemo(
    () =>
      filterOptionsType.project_type.find(
        (item) => Number(item.value) === project_type_id
      ),
    [project_type_id]
  ) as ValueProps

  const currentValueStatus = useMemo(
    () =>
      filterOptionsStatus.status.find(
        (item) => Number(item.value) === project_status_id
      ),
    [project_status_id]
  ) as ValueProps

  return (
    <Main>
      <Container gap='1rem'>
        <Input
          value={search}
          iconLeft={<IconGlass />}
          onChange={(e) => handleSearch(e.target?.value)}
          placeholder='Buscar...'
          width={230}
          height={42}
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500
          }}
        />
        <Select
          width={230}
          searchable
          placeholder='Tipo'
          value={currentValueType ?? null}
          options={filterOptionsType?.project_type}
          onSelect={(option: ValueProps) =>
            option && handleFillProject_Type(Number(option?.value))
          }
          onClear={() => handleFillProject_Type(null)}
        />
        <Select
          width={230}
          searchable
          placeholder='Status'
          value={currentValueStatus ?? null}
          options={filterOptionsStatus?.status}
          onSelect={(option: ValueProps) =>
            option && handleFillProject_Status(Number(option?.value))
          }
          onClear={() => handleFillProject_Status(null)}
        />
      </Container>
      <Button.New onClick={() => navigateTo('/project/new')} />
    </Main>
  )
}
