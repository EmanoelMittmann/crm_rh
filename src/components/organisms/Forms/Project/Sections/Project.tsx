import { Inputs, Selects } from "components/atoms"
import { useFormContext } from "react-hook-form"
import { validation } from "../logic"


import { ContainerRow } from "../style"
import { FormProjectProps } from "../types"

export const Project = () => {
    const { register, watch, setValue, formState:{errors} } = useFormContext<FormProjectProps>()

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
                {...register('project_type.selected.project_type')}
                onSelect={(v: any)=>
                    setValue('project_type.selected.project_type')
               }
               onClear={()=> setValue('project_type', null)}
               options={watch('options.project_type')?? []}
               label="Tipo de Projeto"
               placeholder="Selecione"
               width={275}
                />

            </ContainerRow>
        </>
    )

}

