import { useContext } from 'react'

import { List } from 'contexts'

import { IconGlass, Button, Inputs, Selects } from 'components/atoms'

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

  const { search } = meta

  return (
    <Main>
      <Container gap='1rem'>
        <Inputs.Default
          value={search}
          iconLeft={<IconGlass />}
          onChange={(e) => handleSearch(e.target?.value)}
          placeholder='Buscar...'
          width={230}
          height={42}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <Selects.Default
          width={230}
          searchable
          placeholder='Tipo'
          options={filterOptionsType?.project_type}
          onSelect={
            ((option: ValueProps) =>
              option &&
              handleFillProject_Type(Number(option?.value))) as any
          }
          onClear={() => handleFillProject_Type(null)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 'inherit',
            fontWeight: '500'
          }}
        />
        <Selects.Default
          width={230}
          searchable
          placeholder='Status'
          options={filterOptionsStatus?.status}
          onSelect={
            ((option: ValueProps) =>
              option &&
              handleFillProject_Status(Number(option?.value))) as any
          }
          onClear={() => handleFillProject_Status(null)}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: 'inherit',
            fontWeight: '500'
          }}
        />
      </Container>
      <Button.New onClick={() => navigateTo('/project/new')} />
    </Main>
  )
}
