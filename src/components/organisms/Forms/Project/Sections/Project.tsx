import { useFormContext } from 'react-hook-form'

import { Inputs, Selects } from 'components/atoms'

import { validation } from '../logic'
import { ContainerRow } from '../style'
import { FormProjectProps } from '../types'

export const Project = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<FormProjectProps>()

  const options = watch('options')

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('name', { required: validation.required })}
          error={errors.name?.message}
          width='100%'
          type='text'
          label='Nome do Projeto'
          placeholder='Informe o nome do Projeto'
        />
        <Inputs.Default
          {...register('name', { required: validation.required })}
          error={errors.id?.message}
          width='100%'
          type='text'
          label='ID do projeto'
          placeholder='ID do Projeto'
        />
        <Selects.Default
          {...register('project_type', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('project_type', value, { shouldValidate: true })
          }
          onClear={() => setValue('project_type.name', null)}
          options={options?.project_types}
          error={errors.project_type?.message}
          label='Tipo de Projeto'
          placeholder='Selecione'
          width={235}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('date_start', {
            required: validation.required
          })}
          error={errors.date_start?.message}
          type='date'
          label='Inicio efetivo'
          width='100%'
        />
        <Inputs.Default
          {...register('date_end', {
            required: validation.required
          })}
          error={errors.date_end?.message}
          type='date'
          label='Final efetivo'
          width='100%'
        />
        <Inputs.Default
          {...register('date_start_performed', {
            required: validation.required
          })}
          error={errors.date_start_performed?.message}
          type='date'
          label='Incio do contrato'
          width='100%'
        />
        <Inputs.Default
          {...register('date_end_performed', {
            required: validation.required
          })}
          error={errors.date_end_performed?.message}
          type='date'
          label='Final do contrato'
          width='100%'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('status', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('status', value, { shouldValidate: true })
          }
          onClear={() => setValue('status.name', null)}
          options={options?.status_projects}
          error={errors.status?.message}
          label='Status do Projeto'
          placeholder='Selecione'
          width={450}
        />
        <Inputs.Default
          {...register('team_cost', {
            required: validation.required
          })}
          error={errors.team_cost?.message}
          width='100%'
          type='number'
          label='Custo estimado'
          placeholder='R$'
        />
      </ContainerRow>
    </>
  )
}
