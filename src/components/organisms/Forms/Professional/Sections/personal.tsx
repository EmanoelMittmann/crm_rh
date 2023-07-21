import { ChangeEvent, InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

import { mask } from 'remask'

import { Inputs, Selects } from 'components/atoms'

import { MASKER, TODAY, UF_OPTIONS } from '../constants'
import { validation } from '../logic'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Personal = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<FormProps>()

  const { house_number } = watch()
  return (
    <>
      <ContainerRow>
        <h3>Dados Pessoais</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('name', { required: validation.required })}
          error={errors.name?.message}
          required
          width='100%'
          type='text'
          label='Nome do profissional'
        />
        <Inputs.Default
          {...register('email', { required: validation.required })}
          error={errors.email?.message}
          required
          type='email'
          label='Email pessoal'
          placeholder='email@email.com'
          width='445px'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('birth_date', {
            required: validation.required
          })}
          error={errors.birth_date?.message}
          required
          type='date'
          label='Data de nascimento'
          value={watch('birth_date') as any}
          max={TODAY}
        />
        <Inputs.Default
          {...register('cpf', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CPF),
            validate: (v) =>
              validation.min(Number(v), 11, 'CPF inválido')
          })}
          required
          error={errors.cpf?.message}
          value={watch('cpf') ?? ''}
          width='100%'
          label='CPF'
          placeholder='000.000.000-00'
        />
        <Inputs.Default
          {...register('rg', { required: validation.required })}
          error={errors.rg?.message}
          required
          width='100%'
          type='number'
          min={0}
          label='RG'
          placeholder='000000000'
        />
        <Inputs.Default
          {...register('telephone_number', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.TELEPHONE)
          })}
          error={errors.telephone_number?.message}
          value={watch('telephone_number') ?? ''}
          required
          width='100%'
          label='Telefone'
          placeholder='(00) 00000-0000'
        />
      </ContainerRow>

      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('cep', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CEP)
          })}
          error={errors.cep?.message}
          required
          value={watch('cep') ?? ''}
          label='CEP'
          maxLength={9}
          placeholder='00000-0000'
          width='350px'
        />
        <Inputs.Default
          {...register('street_name', {
            required: validation.required
          })}
          error={errors.street_name?.message}
          label='Rua'
          type='text'
          required
        />
        <Inputs.Default
          {...register('house_number', {
            required: validation.required
          })}
          error={
            errors.house_number?.message || house_number < 0
              ? 'Valores Invalidos'
              : undefined
          }
          label='Número'
          type='number'
          required
          width='300px'
          min={0}
        />
        <Inputs.Default
          {...register('complement')}
          error={errors.complement?.message}
          label='Complemento'
          type='text'
          width='300px'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('neighbourhood_name', {
            required: validation.required
          })}
          error={errors.neighbourhood_name?.message}
          label='Bairro'
          required
          width='100%'
        />
        <Inputs.Default
          {...register('city_name', {
            required: validation.required
          })}
          error={errors.city_name?.message}
          label='Cidade'
          required
          width='100%'
        />

        <Selects.Default
          {...register('uf', {
            required: validation.required
          })}
          value={watch('uf') as any}
          onSelect={(v: any) => setValue('uf', v)}
          onClear={() => setValue('uf', null)}
          error={errors.uf?.message}
          placeholder='Selecione'
          required
          options={UF_OPTIONS}
          label='Estado'
          searchable
          width={295}
        />
      </ContainerRow>
    </>
  )
}
