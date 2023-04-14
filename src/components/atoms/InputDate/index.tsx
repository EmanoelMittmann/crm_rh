import { useState } from 'react'

import { IInputsPropsDate } from '../../../react-app-env'
import { InputDefault, InputLine, StylePlaceholder } from './style'

export const InputDate = ({
  value,
  label,
  placeholder,
  margin,
  disabled,
  width
}: IInputsPropsDate) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)

  return (
    <InputLine width={width ? width : '260px'} margin={margin}>
      {!onFocus && value !== '' && (
        <StylePlaceholder>{placeholder}</StylePlaceholder>
      )}
      <InputDefault
        displayDate={onFocus || value === '' ? 'block' : 'none'}
        width='70px'
        type='date'
        disabled={disabled}
        onFocus={() => setOnFocus(true)}
        onChange={() => {}}
        date={value}
        value={value}
        label={label}
        max='2999-12-31'
        padding='0 1.5em'
      ></InputDefault>
    </InputLine>
  )
}
