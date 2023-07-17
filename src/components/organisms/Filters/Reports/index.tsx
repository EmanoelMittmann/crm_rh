import {
  ChangeEvent,
  InputHTMLAttributes,
  useContext,
  useState
} from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Inputs } from 'components/atoms'

import { Container, Main } from '../style'
import { Option } from 'types'

export const Reports = () => {
  const {
    handleSearch,
    handleStatus,
    handleDate,
    handleCompany,
    filterOptions,
    meta
  } = useContext(List.Reports.Context)
  const [initial, setInitial] = useState<string>('')

  const { search } = meta

  return (
    <Main>
      <Container gap='1em'>
        <Input
          placeholder='Buscar...'
          value={search}
          width={230}
          height={42}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
        />
        <Select
          options={filterOptions.companies}
          placeholder='Empresas'
          width={230}
          onClear={() => handleCompany(null)}
          onSelect={(option: Option | null) =>
            option && handleCompany(Number(option?.value))
          }
        />
        <Select
          options={filterOptions.status}
          placeholder='Status'
          width={230}
          onClear={() => handleStatus(null)}
          onSelect={(option: Option | null) =>
            option && handleStatus(option?.value)
          }
        />
        <Inputs.Date
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInitial(e.target.value)
          }
          value={initial}
          placeholder='Período Inicial'
          type='date'
          width={230}
        />
        <Inputs.Date
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleDate(initial, e.target.value)
          }
          placeholder='Período Final'
          type='date'
          width={230}
        />
      </Container>
    </Main>
  )
}
