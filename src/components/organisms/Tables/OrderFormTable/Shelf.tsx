import { useContext, useState } from 'react'

import { Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { OrderPropsProfessional } from 'contexts/List/OrderOfServiceProfessional/types'

import { Inputs } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'
import { GenerateValue } from 'components/utils/OptionsAplication'

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
    company_id
  } = props
  const [selectedCompany, setSelectedCompany] = useState(company_id)

  const options = userCompanies.map(
    (company: { id: number; razao_social: string }) => ({
      value: company.id,
      label: company.razao_social
    })
  )

  const selectedCommission = selectSendProfessionals

  const commissionValue = selectedCommission.map((item: Order) => {
    const commission = item.commission ?? 0
    const professional_id = item.professional_id
    const companies_id = item.companies_id
    return {
      commission,
      professional_id,
      companies_id
    }
  })

  const calcularTotal = (id: number) => {
    const item = commissionValue.find(
      (item: any) => item.professional_id === id
    )
    const comissao = item ? item.commission : 0
    const total = fixed_payment_value + comissao
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
            delete professional.commissionHave
          }
          return professional
        })
      )
    }
  }

  const formatCurrency = (
    value: number,
    currency: string,
    localString: string
  ) => {
    const options = {
      style: 'currency',
      currency: currency
    }

    const formattedValue = value.toLocaleString(localString, options)
    const decimalSeparator = Intl.NumberFormat(localString)
      .format(0.1)
      .replace(/\d/g, '')
    const lastTwoChars = formattedValue.slice(-2)

    if (lastTwoChars === `${decimalSeparator}00`) {
      return formattedValue.slice(0, -3)
    }
    return formattedValue
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
            {formatCurrency(Number(commissionHave), 'BRL', 'pt-BR') ||
              '-'}
          </Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>{extra_hour_value ? extra_hour_value : '-'}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>R$ {calcularTotal(id)}</Text>
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}
