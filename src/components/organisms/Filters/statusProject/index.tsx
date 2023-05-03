import { useContext } from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { Option } from 'types'

import { Button, IconGlass } from 'components/atoms'

import { Container, Main } from '../style'

export const StatusProject = () => {
  const {
    meta,
    filterOptions,
    handleSearch,
    handleStatus,
    handleCreateStatusProject
  } = useContext(List.Status.Context)

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={meta.search}
          iconLeft={<IconGlass />}
          placeholder='Buscar'
          onChange={(e) => handleSearch(e.target.value)}
          width={272}
        />
        <Select
          options={filterOptions.status}
          placeholder='Status'
          onSelect={(option: Option | null) =>
            option && handleStatus(Number(option?.value))
          }
          onClear={() => handleStatus(null)}
        />
      </Container>
      <Button.New />
    </Main>
  )
}
