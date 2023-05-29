import { useFormContext } from 'react-hook-form'

import { Inputs, Selects } from 'components/atoms'

import { COMPANY } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import { FormProps } from '../types'

export const Cadastration = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue
  } = useFormContext<FormProps>()
  return (
    <>
      <ContainerRow gap='1em' align='center'>
        <Selects.Default
          {...register('registration_status', {
            required: validation.required
          })}
          onChange={(v: any) => setValue('registration_status', v)}
          onClear={() => setValue('registration_status', null)}
          value={watch('registration_status') as any}
          error={errors.registration_status?.message}
          options={COMPANY.CADASTRATION}
          placeholder='Selecione'
          label='Situação cadastral'
        />
        <Inputs.Default
          {...register('date_of_registration_status', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('date_of_registration_status', target.value)
          }
          value={watch('date_of_registration_status') ?? ''}
          error={errors.date_of_registration_status?.message}
          label='Data da situação cadastral'
          type='date'
        />
        <Inputs.Default
          {...register('reason_for_registration_status')}
          onChange={({ target }: any) =>
            setValue('reason_for_registration_status', target.value)
          }
          value={watch('reason_for_registration_status') ?? ''}
          error={errors.reason_for_registration_status?.message}
          label='Motivo da situação cadastral'
        />
      </ContainerRow>
      <ContainerRow>
        <Inputs.Default
          {...register('responsible_federative_entity')}
          onChange={({ target }: any) =>
            setValue('responsible_federative_entity', target.value)
          }
          value={watch('responsible_federative_entity') ?? ''}
          label='Ente federativo responsavel'
          width='100%'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('special_situation')}
          value={watch('special_situation') ?? ''}
          onChange={({ target }: any) =>
            setValue('special_situation', target.value)
          }
          error={errors.special_situation?.message}
          label='Situação Especial'
        />
        <Inputs.Default
          {...register('date_of_special_situation')}
          value={watch('date_of_special_situation') ?? ''}
          onChange={({ target }: any) =>
            setValue('date_of_special_situation', target.value)
          }
          label='Data da situação especial'
          width='30%'
          type='date'
        />
      </ContainerRow>
    </>
  )
}
