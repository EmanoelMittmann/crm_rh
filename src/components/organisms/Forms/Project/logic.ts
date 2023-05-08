import { SelectOption } from "./types"


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
