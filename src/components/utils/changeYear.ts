import { ChangeEvent } from 'react'

export const handleDateChange = (
  e: ChangeEvent<HTMLInputElement>
) => {
  const value = e.target.value.split('-')
  const inputDate = new Date(e.target.value)
  const currentDate = new Date().getFullYear()

  if (inputDate.getFullYear() > currentDate) {
    return `${currentDate}-${value[1]}-${value[2]}`
  } else {
    return e.target.value
  }
}
