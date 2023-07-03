import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Select } from '@stardust-ds/react'
import { List } from 'contexts'

import { Inputs } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'

import { ShelfProps } from '../types'
import { ContainerText } from './style'
import { Order } from './type'
export const Shelf = ({ props, config }: ShelfProps<any>) => {
  const { setValue, watch } = useFormContext()

  const { setSelectSendProfessionals, setProfessionalOS } =
    useContext(List.OrderOfServiceprofessionalOS.Context)

  const {
    name,
    id,
    companies,
    professional_data,
    extra_hour_value,
    fixed_payment_value,
    userCompanies,
    commission,
    commissionHave,
    company_id
  } = props
  const field = `professional.${id}`
  const [selectedCompany, setSelectedCompany] = useState(company_id)

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
            options={userCompanies}
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
          <Text>{commissionHave || '-'}</Text>
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
