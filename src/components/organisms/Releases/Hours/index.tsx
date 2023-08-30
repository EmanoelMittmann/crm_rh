import { useContext, useEffect, useState } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Flex, Radio } from '@stardust-ds/react'
import { Release } from 'contexts'
import { ExtraHourProps } from 'contexts/Release/ExtraHour/types'

import { Button, Selects } from 'components/atoms'

import { Date, Period } from './Options'
import { Columns, Main, Row } from './style'

export const Hours = () => {
  const [zoom, setZoom] = useState<number>(100)
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
      label: 'Por Período',
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

  useEffect(() => {
    window.addEventListener('resize', () => {
      const BOM = Math.round(window.devicePixelRatio * 100)
      setZoom(BOM)
    })
  }, [zoom])

  return (
    <Main w={zoom >= 110 ? '80%' : '70%'}>
      <form
        onSubmit={handleSubmit((props) => {
          handleSendHours(props)
        })}
      >
        <Columns>
          <Selects.WithCheckbox label='' options={InputsData} />
          <Flex bottom='2em' flexDirection='row' wrap='nowrap'>
            {isDate ? <Date zoom={zoom} /> : <Period zoom={zoom} />}
          </Flex>
          <Row>
            <Button.Updade
              bottom='.1em'
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
