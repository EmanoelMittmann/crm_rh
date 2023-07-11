import { ChangeEvent, useContext } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Textarea } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Inputs, Selects } from 'components/atoms'

import { Columns, Row } from '../style'

export const Period = () => {
  const { methods, projects } = useContext(Release.ExtraHour.Context)

  const { register, setValue } =
    methods as UseFormReturn<ExtraHourProps>
  return (
    <Columns>
      <Row gap='1em'>
        <Inputs.Default
          {...register('launch_date')}
          label='Inicio'
          width='23em'
          type='date'
        />
        <Inputs.Default
          {...register('end_date')}
          label='Fim'
          width='23em'
          type='date'
        />
        <Selects.Default
          {...register('project_id')}
          options={projects}
          placeholder='selecione'
          onSelect={(opts: any) => setValue('project_id', opts.value)}
          label='Projeto'
          width='30em'
        />
        <Inputs.Default
          {...register('hour_quantity')}
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
          {...register('justification')}
          placeholder='Escreva sua justificativa'
        />
      </Row>
    </Columns>
  )
}
