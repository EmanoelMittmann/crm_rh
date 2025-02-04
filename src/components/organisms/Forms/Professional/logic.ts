import { MASKER, PIX_KEY_TYPE, UF_OPTIONS } from './constants'
import type { SelectOption, getMaskFromTypePIXProps } from './types'

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

export function GenerateOption(data: Object): SelectOption[] {
  return Object.values(data).map((key: string) => ({
    label: key,
    value: key
  }))
}

export function getMaskFromPixKeyType(type: getMaskFromTypePIXProps) {
  const input = {
    [PIX_KEY_TYPE.CPF]: {
      mask: MASKER.CPF,
      placeHolder: '000.000.000-00'
    },
    [PIX_KEY_TYPE.CNPJ]: {
      mask: MASKER.CNPJ,
      placeHolder: '00.000.00/0000.00'
    },
    [PIX_KEY_TYPE.TELEPHONE]: {
      mask: MASKER.TELEPHONE,
      placeHolder: '(00) 00000-0000'
    },
    [PIX_KEY_TYPE.EMAIL]: {
      type: 'email',
      placeHolder: 'email@email.com'
    }
  }

  return input[type]
}

export function getUfOption(uf: string) {
  return UF_OPTIONS.find(({ value }) => value === uf) ?? null
}

export const barricadeNumericCase = (e: any) => {
  const keyCode = e.keyCode ? e.keyCode : e.wich

  if (
    (keyCode >= 47 && keyCode <= 58) ||
    (keyCode >= 96 && keyCode <= 105)
  )
    e.preventDefault()
}

export const convertToTitleCase = (e: string) => {
  const words = e.split(' ')

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word.length > 0) {
      words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase()
    }
  }

  return words.join(' ')
}
