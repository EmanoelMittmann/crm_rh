import { ChangeEvent, useContext } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Flex, Select, Textarea } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Inputs } from 'components/atoms'

import { Row } from '../style'

export const Period = ({
  zoom,
  innerWidth
}: {
  zoom: number
  innerWidth: number
}) => {
  const { methods, projects } = useContext(Release.ExtraHour.Context)

  const { register, setValue } =
    methods as UseFormReturn<ExtraHourProps>
  return (
    <Flex flexDirection='column' width='100%' gap={16}>
      <Flex
        flexDirection='row'
        gap={16}
        width='100%'
        flexWrap={
          zoom === 125 || innerWidth <= 1361 ? 'wrap' : 'nowrap'
        }
        alignItems='flex-end'
      >
        <Inputs.Default
          {...register('launch_date')}
          label='início'
          type='date'
        />
        <Inputs.Default
          {...register('end_date')}
          label='Fim'
          type='date'
        />
        <Select
          {...register('project_id')}
          options={projects}
          placeholder='selecione'
          onSelect={(opts: any) => setValue('project_id', opts.value)}
          onClear={() => setValue('project_id', '')}
          width={
            zoom === 125 || innerWidth <= 1361 ? '100%' : '190px'
          }
          label='Projeto'
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
      </Flex>
      <Flex flexDirection='row'>
        <Textarea
          {...register('justification')}
          placeholder='Escreva sua justificativa aqui...'
          maxLength={200}
        />
      </Flex>
    </Flex>
  )
}
