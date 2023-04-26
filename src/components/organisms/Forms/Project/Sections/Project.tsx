import { useFormContext } from 'react-hook-form'

import { ContainerRow } from '../style'
import { FormProjectProps } from '../types'

export const Project = () => {
  const { register, watch, setValue } =
    useFormContext<FormProjectProps>()

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
    </>
  )

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
    </>
  )
}
