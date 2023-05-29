import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { mask } from 'remask'

import {
  Inputs,
  Option,
  SelectOption,
  Selects
} from 'components/atoms'
import { ButtonGeneric } from 'components/atoms/ButtonGeneric'

import { MASKER, UF_OPTIONS } from '../constants'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Company = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<FormProps>()

  return (
    <>
      <ContainerRow>
        <h3>Dados da Pessoa Jurídica</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.cnpj', {
            setValueAs: (v: string) => mask(v, MASKER.CNPJ)
          })}
          value={watch('professional_data.cnpj') ?? ''}
          width={295}
          label='CNPJ'
          error={errors.professional_data?.cnpj?.message}
          placeholder='00.000.00/0000.00'
        />
        <Inputs.Default
          {...register('professional_data.razao_social')}
          width='100%'
          value={watch('professional_data.razao_social') as any}
          label='Razão social'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.fantasy_name')}
          type='text'
          label='Nome fantasia'
          value={watch('professional_data.fantasy_name') as any}
          width='100%'
        />
        <Inputs.Default
          {...register('professional_data.company_phone_number', {
            setValueAs: (v: string) => mask(v, MASKER.TELEPHONE)
          })}
          value={
            watch('professional_data.company_phone_number') ?? ''
          }
          width={215}
          label='Telefone'
          placeholder='(00) 00000-0000'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.company_email')}
          type='email'
          label='Email'
          width='100%'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.company_cep', {
            setValueAs: (v: string) => mask(v, MASKER.CEP)
          })}
          value={watch('professional_data.company_cep') ?? ''}
          label='CEP'
          placeholder='00000-0000'
          width={137}
        />
        <Inputs.Default
          {...register('professional_data.company_street_name')}
          label='Rua'
          type='text'
          width={300}
        />
        <Inputs.Default
          {...register('professional_data.company_house_number')}
          label='Número'
          type='number'
          width={130}
          min={0}
        />
        <Inputs.Default
          {...register('professional_data.company_complement')}
          label='Complemento'
          type='text'
          width={295}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.company_neighborhood_name')}
          label='Bairro'
          width='100%'
        />
        <Inputs.Default
          {...register('professional_data.company_city_name')}
          label='Cidade'
          width='100%'
        />
        <Selects.Default
          {...register('professional_data.uf_company')}
          onSelect={(v: any) =>
            setValue('professional_data.uf_company', v)
          }
          onClear={() =>
            setValue('professional_data.uf_company', null)
          }
          placeholder='Selecione'
          options={UF_OPTIONS}
          label='Estados'
          value={watch('professional_data.uf_company') as any}
          searchable
          width={295}
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('options.payingCompanies')}
          label='Empresa Ubistart'
          options={watch('options.companies', []) as SelectOption[]}
          value={watch('options.payingCompanies') as any}
          onSelect={(v: any) => {
            setValue('options.payingCompanies', v)
          }}
          searchable
          multiSelect
          placeholder='Selecione'
        />
      </ContainerRow>
    </>
  )
}
