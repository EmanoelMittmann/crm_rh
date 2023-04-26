import { Inputs, Selects } from "components/atoms"
import { useFormContext } from "react-hook-form"
import { validation } from "../logic"
import { ContainerRow } from "../style"
import { FormProjectProps } from "../types"

export const Project = () => {
    const { register, watch, setValue, formState: { errors } } = useFormContext<FormProjectProps>()
    const options = watch('options')


  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
    </>
  )
>>>>>>> 0bda05cd4d304f01c8027a3a07e9cb0c14b4e782

  return (
    <>
      <ContainerRow>
        <h3>Dados do Projeto</h3>
      </ContainerRow>
    </>
  )
}
