import { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Select, toast } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'
import {
  IHandleModalPropsCommission,
  Modal
} from 'components/molecules/Modais'
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
  const [selectedCommission, setSelectedCommission] = useState('0')
  const [thereIsCommission, setThereIsCommission] =
    useState(commission)
  const [nameuser, setNameUser] = useState<string>(name)

  const modalRef = useRef<IHandleModalPropsCommission>(null)

  const handleOpenModal = () => {
    if (modalRef.current) {
      modalRef.current.open(
        id,
        name,
        selectedCompany,
        selectedCommission
      )
    }
  }

  async function handleCommission(
    id: number,
    name: string,
    company_id: string,
    commission: string
  ) {
    setSelectedCompany(company_id)
    setSelectedCommission(commission)
    setNameUser(name)
  }

  const handleCheckboxChange = async (isChecked: boolean) => {
    if (isChecked) {
      const dataToSend = watch('professional') || []
      // console.log('dataToSend: ', dataToSend);

      // const newIDataToSend = {
      //   professional_id: id,
      //   commission: thereIsCommission ? '1' : '0',
      //   companies_id: selectedCompany
      // }
      const newIDataToSend = {
        professional_id: id,
        commission: Number(thereIsCommission),
        companies_id: selectedCompany
      }

      const updatedValues = [...dataToSend, newIDataToSend]
      
      console.log('updatedValues: ', updatedValues);

      const hasCommission = updatedValues.some(
        (item) => item.commission === '1'
      )

      setValue('professional', updatedValues)

      if (hasCommission) {
        handleOpenModal()
      }
    } else {
      setValue(field, false)
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
          <Text>R$ {GenerateValue(String(fixed_payment_value))}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text>{GenerateValue(String(commission))}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text>{GenerateValue(String(extra_hour_value))}</Text>
        </ContainerShelfColumn>

        <ContainerShelfColumn>
          <Text>R$ 0,00</Text>
        </ContainerShelfColumn>

        {/* <Text>
          <button onClick={handleOpenModal}>Abrir</button>
        </Text> */}
      </ContainerShelf>

      <Modal.Commission
        ref={modalRef}
        placeholder='Confirmar Profissionais'
        text='Confirmar Profissionais'
        EventOne={handleCommission}
        commission={selectedCommission}
      />
    </>
  )
}
