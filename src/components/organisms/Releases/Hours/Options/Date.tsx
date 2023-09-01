import { ChangeEvent, useContext } from 'react'
import { UseFormReturn } from 'react-hook-form'

import { Flex, Select, Textarea } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Inputs } from 'components/atoms'

export const Date = ({
  zoom,
  innerWidth
}: {
  zoom: number
  innerWidth: number
}) => {
  const { methods, projects } = useContext(Release.ExtraHour.Context)

  const { register, formState, setValue } =
    methods as UseFormReturn<ExtraHourProps>

  return (
    <Flex flexDirection='column' width='100%' gap={16}>
      <Flex
        gap={16}
        flexDirection='row'
        width='100%'
        flexWrap={
          zoom === 125 || innerWidth <= 1130 ? 'wrap' : 'nowrap'
        }
        alignItems='flex-end'
      >
        <Inputs.Default
          {...register('launch_date', {
            required: 'Campo Obrigatorio'
          })}
          error={formState.errors.launch_date?.message}
          label='Data'
          type='date'
        />
        <Select
          {...register('project_id', {
            required: 'Campo Obrigatorio'
          })}
          options={projects}
          onSelect={(opts: any) => setValue('project_id', opts.value)}
          onClear={() => setValue('project_id', '')}
          placeholder='selecione'
          label='Projeto'
          width={
            zoom === 125 || innerWidth <= 1130 ? '100%' : '190px'
          }
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
      </Flex>
      <Flex flexDirection='row'>
        <Textarea
          {...register('justification', {
            required: 'Campo Obrigatorio'
          })}
          placeholder='Escreva sua justificativa aqui...'
          required
          maxLength={200}
        />
      </Flex>
    </Flex>
  )
}
