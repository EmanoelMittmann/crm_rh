import { Select } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'
import {
  ContainerShelf, 
  ContainerShelfColumn, 
  Text
} from 'components/organisms/Tables/style'
import { GenerateValue } from 'components/utils/OptionsAplication'
import { useFormContext } from 'react-hook-form'
import { ShelfProps } from '../types'
import { ContainerText} from './style'

export const Shelf = ({ props, config }: ShelfProps<any>) => {
  const { setValue, watch } = useFormContext()
  const {
    name,
    id,
    companies,
    professional_data,
    cnpj,
    extra_hour_value,
    fixed_payment_value,
    commission, 
    userCompanies,
    company_id,


  } = props
const field = `professional.${id}`

  return (
    <ContainerShelf template={config.template}>
      <ContainerShelfColumn>
        <ContainerText>
          <Inputs.Check
            key={id}
            checked={watch(field) === true}
            onChange={(e) => setValue(field, e.target?.checked)}
            label={name}
          />
        </ContainerText>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Select
          placeholder={companies?.razao_social}
          options={userCompanies}
         value={company_id}
          onSelect={() => {} } 
          width={190}

        />
      </ContainerShelfColumn>
    <ContainerShelfColumn>
      <Text>
        {professional_data?.cnpj}
      </Text>
    </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>
          R$ {GenerateValue(String(fixed_payment_value))}
        </Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn>
        <Text>
        {GenerateValue(String(commission))}
        </Text>
      </ContainerShelfColumn>

      <ContainerShelfColumn>
        <Text>
          {GenerateValue(String(extra_hour_value))}
        </Text>
      </ContainerShelfColumn>
      <ContainerShelfColumn>
        <Text>
          R$ 0,00
        </Text>
      </ContainerShelfColumn>

    </ContainerShelf>

  )
}
