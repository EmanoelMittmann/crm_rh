import React from 'react'
import { useFormContext } from 'react-hook-form'

import { Typography } from '@stardust-ds/react'
import { mask } from 'remask'

import { Inputs, SelectOption, Selects } from 'components/atoms'

import { BANK_OPTIONS, KEYS, MASKER } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import { FormProps } from '../types'

export const Bank = () => {
  const {
    watch,
    setValue,
    register,
    formState: { errors }
  } = useFormContext<FormProps>()
  return (
    <>
      <ContainerRow>
        <Typography type='h3' color='black'>
          Dados Bancários
        </Typography>
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('agency', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.BANK.AGENCY)
          })}
          onChange={({ target }: any) =>
            setValue('agency', target.value)
          }
          value={watch('agency') ?? ''}
          error={errors.agency?.message}
          width='50%'
          label='Agencia'
        />
        <Inputs.Default
          {...register('account_number', {
            required: validation.required,
            setValueAs: (v: string) =>
              mask(v, MASKER.BANK.ACCOUNT_NUMBER)
          })}
          onChange={({ target }: any) =>
            setValue('account_number', target.value)
          }
          value={watch('account_number') ?? ''}
          error={errors.agency?.message}
          width='100%'
          label='Número de conta'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Selects.Default
          {...register('bank', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('bank', v.value)}
          options={watch('options.banks') as SelectOption[]}
          label='Banco'
          placeholder='Selecione'
          width={500}
          searchable
        />
        <Selects.Default
          {...register('account_type', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('account_type', v.value)}
          options={BANK_OPTIONS.TYPE_ACCOUNT}
          label='Tipo de Conta'
          placeholder='Selecione'
          width={393}
        />
      </ContainerRow>
    </>
  )
}
