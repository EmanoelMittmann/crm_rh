import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Button } from 'components/atoms'

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
          width={270}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Select
          options={filterOptions.registration}
          placeholder='Situações Cadastrais'
          width={270}
          onClear={() => handleRegistration(null)}
          onSelect={(option: Option | null) =>
            option && handleRegistration(option.value)
          }
        />
        <Select
          options={filterOptions.uf}
          placeholder='UF'
          width={270}
          onSelect={(option: Option | null) =>
            option && handleUf(option.value)
          }
          onClear={() => handleUf(null)}
        />
        <Select
          options={filterOptions.typeCompany}
          placeholder='Tipos de Empresas'
          width={270}
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
