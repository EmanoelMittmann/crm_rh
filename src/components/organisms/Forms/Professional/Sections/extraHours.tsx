import { useFormContext } from 'react-hook-form'

import { Radio } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'

import { KEYS, MASKER } from '../constants'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const ExtraHours = () => {
  const { register, watch, setValue } = useFormContext<FormProps>()

  const disableExtraHours =
    watch('job_type')?.value === KEYS.CONTRACT_TYPE.FREELANCER
  const showLimitSection = watch('extra_hour_activated')
  const extraHourValue =
    Number(watch('variable2')) / Number(watch('variable1')) || 0

  return (
    <>
      <ContainerRow>
        <h3>Horas Extras</h3>
      </ContainerRow>
      <ContainerRow gap='3rem'>
        <Selects.WithCheckbox
          options={[
            {
              label: 'Permitir horas extras',
              input: (
                <Radio
                  id='1'
                  onClick={() =>
                    setValue('extra_hour_activated', true)
                  }
                  checked={watch('extra_hour_activated')}
                  disabled={disableExtraHours}
                />
              ),
              active: watch('extra_hour_activated')
            },
            {
              label: 'Não permitir horas extras',
              input: (
                <Radio
                  id='2'
                  onClick={() =>
                    setValue('extra_hour_activated', false)
                  }
                  checked={!watch('extra_hour_activated')}
                  defaultChecked
                />
              ),
              active: !watch('extra_hour_activated')
            }
          ]}
        />
      </ContainerRow>
      {showLimitSection && (
        <ContainerRow gap='1rem'>
          <Inputs.Default
            {...register('variable1')}
            type='number'
            width={220}
            placeholder='Horas'
            label='Variável 1 (Divisor)'
          />
          <Inputs.Default
            {...register('variable2', {
              setValueAs: MASKER.CURRENCY
            })}
            value={watch('variable2')}
            type='number'
            iconLeft='R$'
            width={220}
            label='Variável 2 (Valor Fixo)'
          />
          <Inputs.Default
            {...register('extra_hour_value')}
            label='Valor da hora extra'
            iconLeft='R$'
            value={extraHourValue}
            bColor='white'
          />
        </ContainerRow>
      )}
    </>
  )
}
