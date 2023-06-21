export const formatDate = (
  dateWithoutFormatting: string | number | Date
) => {
  if (!dateWithoutFormatting) return '-'
  const date = new Date(dateWithoutFormatting)
  const year = date.getUTCFullYear()
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const day = String(date.getUTCDate()).padStart(2, '0')
  const formattedDate = `${day}/${month}/${year}`
  return formattedDate
}

export const formatAgeValidation = (
  dateWithoutFormatting: string | number | Date
) => {
  if (!dateWithoutFormatting) return '-'

  const date = new Date(dateWithoutFormatting)
  const isoDate = date.toISOString()
  const formattedDate = isoDate.substring(0, 10)

  return formattedDate
}

export const getDateInput = (data: any) => {
  if (!data) return ''
  const date = new Date(data).toLocaleDateString()
  const convertedDate = date.replace(
    /(\d{2})\/(\d{2})\/(\d{4})/,
    '$3-$2-$1'
  )
  return convertedDate
}

const months = [
  'JAN',
  'FEV',
  'MAR',
  'ABR',
  'MAI',
  'JUN',
  'JUL',
  'AGO',
  'SET',
  'OUT',
  'NOV',
  'DEZ'
]
export const getReferenceDate = (date: string) => {
  const dateSplitted = date.split('-')

  const month = months[Number(dateSplitted[1]) - 1]
  const year = dateSplitted[0].substring(2)

  return `${month}/${year}`
}
