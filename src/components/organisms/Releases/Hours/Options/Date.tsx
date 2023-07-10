import { Textarea } from '@stardust-ds/react'

import { Inputs, Selects } from 'components/atoms'

import { Columns, Row } from '../style'

export const Date = () => {
  return (
    <Columns>
      <Row gap='1em'>
        <Inputs.Default label='Data' width='23em' type='date' />
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
