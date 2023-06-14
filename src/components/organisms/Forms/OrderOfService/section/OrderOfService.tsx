import { Input } from "@stardust-ds/react"
import { List } from "contexts"
import { useContext } from "react"
import { useFormContext, UseFormReturn } from "react-hook-form"

import { Container, Main } from "../styles"
import { FormOrderProps } from "../types"



export const OrderOfService = () => {

    const {
        register,
        watch,
        setValue,
        formState: { errors }

    }:UseFormReturn<FormOrderProps> = useFormContext()

    const {
        meta,
        orderOfService,
        navigateTo,
        handleSearch,
        isLoading,
    } = useContext(List.OrderOfService.Context)


    return(
     <div>oi</div>

        // <Main>
        //     <Container>
        //         <Input
        //             value={meta.search}
        //             width={230}
        //             placeholder='Buscar...'
        //             onChange={(e) => handleSearch(e.target.value)}
        //         />
        //     </Container>  
        // </Main>
    )
}