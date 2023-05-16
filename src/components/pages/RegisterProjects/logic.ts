import { FormProjectProps } from "components/organisms"
import { UseFormReturn } from "react-hook-form"


export function handlePopulateFields(
  data: any,
  methods: UseFormReturn<FormProjectProps['Project'], any>

){
  console.log(data)
  methods.reset({
    name: data.name,
    id: data.id,
    project_type_id: data.project_type_id.value,
    date_start: data.date_start,
    date_end: data.date_end,
    date_start_performed: data.date_start_performed,
    date_end_performed: data.date_end_performed,
    project_status_id: data.project_status_id.value,
   usersProjects: {
      user_id: data.usersProjects.user_id,
    }
  })
}