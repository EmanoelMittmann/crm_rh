import { useFormContext } from "react-hook-form"
import { FormProps } from "../../Professional"
import { ContainerRow } from "../style"

export const Project = () => {
    const { register, watch, setValue } = useFormContext<FormProps>()

    return (
        <>
            <ContainerRow>
                <h3>Dados do Projeto</h3>
            </ContainerRow>
        </>
    )

}

