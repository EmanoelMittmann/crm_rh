import { useFormContext, UseFormReturn } from 'react-hook-form'

import { Inputs, Selects, SelectOption } from 'components/atoms'
import { GenerateCurrencyMask } from 'components/utils/OptionsAplication'

import { ContainerRow } from '../style'
import { FormProjectProps } from '../types'

export const Project = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  }: UseFormReturn<FormProjectProps> = useFormContext()

  const options = watch('options')
  const estimatedCost = watch('team_cost')
  const formattedEstimatedCost = GenerateCurrencyMask(
    estimatedCost || ''
  )

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('name', { required: true })}
          error={errors?.name?.message}
          required
          type='text'
          label='Nome do Projeto'
          width='100%'
          placeholder='Informe o nome do Projeto'
        />
        <Inputs.Default
          {...register('id', { required: true })}
          error={errors.id?.message}
          required
          width='100%'
          type='number'
          label='ID do projeto'
          placeholder='ID do Projeto'
        />
        <Selects.Default
          {...register('project_type_id', { required: true })}
          onSelect={(value: any) =>
            setValue('project_type_id', value, {
              shouldValidate: true
            })
          }
          error={errors.project_type_id?.message}
          required
          onClear={() => setValue('project_type_id', null)}
          options={options?.project_types as SelectOption[]}
          value={watch('project_type_id') as any}
          label='Tipo de Projeto'
          placeholder='Selecione'
          width={235}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('date_start', { required: true })}
          error={errors.date_start?.message}
          value={watch('date_start')}
          type='date'
          label='Inicio efetivo'
          width='100%'
        />
        <Inputs.Default
          {...register('date_end', { required: true })}
          error={errors.date_end?.message}
          type='date'
          label='Final efetivo'
          width='100%'
        />
        <Inputs.Default
          {...register('date_start_performed', { required: true })}
          error={errors.date_start_performed?.message}
          type='date'
          label='Incio do contrato'
          width='100%'
        />
        <Inputs.Default
          {...register('date_end_performed')}
          error={errors.date_end_performed?.message}
          type='date'
          label='Final do contrato'
          width='100%'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('project_status_id', { required: true })}
          onSelect={(value: any) =>
            setValue('project_status_id', value, {
              shouldValidate: true
            })
          }
          onClear={() => setValue('project_status_id', null)}
          options={options?.status_projects as SelectOption[]}
          value={watch('project_status_id') as any}
          error={errors.project_status_id?.message}
          required
          label='Status do Projeto'
          placeholder='Selecione'
          width={450}
        />
        <Inputs.Default
          {...register('team_cost', {
            setValueAs: (value) => {
              return value ? value.replace(/[^\d]/g, '') : ''
            }
          })}
          width='100%'
          type='text'
          value={formattedEstimatedCost}
          iconLeft='R$'
          placeholder='00,00'
          label='Custo estimado'
        />
      </ContainerRow>
    </>
  )
}
