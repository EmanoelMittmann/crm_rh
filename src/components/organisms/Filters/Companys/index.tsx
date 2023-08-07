import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const Companys = () => {
  const nagivate = useNavigate()
  const {
    meta,
    filterOptions,
    handleTypeCompany,
    handleSearch,
    handleRegistration,
    handleUf
  } = useContext(List.Company.Context)

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={meta.search}
          width={230}
          height={42}
          placeholder='Buscar...'
          iconLeft={<IconGlass />}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Select
          searchable
          options={filterOptions.registration}
          placeholder='Situações Cadastrais'
          width={230}
          onClear={() => handleRegistration(null)}
          onSelect={(option: Option | null) =>
            option && handleRegistration(option.value)
          }
        />
        <Select
          searchable
          options={filterOptions.uf}
          placeholder='UF'
          width={230}
          onSelect={(option: Option | null) =>
            option && handleUf(option.value)
          }
          onClear={() => handleUf(null)}
        />
        <Select
          searchable
          options={filterOptions.typeCompany}
          placeholder='Tipos de Empresas'
          width={230}
          onSelect={(option: Option | null) =>
            option && handleTypeCompany(option.value)
          }
          onClear={() => handleTypeCompany(null)}
        />
      </Container>
      <Button.New onClick={() => nagivate('/company/new')} />
    </Main>
  )
}
