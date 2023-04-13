import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { mask } from 'remask'
import { Inputs, Selects } from 'components/atoms'
import { getMaskFromPixKeyType, validation } from '../logic'
import { BANK_OPTIONS, MASKER, KEYS } from '../constants'
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

  const pix_key_type = watch('professional_data.pix_key_type')?.value
  const pix_key_mask = getMaskFromPixKeyType(
    pix_key_type as getMaskFromTypePIXProps
  )

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
          width={292.5}
          label='Pessoa Física/Jurídica'
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
          options={watch('options.banks')}
          width={292.5}
          label='Banco'
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
          width={292.5}
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
          width={295}
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
          width={292.5}
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
          width={292.5}
          placeholder='Selecione'
        />
        <Inputs.Default
          {...register('professional_data.pix_key', {
            required: validate.pix_required,
            setValueAs: (v: string) =>
              !!pix_key_mask?.mask ? mask(v, pix_key_mask.mask) : v
          })}
          disabled={!isRequiredPixKeyType}
          value={watch('professional_data.pix_key') ?? ''}
          label='Chave PIX'
          placeholder={pix_key_mask?.placeHolder}
          type={pix_key_mask?.type}
          width={292.5}
          error={errors.professional_data?.pix_key?.message}
        />
      </ContainerRow>
    </>
  )
}
