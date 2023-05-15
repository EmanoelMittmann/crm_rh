import { useFormContext, UseFormReturn } from 'react-hook-form'
import { Inputs, Selects } from 'components/atoms'
import { ContainerRow } from '../style'
import { FormProjectProps } from '../types'



export const Project = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors } }:
    UseFormReturn<FormProjectProps> = useFormContext();

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('name', { required: true })}
          error={errors?.name?.message}
          type='text'
          label='Nome do Projeto *'
          width='100%'
          placeholder='Informe o nome do Projeto'
        />
        <Inputs.Default
          {...register('id', { required: true })}
          error={errors.id?.message}
          width='100%'
          type='number'
          label={'ID do projeto *'}
          placeholder='ID do Projeto'
        />
        <Selects.Default
          {...register('project_type_id', { required: true })}
          onSelect={(value: any) =>
            setValue('project_type_id', value, { shouldValidate: true })
          }
          error={errors.project_type_id?.message}
          onClear={() => setValue('project_type_id', null)}
          options={watch('options.project_types')}
          label='Tipo de Projeto'
          placeholder='Selecione'
          width={235}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('date_start', { required: true })}
          error={errors.date_start?.message}
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
          {...register('date_end_performed', { required: true })}
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
            setValue('project_status_id', value, { shouldValidate: true })
          }
          onClear={() => setValue('project_status_id', null)}
          options={watch('options.status_projects')}
          error={errors.project_status_id?.message}
          label='Status do Projeto'
          placeholder='Selecione'
          width={450}
        />
        <Inputs.Default
          {...register('team_cost')}
          width='100%'
          type='number'
          label='Custo estimado'
          placeholder='R$'
        />
      </ContainerRow>
    </>
  )
}

