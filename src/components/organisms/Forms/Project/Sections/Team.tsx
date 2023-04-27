import { useFormContext } from 'react-hook-form'

import { ContainerRow } from '../style'
import { FormProjectProps } from '../types'

export const Team = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors }
  } = useFormContext<FormProjectProps>()
  const options = watch('options')

  return (
    <>
      <ContainerRow>
        <h3>Time</h3>
      </ContainerRow>
      <ContainerRow gap='1rem'></ContainerRow>
    </>
  )
}
