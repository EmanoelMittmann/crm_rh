import { useContext, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Radio } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Button, Selects } from 'components/atoms'

import { Date, Period } from './Options'
import { Columns, Main, Row } from './style'

export const Hours = () => {
  const [isDate, setIsDate] = useState(true)
  const { handleSendHours, methods } = useContext(
    Release.ExtraHour.Context
  )
  const { handleSubmit, setValue } =
    methods as UseFormReturn<ExtraHourProps>
  const navigate = useNavigate()
  const InputsData = [
    {
      label: 'Por Data',
      input: (
        <Radio
          value={1}
          checked={isDate}
          onClick={() => {
            setIsDate(true)
            setValue('type', 'BY_DATE')
            setValue('end_date', '')
          }}
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
          onClick={() => {
            setIsDate(false)
            setValue('type', 'BY_PERIOD')
          }}
        />
      ),
      active: !isDate
    }
  ]

  return (
    <Main>
      <form
        onSubmit={handleSubmit((props) => {
          handleSendHours(props)
          setTimeout(() => {
            navigate('/releaseHours')
          }, 800)
        })}
      >
        <Columns>
          <Selects.WithCheckbox label='' options={InputsData} />
          <Row bottom='2em'>{isDate ? <Date /> : <Period />}</Row>
          <Row>
            <Button.Updade
              bottom='0.1em'
              onSave={() =>
                handleSubmit((props) => handleSendHours(props))
              }
              cancelButtonName='Cancelar'
              onCancel={() => navigate('/releaseHours')}
              saveButtonName='Lançar Horas'
            />
          </Row>
        </Columns>
      </form>
    </Main>
  )
}
