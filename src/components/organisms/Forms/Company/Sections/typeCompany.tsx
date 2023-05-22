import { useFormContext } from 'react-hook-form'

import { Radio, Typography } from '@stardust-ds/react'

import { validation } from '../logic'
import { ColumnContainer, ContainerRow } from '../style'
import type { FormProps } from '../types'

export const TypeCompany = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
    clearErrors
  } = useFormContext<FormProps>()

  const Checked = {
    color: (Type: String) =>
      watch('type_company') === Type ? '#0066ff' : '',
    radio: (Type: string) => watch('type_company') === Type && true
  }

  return (
    <>
      <ContainerRow>
        <Typography type='h5' color='black'>
          Tipo de Empresas
        </Typography>
      </ContainerRow>
      <ContainerRow width='60%' gap='1em'>
        <ContainerRow gap='1em' align='center'>
          <Radio
            {...register('type_company', {
              required: validation.required
            })}
            onChange={({ target }: any) =>
              setValue('type_company', target.value)
            }
            value='UBISTART'
            checked={Checked.radio('UBISTART')}
          />
          <Typography
            type='p1'
            fontWeight='medium'
            color={Checked.color('UBISTART')}
          >
            Ubistart
          </Typography>
        </ContainerRow>
        <ContainerRow gap='1em' align='center'>
          <Radio
            {...register('type_company', {
              required: validation.required
            })}
            onChange={({ target }: any) =>
              setValue('type_company', target.value)
            }
            value='CLIENT'
            checked={Checked.radio('CLIENT')}
          />
          <Typography
            type='p1'
            fontWeight='medium'
            color={Checked.color('CLIENT')}
          >
            Cliente
          </Typography>
        </ContainerRow>
        <ContainerRow gap='1em' align='center'>
          <Radio
            {...register('type_company', {
              required: validation.required
            })}
            onChange={({ target }: any) =>
              setValue('type_company', target.value)
            }
            value='SUPPLIER'
            checked={Checked.radio('SUPPLIER')}
          />
          <Typography
            type='p1'
            fontWeight='medium'
            color={Checked.color('SUPPLIER')}
          >
            Fornecedor
          </Typography>
        </ContainerRow>
      </ContainerRow>
    </>
  )
}
