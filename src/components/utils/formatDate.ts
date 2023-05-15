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
