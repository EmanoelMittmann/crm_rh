import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { Radio, Select } from '@stardust-ds/react'


import { Inputs, SelectOption, Selects } from 'components/atoms'
import {
  generateOpitionsFromBackend,
  GenerateValue
} from 'components/utils/OptionsAplication'

import { MASKER, CONTRACT_TYPE_OPTIONS } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import type { FormProps, SelectOption } from '../types'

export const Contract = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue
  } = useFormContext<FormProps>()
  const Company = useMemo(() => {
    const value = generateOpitionsFromBackend(
      watch('company_id'),
      watch('options.companies', [])
    )
    if (value) return value
  }, [watch('company_id')])

  const options = watch('options')
  const paymentFixed = watch('fixed_payment_value')
  const formattedpaymentFixed = GenerateValue(paymentFixed || '')

  const commissionOptions = [
    {
      label: 'Sim',
      input: (
        <Radio
          id='1'
          {...register('commission', { valueAsNumber: true })}
          value={1}
        />
      ),
      active: !!Number(watch('commission'))
    },
    {
      label: 'Não',
      input: (
        <Radio
          id='2'
          {...register('commission', { valueAsNumber: true })}
          value={0}
          defaultChecked
        />
      ),
      active: !Number(watch('commission'))
    }
  ]

  return (
    <>
      <ContainerRow>
        <h3>Contrato de Trabalho</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('start_date', {
            required: validation.required
          })}
          error={errors.start_date?.message}
          type='date'
          label='Data de inicio'
          required
          width={220}
        />
        <Selects.Default
          {...register('job_id', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('job_id', value, { shouldValidate: true })
          }
          onClear={() => setValue('job_id', null)}
          error={errors.professional_data?.type_person?.message}
          options={options?.jobs}
          label='Cargo'
          required
          value={watch('job_id') as any}
          placeholder='Selecione'
          width={435}
        />
        <Selects.WithCheckbox
          label='Comissão'
          options={commissionOptions}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('job_type', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('job_type', value, { shouldValidate: true })
          }
          onClear={() => setValue('job_type', null)}
          error={errors.job_type?.message}
          required
          options={CONTRACT_TYPE_OPTIONS}
          value={watch('job_type') as any}
          label='Tipo de contrato'
          width={220}
        />
        <Inputs.Default
          {...register('weekly_hours', {
            required: validation.required
          })}
          error={errors.weekly_hours?.message}
          type='number'
          required
          min={0}
          label='Horas/semana'
          width={210}
        />
        <Inputs.Default
          {...register('mounth_hours', {
            required: validation.required
          })}
          error={errors.mounth_hours?.message}
          type='number'
          min={0}
          required
          label='Horas/mês'
          width={210}
        />
        <Inputs.Default
          {...register('fixed_payment_value', {
            setValueAs: (value) => {
              return value ? value.replace(/[^\d]/g, '') : ''
            },
            required: validation.required
          })}
          error={errors.fixed_payment_value?.message}
          value={formattedpaymentFixed}
          type='text'
          iconLeft='R$'
          placeholder='00,00'
          label='Pagamento fixo'
        />
      </ContainerRow>
      <ContainerRow>
        <Selects.Default
          {...register('options.payingCompany')}
          label='Empresa Pagadora'
          // disabled={!options.payingCompanies?.length} // [] Iniciando a edição ele fica bloqueado, apenas fazendo uma ação dentro do form ele desbloquea
          options={options.companies} //Olhar com Calma a questao do PayingCompany chegar aqui undefined
          onSelect={(e: any) => setValue('company_id', e.value)}
          clearable={false}
          value={Company as any}
        />
      </ContainerRow>
    </>
  )
}
