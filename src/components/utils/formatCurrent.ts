export const formatCurrency = (
  value: number | undefined,
  currency: string,
  localString: string
): string => {
  if (value === undefined) {
    return '-'
  }
  const options = {
    style: 'currency',
    currency: currency
  }
  const formattedValue = value.toLocaleString(localString, options)

  const decimalSeparator = Intl.NumberFormat(localString)
    .format(0.1)
    .replace(/\d/g, '')
  const lastTwoChars = formattedValue.slice(-2)

  if (lastTwoChars === `${decimalSeparator}00`) {
    return formattedValue.slice(0, -3)
  }

  return formattedValue
}
