import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { Typography } from '@stardust-ds/react'
import { Radio } from '@stardust-ds/react'
import { Select } from '@stardust-ds/react'
import { mask } from 'remask'

import { Inputs, SelectOption, Selects } from 'components/atoms'

import { COMPANY, MASKER } from '../constants'
import { convertToTitleCase, validation } from '../logic'
import { LegalNature } from '../Objects'
import { ContainerRow } from '../style'
import { FormProps } from '../types'

export const Company = () => {
  const {
    watch,
    register,
    setValue,
    formState: { errors }
  } = useFormContext<FormProps>()

  const MatrizOptions = [
    {
      label: 'Sim',
      input: (
        <Radio
          value={1}
          checked={watch('is_matriz')}
          onClick={() => setValue('is_matriz', true)}
        />
      ),
      active: watch('is_matriz')
    },
    {
      label: 'Não',
      input: (
        <Radio
          value={0}
          checked={!watch('is_matriz')}
          onClick={() => setValue('is_matriz', false)}
        />
      ),
      active: !watch('is_matriz')
    }
  ]

  useEffect(() => {}, [watch('options')])
  return (
    <>
      <ContainerRow>
        <Typography type='h3' color='black'>
          Dados da Empresa
        </Typography>
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('cnpj', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.CPNJ)
          })}
          onChange={({ target }: any) =>
            setValue('cnpj', target.value)
          }
          value={watch('cnpj') ?? ''}
          placeholder='000.000.000/0000-00'
          error={errors.cnpj?.message}
          type=''
          label='CNPJ'
          width='100%'
          required
        />
        <Inputs.Default
          {...register('opening_date', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('opening_date', target.value)
          }
          value={watch('opening_date') ?? ''}
          label='Data de abertura'
          error={errors.opening_date?.message}
          width='100%'
          type='date'
          required
        />
        <Selects.WithCheckbox
          label='Empresa Matriz'
          options={MatrizOptions}
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('state_registration')}
          onChange={({ target }: any) =>
            setValue('state_registration', target.value)
          }
          value={watch('state_registration') ?? ''}
          label='Inscrição Estadual'
          width='100%'
        />
        <Inputs.Default
          {...register('municipal_registration')}
          onChange={({ target }: any) =>
            setValue('municipal_registration', target.value)
          }
          value={watch('municipal_registration') ?? ''}
          label='Inscrição Municipal'
          width='100%'
        />
        <Selects.Default
          {...register('size', {
            required: validation.required
          })}
          error={errors.size?.message}
          onSelect={(v: any) => setValue('size', v)}
          onClear={() => setValue('size', null)}
          value={watch('size') as any}
          options={COMPANY.SIZE}
          label='Porte'
          placeholder='Selecione'
          width={300}
          required
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('razao_social', {
            required: validation.required,
            setValueAs: (e) => convertToTitleCase(e)
          })}
          onChange={({ target }: any) =>
            setValue('razao_social', target.value)
          }
          error={errors.razao_social?.message}
          value={watch('razao_social') ?? ''}
          label='Razão Social'
          width='100%'
          required
        />
        <Inputs.Default
          {...register('fantasy_name', {
            required: validation.required,
            setValueAs: (e) => convertToTitleCase(e)
          })}
          onChange={({ target }: any) =>
            setValue('fantasy_name', target.value)
          }
          error={errors.fantasy_name?.message}
          value={watch('fantasy_name') ?? ''}
          label='Nome Fantasia'
          width='60%'
          required
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Selects.Default
          {...register('director', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('director', v)}
          onClear={() => setValue('director', null)}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          error={errors.director?.message}
          value={watch('director') as any}
          label='Assinatura'
          searchable
          width={300}
          required
        />
        <Selects.Default
          {...register('witnesses', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('witnesses.0', v)}
          onClear={() => setValue('witnesses', null)}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          error={errors.witnesses?.message}
          value={watch('witnesses.0') as any}
          label='Testemunha 1'
          searchable
          width={290}
          required
        />
        <Selects.Default
          {...register('witnesses')}
          onSelect={(v: any) => setValue('witnesses.1', v)}
          onClear={() => setValue('witnesses', [])}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          error={errors.witnesses?.message}
          value={watch('witnesses.1') as any}
          label='Testemunha 2'
          searchable
          width={290}
          required
        />
      </ContainerRow>
      <ContainerRow>
        <Selects.Default
          {...register('main_cnae', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('main_cnae', v)}
          options={watch('options.cnae') as SelectOption[]}
          error={errors.main_cnae?.message}
          value={watch('main_cnae') as any}
          label='Codigo e Descrição de Atividade Economica Principal'
          width={915}
          multiSelect
          searchable
          required
        />
      </ContainerRow>
      <ContainerRow>
        <Selects.Default
          {...register('secondary_cnae', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('secondary_cnae', v)}
          options={watch('options.cnae') as SelectOption[]}
          value={watch('secondary_cnae') as any}
          error={errors.secondary_cnae?.message}
          label='Codigo e Descrição de Atividade Economica Secundária '
          width={915}
          multiSelect
          searchable
          required
        />
      </ContainerRow>
      <ContainerRow>
        <Selects.Default
          {...register('code_and_description_of_the_legal_status', {
            required: validation.required
          })}
          onSelect={(v: any) =>
            setValue('code_and_description_of_the_legal_status', v)
          }
          onClear={() =>
            setValue('code_and_description_of_the_legal_status', null)
          }
          error={
            errors.code_and_description_of_the_legal_status?.message
          }
          value={
            watch('code_and_description_of_the_legal_status') as any
          }
          options={LegalNature}
          label='Codigo e Descrição de Natureza Juridica'
          width={915}
          required
        />
      </ContainerRow>
    </>
  )
}
