import React from 'react'

import { Textarea } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'

import { Columns, Row } from '../style'

export const Period = () => {
  return (
    <Columns>
      <Row gap='1em'>
        <Inputs.Default label='Inicio' width='23em' type='date' />
        <Inputs.Default label='Fim' width='23em' type='date' />
        <Selects.Default
          options={[]}
          placeholder='selecione'
          label='Projeto'
          width='30em'
        />
        <Inputs.Default
          label='Quantidade de Horas'
          placeholder='Horas'
          type='number'
        />
      </Row>
      <Row>
        <Textarea />
      </Row>
    </Columns>
  )
}
