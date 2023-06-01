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
            setValueAs: (v: string) => mask(v, MASKER.BANK.AGENCY)
          })}
          onChange={({ target }: any) =>
            setValue('agency', target.value)
          }
          value={watch('agency') ?? ''}
          error={errors.agency?.message}
          width='50%'
          label='Agencia'
          placeholder='0000-0'
        />
        <Inputs.Default
          {...register('account_number', {
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
          placeholder='0000000000-0'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Selects.Default
          onSelect={(v: any) => setValue('bank', v)}
          onClear={() => setValue('bank', null)}
          options={watch('options.banks') as SelectOption[]}
          value={watch('bank') as any}
          label='Banco'
          error={errors.bank?.message}
          placeholder='Selecione'
          width={500}
          searchable
        />
        <Selects.Default
          onSelect={(v: any) => setValue('account_type', v)}
          onClear={() => setValue('account_type', null)}
          options={BANK_OPTIONS.TYPE_ACCOUNT}
          value={watch('account_type') as any}
          error={errors.account_type?.message}
          label='Tipo de Conta'
          placeholder='Selecione'
          width={393}
        />
      </ContainerRow>
    </>
  )
}
