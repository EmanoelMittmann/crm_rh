import { useContext } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Button } from 'components/atoms'

import { Container, Main } from '../style'

type ValueProps = Option | null | undefined

export const Projects = () => {
  const {
    filterOptionsType,
    filterOptonsStatus,
    handleFillProject_Type,
    handleOrder,
    handleSearch,
    navigateTo,
    handleUpdateStatus
  } = useContext(List.Project.Context)

  return (
    <Main>
      <Container gap='1rem'>
        <Input
          value={''}
          iconLeft={<IconGlass />}
          onChange={(e) => handleSearch(e.target?.value)}
          placeholder='Buscar...'
          width={230}
          style={{ marginTop: '4px' }}
        />
        <Select
          width={230}
          placeholder='Tipo'
          options={filterOptionsType.project_type}
          onSelect={(option: Option | null) =>
            option && handleFillProject_Type(Number(option?.value))
          }
        />
        <Select
          width={230}
          placeholder='Status'
          options={filterOptonsStatus.status}
          onSelect={() => {}}
        />
      </Container>
      <Button.New onClick={() => navigateTo('/RegisterProject')} />
    </Main>
  )
}
