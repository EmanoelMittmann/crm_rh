import { useFormContext } from 'react-hook-form'
import { mask } from 'remask'
import { Inputs, Selects } from 'components/atoms'
import { validation } from '../logic'
import { MASKER, TODAY, UF_OPTIONS } from '../constants'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Personal = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormProps>()

  return (
    <>
      <ContainerRow>
        <h3>Dados Pessoais</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('name', { required: validation.required })}
          error={errors.name?.message}
          width='100%'
          type='text'
          label='Nome do profissional'
        />
        <Inputs.Default
          {...register('email', { required: validation.required })}
          error={errors.email?.message}
          type='email'
          label='Email pessoal'
          placeholder='email@email.com'
          width={445}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('birth_date', { required: validation.required })}
          error={errors.birth_date?.message}
          type='date'
          label='Data de nascimento'
          max={TODAY}
        />
        <Inputs.Default
          {...register('cpf', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CPF),
            validate: (v) => validation.min(Number(v), 11, 'CPF inválido'),
          })}
          error={errors.cpf?.message}
          value={watch('cpf') ?? ''}
          width='100%'
          label='CPF'
          placeholder='000.000.000-00'
        />
        <Inputs.Default
          {...register('rg', { required: validation.required })}
          error={errors.rg?.message}
          width='100%'
          type='number'
          min={0}
          label='RG'
          placeholder='000000000'
        />
        <Inputs.Default
          {...register('telephone_number', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.TELEPHONE),
          })}
          error={errors.telephone_number?.message}
          value={watch('telephone_number') ?? ''}
          width='100%'
          label='Telefone'
          placeholder='(00) 00000-0000'
        />
      </ContainerRow>

      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('cep', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CEP),
          })}
          error={errors.cep?.message}
          value={watch('cep') ?? ''}
          label='CEP'
          placeholder='00000-0000'
          width={137}
        />
        <Inputs.Default
          {...register('street_name', { required: validation.required })}
          error={errors.street_name?.message}
          label='Rua'
          type='text'
          width={300}
        />
        <Inputs.Default
          {...register('house_number', { required: validation.required })}
          error={errors.house_number?.message}
          label='Número'
          type='number'
          width={130}
          min={0}
        />
        <Inputs.Default
          {...register('complement')}
          error={errors.complement?.message}
          label='Complemento'
          type='text'
          width={295}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('neighbourhood_name', { required: validation.required })}
          error={errors.neighbourhood_name?.message}
          label='Bairro'
          width='100%'
        />
        <Inputs.Default
          {...register('city_name', { required: validation.required })}
          error={errors.city_name?.message}
          label='Cidade'
          width='100%'
        />

        <Selects.Default
          {...register('uf', {
            required: validation.required,
          })}
          value={watch('uf') as any}
          onSelect={(v: any) => setValue('uf', v)}
          onClear={() => setValue('uf', null)}
          error={errors.uf?.message}
          placeholder='Selecione'
          options={UF_OPTIONS}
          label='Estados'
          searchable
          width={295}
        />
      </ContainerRow>
    </>
  )
}
