import { useContext, useState } from 'react'

import { Select } from '@stardust-ds/react'
import { List } from 'contexts'
import {
  OrderPropsProfessional,
  Release
} from 'contexts/List/OrderOfServiceProfessional/types'

import { Inputs } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'
import { formatCurrency } from 'components/utils/formatCurrent'

import { ShelfProps } from '../types'
import { ContainerText } from './style'
import { Order } from './type'
import { Option } from 'types'

export const Shelf = ({
  props,
  config
}: ShelfProps<OrderPropsProfessional>) => {
  const {
    setSelectSendProfessionals,
    setProfessionalOS,
    checked,
    selectSendProfessionals,
    setChecked
  } = useContext(List.OrderOfServiceprofessionalOS.Context)

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
    .filter((item: any) => item.professional_id === id)
    .reduce(
      (acc: number, item: Release) => acc + item.hour_quantity,
      0
    )
  const hours = hourQuantity * extra_hour_value

  const calcularTotal = (id: number) => {
    const item = commissionValue.find(
      (item: Order) => item.professional_id === id
    )
    const comissao = item ? item.commission : 0
    const total = fixed_payment_value + comissao + hours
    return total
  }

  const handleCheckboxChange = async (isChecked: boolean) => {
    if (isChecked) {
      const newItem = {
        name: name,
        professional_id: id,
        companies_id: selectedCompany,
        commission: commission ? undefined : 0,
        isCommission: commission
      }
      setSelectSendProfessionals((prev) => [...prev, newItem])
    } else {
      setSelectSendProfessionals((prev) =>
        prev.filter((item) => item.professional_id !== id)
      )
      setProfessionalOS((prev) =>
        prev.map((professional) => {
          if (professional.id === id) {
            delete professional?.commissionHave
          }
          return professional
        })
      )
    }
  }

  return (
    <>
      <ContainerShelf template={config.template}>
        <ContainerShelfColumn>
          <ContainerText>
            <Inputs.Check
              key={id}
              checked={checked[id]}
              onChange={(e) => {
                setChecked((prev) => ({
                  ...prev,
                  [id]: e.target.checked
                }))

                handleCheckboxChange(e.target.checked)
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
            width={190}
          />
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>{professional_data?.cnpj}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>
            R$ {formatCurrency(fixed_payment_value, 'BRL', 'pt-BR')}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>
            {formatCurrency(commissionHave, 'BRL', 'pt-BR') ?? '-'}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>{formatCurrency(hours, 'BRL', 'pt-BR') ?? '-'}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>
            R$ {formatCurrency(calcularTotal(id), 'BRL', 'pt-BR')}
          </Text>
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}
