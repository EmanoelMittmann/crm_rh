import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Select } from '@stardust-ds/react'

import { Inputs } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'

import { ShelfIProps } from '../types'
import { ContainerText } from './style'
import { Order } from './type'

export const Shelf = ({
  props,
  config,
  orderData
}: ShelfIProps<any>) => {
  const { setValue, watch } = useFormContext()
  const {
    name,
    id,
    companies,
    professional_data,
    extra_hour_value,
    fixed_payment_value,
    userCompanies,
    commission,
    company_id
  } = props
  const {} = orderData

  const field = `professional.${id}`
  const [selectedCompany, setSelectedCompany] = useState(company_id)

  const selectedCommission = watch('professionals') || []
  const commissionValue = selectedCommission.map((item: Order) => {
    const commission = item.commission
    console.log('commission: ', commission)
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

  const calcularCommission = (id: number) => {
    const item = commissionValue.find(
      (item: any) => item.professional_id === id
    )
    const comissao = item ? item.commission : '-'
    return comissao
  }

  const handleCheckboxChange = async (isChecked: boolean) => {
    if (isChecked) {
      const dataToSend = watch('professional') || []
      let newItem = {
        name: name,
        professional_id: id,
        companies_id: selectedCompany,
        commission: commission ? undefined : 0,
        extra_hour_value: extra_hour_value,
        fixed_payment_value: fixed_payment_value,
        professional_data: professional_data,
        companies: companies,
        isCommission: commission
      }
      const updatedValues = [...dataToSend, newItem]
      setValue('professional', updatedValues)
    } else {
      const dataToSend = watch('professional') || []
      const updatedValues = dataToSend.filter(
        (item: Order) => item.professional_id !== id
      )
      setValue('professional', updatedValues)
    }
  }

  return (
    <>
      <ContainerShelf template={config.template}>
        <ContainerShelfColumn>
          <ContainerText>
            <Inputs.Check
              key={id}
              checked={watch(field)}
              onChange={(e) =>
                handleCheckboxChange(e.target?.checked)
              }
              label={name}
            />
          </ContainerText>
        </ContainerShelfColumn>
        <ContainerShelfColumn>
          <Select
            placeholder={companies?.razao_social}
            options={companies?.razao_social ? [] : userCompanies}
            onClear={() => setSelectedCompany(null)}
            value={selectedCompany}
            onSelect={(companyId: any) =>
              setSelectedCompany(companyId)
            }
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
          <Text>{calcularCommission(id)}</Text>
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
