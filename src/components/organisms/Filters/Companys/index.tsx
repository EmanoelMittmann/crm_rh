import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button, IconGlass } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const Companys = () => {
  const navigate = useNavigate()
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
          placeholder='Buscar...'
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
          iconLeft={<IconGlass />}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Select
          searchable
          options={filterOptions.registration}
          placeholder='Situações Cadastrais'
          onClear={() => handleRegistration(null)}
          onSelect={(option: Option | null) =>
            option && handleRegistration(option.value)
          }
          width='230px'
        />
        <Select
          searchable
          options={filterOptions.uf}
          placeholder='UF'
          onSelect={(option: Option | null) =>
            option && handleUf(option.value)
          }
          onClear={() => handleUf(null)}
          width='230px'
        />
        <Select
          searchable
          options={filterOptions.typeCompany}
          placeholder='Tipos de Empresas'
          onSelect={(option: Option | null) =>
            option && handleTypeCompany(option.value)
          }
          onClear={() => handleTypeCompany(null)}
          width='230px'
        />
      </Container>
      <Button.New onClick={() => navigate('/company/new')} />
    </Main>
  )
}
