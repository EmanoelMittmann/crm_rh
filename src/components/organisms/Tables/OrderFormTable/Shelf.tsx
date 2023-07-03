import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button, Select } from '@stardust-ds/react'
import { List } from 'contexts'
import { parentPort } from 'worker_threads'

import { Inputs, SelectOption, Selects } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'

import { ShelfProps } from '../types'
import { ContainerText } from './style'
import { Order } from './type'
import { Option } from 'types'

export const Shelf = ({ props, config }: ShelfProps<any>) => {
  const { setValue, watch } = useFormContext()

  const {
    setSelectSendProfessionals,
    checked,
    checkedAll,
    professionalOS,
    selectSendProfessionals,
    setCheckedAll
  } = useContext(List.OrderOfServiceprofessionalOS.Context)

  const {
    name,
    id,
    professional_data,
    extra_hour_value,
    fixed_payment_value,
    userCompanies,
    commission,
    company_id
  } = props
  const [selectedCompany, setSelectedCompany] = useState(company_id)

  console.log('setSelectSendProfessionals: ', selectSendProfessionals)
  console.log('checkedAll: ', checkedAll)
  const options = userCompanies.map((company: any) => ({
    value: company.id,
    label: company.razao_social
  }))

  const selectedCommission = watch('professional') || []
  const commissionValue = selectedCommission.map((item: Order) => {
    const commission = item.commission
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
              onChange={(e) =>
                handleCheckboxChange(e.target?.checked)
              }
              label={name}
            />
          </ContainerText>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Select
            placeholder={
              options.find(
                (item: Option) => item.value === selectedCompany
              )?.label
            }
            options={options || []}
            clearable={false}
            onSelect={(option: Option | null) => {
              if (option !== null) {
                setSelectedCompany(option.value)
              }
            }}
            width={190}
          />
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>{professional_data?.cnpj}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>R$ {fixed_payment_value}</Text>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Text>{commission || '-'}</Text>
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
