import {
  ChangeEvent,
  InputHTMLAttributes,
  useContext,
  useState
} from 'react'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
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
          iconLeft={<IconGlass />}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleSearch(e.target.value)
          }
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
          }}
        />
        <Select
          searchable
          options={filterOptions.companies}
          placeholder='Empresas'
          width={230}
          onClear={() => handleCompany(null)}
          onSelect={(option: Option | null) =>
            option && handleCompany(Number(option?.value))
          }
        />
        <Select
          searchable
          options={filterOptions.status}
          placeholder='Status'
          width={230}
          onClear={() => handleStatus(null)}
          onSelect={(option: Option | null) =>
            option && handleStatus(option?.value)
          }
        />
        <ContainerDate>
          <Inputs.Date
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInitial(e.target.value)
            }
            value={initial}
            max={TODAY}
            placeholder='Período Inicial'
            type='date'
            width={230}
          />
          <Inputs.Date
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleDate(initial, e.target.value)
            }
            min={initial}
            max={TODAY}
            placeholder='Período Final'
            type='date'
            width={230}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
