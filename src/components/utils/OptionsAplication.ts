import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'


export const generateOpitionsFromBackend = (
  value: string | number,
  data: SelectOption[]
) => {
  return data.find((item, index, obj) => {
    if (typeof item.value === 'number')
      return item.value === value || null
    const item_value = item.value?.search(String(value))
    return item_value === 0 ? obj[index] : null
  })
}



export const GenerateOptionsForm = (
  value: string | number,
  data: SelectOption[]
) => {
  return data.find((item, index, obj) => {
    if (typeof item.value === 'number')
      return item.value === value || null
    const item_value = item.value?.search(String(value))
    return item_value === 0 ? obj[index] : null
  })

}
