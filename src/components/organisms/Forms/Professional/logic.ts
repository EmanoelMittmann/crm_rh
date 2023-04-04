import { MASKER, PIX_KEY_TYPE } from './constants'
import type { SelectOption, getMaskFromTypePIXProps } from './types'

export function GenerateOption(data: Object): SelectOption[] {
  return Object.values(data).map((key: string) => ({ label: key, value: key }))
}

export function getMaskFromPixKeyType(type: getMaskFromTypePIXProps) {
  const input = {
    [PIX_KEY_TYPE.CPF]: {
      mask: MASKER.CPF,
      placeHolder: '000.000.000-00',
    },
    [PIX_KEY_TYPE.CNPJ]: {
      mask: MASKER.CNPJ,
      placeHolder: '00.000.00/0000.00',
    },
    [PIX_KEY_TYPE.TELEPHONE]: {
      mask: MASKER.TELEPHONE,
      placeHolder: '(00) 00000-0000',
    },
    [PIX_KEY_TYPE.EMAIL]: {
      type: 'email',
      placeHolder: 'email@email.com',
    },
  }

  return input[type]
}

export const validation = {
  required: 'Campo obrigatório',
  min: (value: number, min: number, message: string = 'Campo inválido') => {
    if (value < min) return message

    return true
  },
}
