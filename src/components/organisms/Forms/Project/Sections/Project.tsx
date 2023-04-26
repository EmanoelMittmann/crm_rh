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
            <ContainerRow gap="1rem">
                <Inputs.Default
                {...register('name',{required:validation.required})}
                error={errors.name?.message}
                width='100%'
                type='text'
                label='Nome do Projeto'
                />
                <Inputs.Default
                    {...register('name', { required: validation.required })}
                    error={errors.id?.message}
                    width='100%'
                    type='text'
                    label='ID do projeto'
                />
                <Selects.Default
                    {...register('project_type',{
                    required:validation.required
                })}
                onSelect={(value: any)=>
                    setValue('project_type', value, {shouldValidate: true})
               }
                onClear={() => setValue('project_type.name', null)}
                options={options?.project_types}
                error={errors.project_type?.message}
                label="Tipo de Projeto"
                placeholder="Selecione"
                width={235}
                />

            </ContainerRow>
        </>
    )

}

