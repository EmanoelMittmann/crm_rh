import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Select } from '@stardust-ds/react'

import { Inputs } from 'components/atoms'
import {
  ContainerShelf,
  ContainerShelfColumn,
  Text
} from 'components/organisms/Tables/style'
import { GenerateValue } from 'components/utils/OptionsAplication'

import api from 'api'
import { routes } from 'routes'

import { ShelfProps } from '../types'
import { ContainerText } from './style'
import { CommissionItem, Order, OrderProps } from './type'

export const Shelf = ({ props, config }: ShelfProps<any>) => {
  const { setValue, watch } = useFormContext()
  const {
    name,
    id,
    companies,
    professional_data,
    extra_hour_value,
    fixed_payment_value,
    commission,
    userCompanies,
    company_id
  } = props
  const field = `professional.${id}`
  const [selectedCompany, setSelectedCompany] = useState(company_id)
  const [selectedCommission, setSelectedCommission] = useState<CommissionItem[]>([])
  
  const getCommission = async () => {
    const response = await api.get(routes.orderOfService.commission, {
      params: {
        professional_id: id,
        companies_id: selectedCompany,
        commission: 0
      }
    })
    setSelectedCommission(response.data)
    if (response.data) {
      setSelectedCommission(response.data.data[0].commission)
    } else {
      setSelectedCommission(selectedCommission)
    }
  }
  useEffect(() => {
    getCommission()
  }, [selectedCompany])

  const commissionValue: CommissionItem[] = selectedCommission.filter((item) => item.professional_id === id)
  const calcularTotal = (id: number) => {
    const item = commissionValue.find((item: any) => item.professional_id === id);
    const comissao = item ? item.commission : 0;
    const total = fixed_payment_value + comissao;
    return total;
  };


  const handleCheckboxChange = async (isChecked: boolean) => {
    if (isChecked) {
      const dataToSend = watch('professional') || []

      let newItem: {
        professional_id: number
        companies_id: number
        commission?: number
      } = {
        professional_id: id,
        companies_id: selectedCompany,
      }

      if (commission === true) {
        newItem = {
          professional_id: id,
          companies_id: selectedCompany
        }
      } else {
        newItem = {
          professional_id: id,
          companies_id: selectedCompany,
          commission: 0
        }
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

        {commissionValue.map((item) => (
          <ContainerShelfColumn>
            <Text>
              {(item.commission) ? (item.commission) : "-"}
            </Text>
          </ContainerShelfColumn>
        ))}

        <ContainerShelfColumn>
          <Text>{(extra_hour_value) ? (extra_hour_value) : "-"}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text>R$ {calcularTotal(id)}</Text>
        </ContainerShelfColumn>
      </ContainerShelf>
    </>
  )
}
