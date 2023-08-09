import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { TODAY } from 'components/utils/dateNow'

import { Container, Main } from '../style'
import { Option } from 'types'

export const StatusOS = [
  { label: 'Enviada', value: 'SENT' },
  { label: 'Pendente', value: 'PENDING' },
  { label: 'Cancelada', value: 'CANCELED' }
]

export const OrderOfService = () => {
  const {
    meta,
    handleSearch,
    handleFillStatus,
    handleFillRefDate,
    handleDateReference
  } = useContext(List.OrderOfService.Context)

  const { search, referencesDate } = meta
  const [initialDate, setInitialDate] = useState('')

  return (
    <Main>
      <Container gap='1em'>
        <Input
          value={search}
          width={230}
          height={42}
          style={{
            fontFamily: 'Poppins',
            fontWeight: 500
          }}
          iconLeft={<IconGlass />}
          placeholder='Buscar...'
          onChange={(e) => handleSearch(e.target?.value)}
        />
        <Select
          searchable
          placeholder='Status'
          width={230}
          options={StatusOS}
          onClear={() => handleFillStatus('')}
          onSelect={(option: Option | null) =>
            option && handleFillStatus(option.value)
          }
        />
        <Inputs.Date
          type={'date'}
          width={230}
          max={TODAY}
          placeholder='Período Inicial'
          onChange={(e) => setInitialDate(e.target.value)}
          value={initialDate}
        />
        <Inputs.Date
          type={'date'}
          width={230}
          min={initialDate}
          max={TODAY}
          placeholder='Período Final'
          onChange={(e) =>
            handleDateReference(initialDate, e.target.value)
          }
        />
        <Inputs.Date
          type={'date'}
          width={230}
          max={TODAY}
          placeholder={'Referência'}
          onChange={(e) => handleFillRefDate(e.target?.value)}
          value={referencesDate ?? ''}
        />
      </Container>
    </Main>
  )
}
