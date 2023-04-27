import { ButtonProps } from '@stardust-ds/react'

import { Props } from 'components/templates/Login/types'

export const validation = {
  required: 'Campo obrigatório',
  min: (
    value: number,
    min: number,
    message: string = 'Campo inválido'
  ) => {
    if (value < min) return message

    return true
  }
}
