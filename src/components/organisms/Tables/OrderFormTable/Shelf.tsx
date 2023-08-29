import { useContext, useState } from 'react'

import { Select } from '@stardust-ds/react'
import { List } from 'contexts'
import {
  OrderPropsProfessional,
  Release
} from 'contexts/List/OrderOfServiceProfessional/types'
import { theme } from 'styles'

import { Inputs } from 'components/atoms'
import { ContainerShelfColumn } from 'components/organisms/Tables/style'
import { formatCurrency } from 'components/utils/formatCurrent'

import { ShelfProps } from '../types'
import { ContainerShelf, ContainerText, Text } from './style'
import { Order } from './type'
import { Option } from 'types'

export const Shelf = ({
  props,
  config
}: ShelfProps<OrderPropsProfessional>) => {
  const { checked, selectSendProfessionals, toggleCheckedSingle } =
    useContext(List.OrderOfServiceprofessionalOS.Context)

  const {
    name,
    id,
    professional_data,
    extra_hour_value,
    fixed_payment_value,
    userCompanies,
    commission,
    commissionHave,
    company_id,
    extrahour_release
  } = props
  const [selectedCompany, setSelectedCompany] = useState(company_id)

  const options = userCompanies.map(
    (company: { id: number; razao_social: string }) => ({
      value: company.id,
      label: company.razao_social
    })
  )

  const commissionValue = selectSendProfessionals.map(
    (item: Order) => {
      const commission = item.commission ?? 0
      const professional_id = item.professional_id
      const companies_id = item.companies_id
      return {
        commission,
        professional_id,
        companies_id
      }
    }
  )

  const hourQuantity = extrahour_release
    .filter((item: Release) => item.user_id === id)
    .reduce(
      (acc: number, item: Release) => acc + item.hour_quantity,
      0
    )

  const valueOfProfessionalOvertime = hourQuantity * extra_hour_value

  const calculateTotal = (id: number) => {
    const item = commissionValue.find(
      (item: Order) => item.professional_id === id
    )
    const comissao = item ? item.commission : 0
    const total =
      fixed_payment_value + comissao + valueOfProfessionalOvertime
    return total
  }

  return (
    <>
      <ContainerShelf
        template={config.template}
        style={{
          backgroundColor: checked[id]
            ? theme.neutrals.gray1
            : 'initial'
        }}
      >
        <ContainerShelfColumn>
          <ContainerText>
            <Inputs.Check
              key={id}
              checked={checked[id]}
              onChange={(e) => {
                const isChecked = e.target.checked
                toggleCheckedSingle(isChecked, id)
              }}
              label={name}
            />
          </ContainerText>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Select
            placeholder={
              options.find((item) => item.value === selectedCompany)
                ?.label
            }
            options={options as []}
            clearable={false}
            onSelect={(option: Option | null) => {
              if (option !== null) {
                setSelectedCompany(Number(option.value))
              }
            }}
            width={165}
          />
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text
            title='1em'
            style={{
              color: checked[id]
                ? theme.brand.color.status.neutral1
                : 'initial'
            }}
          >
            {professional_data?.cnpj}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text
            title='1em'
            style={{
              color: checked[id]
                ? theme.brand.color.status.neutral1
                : 'initial'
            }}
          >
            {formatCurrency(fixed_payment_value, 'BRL', 'pt-BR')}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text
            title='1em'
            style={{
              color: checked[id]
                ? theme.brand.color.status.neutral1
                : 'initial'
            }}
          >
            {formatCurrency(commissionHave, 'BRL', 'pt-BR') ?? '-'}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text
            title='1em'
            style={{
              color: checked[id]
                ? theme.brand.color.status.neutral1
                : 'initial'
            }}
          >
            {valueOfProfessionalOvertime != 0
              ? formatCurrency(
                  valueOfProfessionalOvertime,
                  'BRL',
                  'pt-BR'
                )
              : '-'}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text
            title='.5em'
            style={{
              color: checked[id]
                ? theme.brand.color.status.neutral1
                : 'initial'
            }}
          >
            {formatCurrency(calculateTotal(id), 'BRL', 'pt-BR')}
          </Text>
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}
