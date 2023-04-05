import { useFormContext } from 'react-hook-form'
import { Radio } from '@stardust-ds/react'
import { Selects } from 'components/atoms'
import { ContainerRow } from '../style'
import type { FormProps } from '../types'

export const Paper = () => {
  const { register, watch } = useFormContext<FormProps>()

  return (
    <>
      <ContainerRow>
        <h3>Função</h3>
      </ContainerRow>
      <ContainerRow gap='3rem'>
        <Selects.WithCheckbox
          options={[
            {
              label: 'Technical Leader',
              input: <Radio id='Technical Lead and Developer' {...register('function_job')} value='Technical Leader' />,
              active: watch('function_job') === 'Technical Leader',
            },
            {
              label: 'Technical Lead and Developer',
              input: (
                <Radio
                  id='Technical Lead and Developer'
                  {...register('function_job')}
                  value='Technical Lead and Developer'
                />
              ),
              active: watch('function_job') === 'Technical Lead and Developer',
            },
            {
              label: 'Developer',
              input: <Radio id='Developer' {...register('function_job')} value='Developer' />,
              active: watch('function_job') === 'Developer',
            },
          ]}
        />
      </ContainerRow>
    </>
  )
}
