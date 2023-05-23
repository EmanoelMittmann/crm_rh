import { useFormContext } from 'react-hook-form'

import { Typography } from '@stardust-ds/react'
import { mask } from 'remask'

import { Inputs, SelectOption, Selects } from 'components/atoms'

import { MASKER } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import { FormProps } from '../types'

export const Address = () => {
  const {
    watch,
    setValue,
    formState: { errors },
    register
  } = useFormContext<FormProps>()

  return (
    <>
      <ContainerRow>
        <Typography type='h3' color='black'>
          Endereço e Contato
        </Typography>
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('cep', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CEP)
          })}
          onChange={({ target }: any) =>
            setValue('cep', target.value)
          }
          value={watch('cep') ?? ''}
          error={errors.cep?.message}
          label='CEP'
          width={290}
        />
        <Inputs.Default
          {...register('street_name', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('street_name', target.value)
          }
          value={watch('street_name') ?? ''}
          error={errors.street_name?.message}
          label='Rua'
          width={'50%'}
        />
        <Inputs.Default
          {...register('house_number', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('house_number', target.value)
          }
          value={watch('house_number') ?? ''}
          error={errors.street_name?.message}
          label='Numero'
          width={500}
        />
        <Inputs.Default
          {...register('complement', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('complement', target.value)
          }
          value={watch('complement') ?? ''}
          error={errors.street_name?.message}
          label='Complemento'
          width={'30%'}
        />
      </ContainerRow>
      <ContainerRow gap='1em' align='center'>
        <Inputs.Default
          {...register('neighborhood_name', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('neighborhood_name', target.value)
          }
          value={watch('neighborhood_name') ?? ''}
          error={errors.neighborhood_name?.message}
          label={'Bairro'}
        />
        <Inputs.Default
          {...register('city_name', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('city_name', target.value)
          }
          value={watch('city_name') ?? ''}
          error={errors.neighborhood_name?.message}
          label={'Cidade'}
        />
        <Selects.Default
          {...register('uf', {
            required: validation.required
          })}
          onChange={(v: any) => setValue('uf', v.value)}
          options={watch('options.uf') as SelectOption[]}
          label='Estado'
          searchable
          width={300}
          placeholder='Selecione'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('phone_number', {
            required: validation.required,
            setValueAs: (v: any) => mask(v, MASKER.TELEPHONE)
          })}
          error={errors.phone_number?.message}
          value={watch('phone_number') ?? ''}
          label={'Telefone'}
          placeholder='(00) 00000-0000'
        />
        <Inputs.Default
          {...register('main_email', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('main_email', target.value)
          }
          value={watch('main_email') ?? ''}
          error={errors.main_email?.message}
          label={'Email principal'}
          placeholder={'email@email.com'}
        />
        <Inputs.Default
          {...register('secondary_email', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('secondary_email', target.value)
          }
          value={watch('secondary_email') ?? ''}
          error={errors.secondary_email?.message}
          label={'Email secundário'}
          placeholder={'email@email.com'}
        />
      </ContainerRow>
    </>
  )
}
