import { useFormContext } from 'react-hook-form'

import { Radio } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'

import { MASKER, CONTRACT_TYPE_OPTIONS } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Contract = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue
  } = useFormContext<FormProps>()

  const options = watch('options')

  /*   const payingCompaniesIsRequired =
    watch('options.paying_companies').length > 0 */

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
          options={CONTRACT_TYPE_OPTIONS}
          label='Tipo de contrato'
          width={220}
        />
        <Inputs.Default
          {...register('weekly_hours', {
            required: validation.required
          })}
          error={errors.weekly_hours?.message}
          type='number'
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
          label='Horas/mês'
          width={210}
        />
        <Inputs.Default
          {...register('fixed_payment_value', {
            setValueAs: MASKER.CURRENCY,
            required: validation.required
          })}
          error={errors.fixed_payment_value?.message}
          value={watch('fixed_payment_value') ?? ''}
          type='number'
          min={0}
          iconLeft='R$'
          placeholder='00,00'
          label='Pagamento fixo'
        />
      </ContainerRow>
      <ContainerRow>
        <Selects.Default
          options={watch('options')?.payingCompanies}
          label='Empresa Pagadora'
          disabled={watch('options.payingCompanies', []).length === 0}
          {...register('company_id')}
          onSelect={(e: any) => setValue('company_id', e.value)}
        />
      </ContainerRow>
    </>
  )
}
