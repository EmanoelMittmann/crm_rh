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


export const GenerateValue = (value: string): string => {
  const numericValue = value.replace(/[^\d]/g, '');

  let formattedValue = numericValue;

  if (numericValue.length > 2) {
    const lastTwoDigits = numericValue.slice(-2);
    const remainingDigits = numericValue.slice(0, -2);
    formattedValue = remainingDigits.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + lastTwoDigits;
  }

  if (formattedValue.length > 3 && !formattedValue.includes(',')) {
    formattedValue = formattedValue.slice(0, -2) + ',' + formattedValue.slice(-2);
  }

  return formattedValue;
}