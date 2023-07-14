import { ChangeEvent, useContext } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Textarea } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Inputs, Selects } from 'components/atoms'

import { Columns, Row } from '../style'

export const Date = () => {
  const { methods, projects } = useContext(Release.ExtraHour.Context)

  const { register, formState, setValue } =
    methods as UseFormReturn<ExtraHourProps>

  return (
    <Columns>
      <Row gap='1em'>
        <Inputs.Default
          {...register('launch_date', {
            required: 'Campo Obrigatorio'
          })}
          error={formState.errors.launch_date?.message}
          label='Data'
          width='23em'
          type='date'
        />
        <Selects.Default
          {...register('project_id', {
            required: 'Campo Obrigatorio'
          })}
          options={projects}
          onSelect={(opts: any) => setValue('project_id', opts.value)}
          onClear={() => setValue('project_id', '')}
          placeholder='selecione'
          label='Projeto'
          width='30em'
        />
        <Inputs.Default
          {...register('hour_quantity', {
            required: 'Campo Obrigatorio'
          })}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setValue('hour_quantity', Number(e.target.value))
          }
          label='Quantidade de Horas'
          placeholder='Horas'
          type='number'
        />
      </Row>
      <Row>
        <Textarea
          {...register('justification', {
            required: 'Campo Obrigatorio'
          })}
          placeholder='Escreva sua justificativa'
        />
      </Row>
    </Columns>
  )
}
