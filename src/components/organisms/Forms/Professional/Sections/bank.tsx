import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'

import { mask } from 'remask'

import { Inputs, Selects } from 'components/atoms'

import { BANK_OPTIONS, MASKER, KEYS } from '../constants'
import { getMaskFromPixKeyType, validation } from '../logic'
import { ContainerRow } from '../style'
import type { FormProps, getMaskFromTypePIXProps } from '../types'

export const Bank = () => {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
    clearErrors
  } = useFormContext<FormProps>()

  const isRequiredPixKeyType =
    watch('professional_data.type_of_transfer')?.value ===
    KEYS.TRANSFER_TYPE.PIX

  const validate = useMemo(() => {
    if (!isRequiredPixKeyType)
      clearErrors([
        'professional_data.pix_key',
        'professional_data.pix_key_type'
      ])
    return {
      pix_required: isRequiredPixKeyType ? validation.required : false
    }
  }, [isRequiredPixKeyType])

  useEffect(() => {
    setValue('professional_data.pix_key', '')
  }, [
    watch('professional_data.pix_key_type'),
    watch('professional_data.type_of_transfer')
  ])

  const pix_key_type = watch('professional_data.pix_key_type')?.value
  const pix_key_mask = getMaskFromPixKeyType(
    pix_key_type as getMaskFromTypePIXProps
  )
  const bank_options = watch('options.banks', [])
  return (
    <>
      <ContainerRow>
        <h3>Dados Bancários</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('professional_data.type_person', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('professional_data.type_person', value)
          }
          onClear={() =>
            setValue('professional_data.type_person', null)
          }
          error={errors.professional_data?.type_person?.message}
          options={BANK_OPTIONS.PERSON_TYPE}
          required
          width={292.5}
          label='Pessoa Física/Jurídica'
          value={watch('professional_data.type_person') as any}
          placeholder='Selecione'
        />
        <Selects.Default
          {...register('professional_data.bank', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('professional_data.bank', value)
          }
          onClear={() => setValue('professional_data.bank', null)}
          error={errors.professional_data?.bank?.message}
          options={bank_options}
          width={292.5}
          label='Banco'
          required
          value={watch('professional_data.bank') as any}
          placeholder='Selecione'
          searchable
        />
        <Selects.Default
          {...register('professional_data.account_type', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('professional_data.account_type', value)
          }
          onClear={() =>
            setValue('professional_data.account_type', null)
          }
          error={errors.professional_data?.account_type?.message}
          options={BANK_OPTIONS.ACCOUNT_TYPE}
          label='Tipo da conta'
          value={watch('professional_data.account_type') as any}
          width={292.5}
          required
          placeholder='Selecione'
        />
      </ContainerRow>
      <ContainerRow gap='1rem'>
        <Inputs.Default
          {...register('professional_data.agency', {
            required: validation.required,
            setValueAs: (v: string) => mask(v, MASKER.BANK.AGENCY)
          })}
          value={watch('professional_data.agency') ?? ''}
          error={errors.professional_data?.agency?.message}
          width='450px'
          required
          label='Agência'
        />
        <Inputs.Default
          {...register('professional_data.account_number', {
            required: validation.required,
            setValueAs: (v: string) =>
              mask(v, MASKER.BANK.ACCOUNT_NUMBER)
          })}
          value={watch('professional_data.account_number') ?? ''}
          error={errors.professional_data?.account_number?.message}
          label='Número da conta'
          required
          width='100%'
        />
      </ContainerRow>

      <ContainerRow gap='1rem'>
        <Selects.Default
          {...register('professional_data.type_of_transfer', {
            required: validation.required
          })}
          onSelect={(value: any) =>
            setValue('professional_data.type_of_transfer', value)
          }
          onClear={() =>
            setValue('professional_data.type_of_transfer', null)
          }
          error={errors.professional_data?.type_of_transfer?.message}
          options={BANK_OPTIONS.TRANSFER_TYPE}
          label='Tipo de transferência'
          value={watch('professional_data.type_of_transfer') as any}
          width='300px'
          required
          placeholder='Selecione'
        />
        <Selects.Default
          {...register('professional_data.pix_key_type', {
            required: validate.pix_required
          })}
          disabled={!isRequiredPixKeyType}
          onSelect={(value: any) =>
            setValue('professional_data.pix_key_type', value)
          }
          onClear={() =>
            setValue('professional_data.pix_key_type', null)
          }
          error={errors.professional_data?.pix_key_type?.message}
          options={BANK_OPTIONS.PIX_KEY_TYPE}
          label='Tipo de chave PIX'
          width='300px'
          required={isRequiredPixKeyType}
          value={watch('professional_data.pix_key_type') as any}
          placeholder='Selecione'
        />
        <Inputs.Default
          {...register('professional_data.pix_key', {
            required: validate.pix_required,
            setValueAs: (v: string) =>
              !!pix_key_mask?.mask ? mask(v, pix_key_mask.mask) : v
          })}
          disabled={!isRequiredPixKeyType}
          required={isRequiredPixKeyType}
          value={watch('professional_data.pix_key') ?? ''}
          label='Chave PIX'
          placeholder={pix_key_mask?.placeHolder}
          type={pix_key_mask?.type}
          width='300px'
          height={40}
          error={errors.professional_data?.pix_key?.message}
        />
      </ContainerRow>
    </>
  )
}
