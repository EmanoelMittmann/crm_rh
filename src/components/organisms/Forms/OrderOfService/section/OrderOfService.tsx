import { Button, Input } from "@stardust-ds/react"
import { Filter } from "components/organisms/Filters"
import { Table } from "components/organisms/Tables"
import { ListTemplate } from "components/templates"
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
      <div>

      </div>
    )
}