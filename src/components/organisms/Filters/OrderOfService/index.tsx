import { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Input, Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { IconGlass, Inputs } from 'components/atoms'
import { handleDateChange } from 'components/utils/changeYear'
import { TODAY } from 'components/utils/dateNow'

import { Container, ContainerDate, Main } from '../style'
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
  const [endDate, setEndDate] = useState('')

  return (
    <Main>
      <Container gap='1em'>
        <Inputs.Default
          value={search}
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            fontSize: '14px',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif'
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
        <ContainerDate>
          <Inputs.Date
            type={'date'}
            width={230}
            max={TODAY}
            placeholder='Período Inicial'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setInitialDate(handleDateChange(e))
              handleDateReference(initialDate, endDate)
            }}
            value={initialDate}
          />
          <Inputs.Date
            value={endDate}
            type={'date'}
            width={230}
            min={initialDate}
            max={TODAY}
            placeholder='Período Final'
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEndDate(handleDateChange(e))
              handleDateReference(initialDate, handleDateChange(e))
            }}
          />
          <Inputs.Date
            type={'date'}
            width={230}
            max={TODAY}
            placeholder={'Referência'}
            onChange={(e) => handleFillRefDate(e.target?.value)}
            value={referencesDate ?? ''}
          />
        </ContainerDate>
      </Container>
    </Main>
  )
}
