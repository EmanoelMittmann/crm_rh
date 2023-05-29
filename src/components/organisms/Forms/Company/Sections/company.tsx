import { useEffect } from 'react'
import { useFormContext } from 'react-hook-form'

import { Typography } from '@stardust-ds/react'
import { Radio } from '@stardust-ds/react'
import { Select } from '@stardust-ds/react'
import { mask } from 'remask'

import { Inputs, SelectOption, Selects } from 'components/atoms'

import { COMPANY, MASKER } from '../constants'
import { validation } from '../logic'
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
          id='1'
          {...register('is_matriz', { valueAsNumber: true })}
          value={1}
        />
      ),
      active: !!Number(watch('is_matriz'))
    },
    {
      label: 'Não',
      input: (
        <Radio
          id='2'
          {...register('is_matriz', { valueAsNumber: true })}
          value={0}
          defaultChecked
        />
      ),
      active: !Number(watch('is_matriz'))
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
          error={errors.cnpj?.message}
          label='CNPJ'
          width='100%'
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
          width='100%'
        />
        <Selects.WithCheckbox
          label='Empresa Matriz'
          options={MatrizOptions}
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('state_registration', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('state_registration', target.value)
          }
          value={watch('state_registration') ?? ''}
          label='Inscrição Estadual'
          width='100%'
        />
        <Inputs.Default
          {...register('municipal_registration', {
            required: validation.required
          })}
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
          onSelect={(v: any) => setValue('size', v)}
          options={COMPANY.SIZE}
          label='Porte'
          placeholder='Selecione'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Inputs.Default
          {...register('razao_social', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('razao_social', target.value)
          }
          value={watch('razao_social') ?? ''}
          label='Razão Social'
          width='100%'
        />
        <Inputs.Default
          {...register('fantasy_name', {
            required: validation.required
          })}
          onChange={({ target }: any) =>
            setValue('fantasy_name', target.value)
          }
          value={watch('fantasy_name') ?? ''}
          label='Nome Fantasia'
          width='60%'
        />
      </ContainerRow>
      <ContainerRow gap='1em'>
        <Selects.Default
          {...register('director')}
          onSelect={(v: any) => setValue('director', v)}
          onClear={() => setValue('director', null)}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          value={watch('director') as any}
          label='Assinatura'
          searchable
          width={300}
        />
        <Selects.Default
          {...register('witnesses', {
            required: validation.required
          })}
          onSelect={(v: any) => setValue('witnesses', v)}
          onClear={() => setValue('witnesses', [])}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          value={watch('witnesses') as any}
          label='Testemunha 1'
          searchable
          width={290}
        />
        <Selects.Default
          {...register('witnesses')}
          onSelect={(v: any) => setValue('witnesses', v)}
          onClear={() => setValue('witnesses', [])}
          options={watch('options.owners') as SelectOption[]}
          placeholder='Selecione'
          value={watch('witnesses') as any}
          label='Testemunha 2'
          searchable
          width={290}
        />
      </ContainerRow>
      <ContainerRow>
        <Select
          {...register('main_cnae')}
          onSelect={(v: any) => setValue('main_cnae', v)}
          options={watch('options.cnae') as SelectOption[]}
          label='Codigo e Descrição de Atividade Econimica Principal'
          width={915}
          multiSelect
          searchable
        />
      </ContainerRow>
      <ContainerRow>
        <Select
          {...register('secondary_cnae')}
          onSelect={(v: any) => setValue('secondary_cnae', v)}
          options={watch('options.cnae') as SelectOption[]}
          label='Codigo e Descrição de Atividade Economica Secundária '
          width={915}
          multiSelect
          searchable
        />
      </ContainerRow>
      <ContainerRow>
        <Select
          {...register('code_and_description_of_the_legal_status')}
          onSelect={(v: any) =>
            setValue('code_and_description_of_the_legal_status', v)
          }
          options={LegalNature}
          label='Codigo e Descrição de Natureza Juridica'
          width={915}
        />
      </ContainerRow>
    </>
  )
}
