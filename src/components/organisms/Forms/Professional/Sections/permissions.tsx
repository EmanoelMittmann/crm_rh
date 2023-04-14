import { useFormContext } from 'react-hook-form'

import { Typography } from '@stardust-ds/react'

import { Inputs } from 'components/atoms'

import {
  ColumnContainer,
  ContainerRow,
  GridContainer
} from '../style'

export const Permission = () => {
  const { setValue, watch } = useFormContext()
  const inputs = watch('options.permissions') ?? []

  return (
    <>
      <ContainerRow gap='1rem'>
        <h3>Permissões</h3>
      </ContainerRow>
      <ContainerRow gap='3rem'>
        <GridContainer>
          <Typography type='l3'>Especiais</Typography>
        </GridContainer>
        <Typography type='l3'>Gerais</Typography>
      </ContainerRow>
      <ContainerRow gap='3rem' align='flex-start'>
        <GridContainer>
          {inputs.map(({ modulo_name, id, group_name }: any) => {
            const field = `permissions.${id}`

            if (group_name === 'SPECIAL')
              return (
                <Inputs.Check
                  key={id}
                  checked={watch(field) === true}
                  onChange={(e) => setValue(field, e.target?.checked)}
                  label={modulo_name}
                />
              )
          })}
        </GridContainer>
        <ColumnContainer>
          {inputs.map(({ modulo_name, id, group_name }: any) => {
            const field = `permissions.${id}`

            if (group_name === 'GENERAL')
              return (
                <Inputs.Check
                  key={id}
                  checked={watch(field) === true}
                  onChange={(e) =>
                    setValue('field', e.target?.checked)
                  }
                  label={modulo_name}
                />
              )
          })}
        </ColumnContainer>
      </ContainerRow>
    </>
  )
}
