import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Radio } from '@stardust-ds/react'

import { Button, Selects } from 'components/atoms'

import { Date, Period } from './Options'
import { Columns, Main, Row } from './style'

export const Hours = () => {
  const [isDate, setIsDate] = useState(true)
  const navigate = useNavigate()
  const InputsData = [
    {
      label: 'Por Data',
      input: (
        <Radio
          value={1}
          checked={isDate}
          onClick={() => setIsDate(true)}
        />
      ),
      active: isDate
    },
    {
      label: 'Por Periodo',
      input: (
        <Radio
          value={0}
          checked={!isDate}
          onClick={() => setIsDate(false)}
        />
      ),
      active: !isDate
    }
  ]

  return (
    <Main>
      <Columns>
        <Selects.WithCheckbox label='' options={InputsData} />
        <Row bottom='2em'>{isDate ? <Date /> : <Period />}</Row>
        <Row>
          <Button.Updade
            bottom='0.1em'
            cancelButtonName='Cancelar'
            onCancel={() => navigate(-1)}
            saveButtonName='Lançar Horas'
          />
        </Row>
      </Columns>
    </Main>
  )
}
