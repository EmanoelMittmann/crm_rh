import { SelectOption } from "@stardust-ds/react/lib/esm/components/Select/interfaces"
import api from "api"
import { FormProjectProps } from "components/organisms"

import { UseFormReturn } from "react-hook-form"
import { routes } from "routes"
import { ProjectProps } from 'types'


export async function fetchPropsProject(
  methods: UseFormReturn<FormProjectProps['Project'], any>
) {
  const [
    { data: project_type },
    { data: status },
    { data: jobs },
    { data: users },
    { data: professionals }
  ] = await Promise.all([
    await api.get(routes.project_type.list),
    api.get(routes.status.list),
    api.get(routes.job.list, {
      params: { is_active: true }
    }),
    api.get(routes.usersProjects.list),
    api.get(routes.professional.list)
  ])
  methods.setValue('options', {
    project_types: project_type.data.map(
      (project_type: ProjectProps) => ({
        label: project_type.name,
        value: project_type.id
      })
    ),
    status_projects: status.data.map((status: ProjectProps) => ({
      label: status.name,
      value: status.id
    })),
    jobs: jobs?.data.map((job: any) => ({
      label: job.name,
      value: job.id
    })),
    professionals: professionals?.data.map((professional: any) => ({
      label: professional.name,
      value: professional.id
    })),
    usersProjects: users.map((user_project: any) => ({
      label: user_project.name,
      value: user_project.id
    }))
  } as FormProjectProps['Project']['options'])
}

export async function fetchAndPopulateFields(
  id: string,
   methods: UseFormReturn<FormProjectProps['Project'], any>)
{
  const {data: projectData } = await api.get(routes.project.updateProject(Number(id)))
  if (projectData.length === 0) throw new Error('Projeto não encontrado.')
  await fetchPropsProject(methods)
  handlePopulateFields(projectData[0], methods) 

}


export function handlePopulateFields(
  data: any,
  methods: UseFormReturn<FormProjectProps['Project'], any>

){
  console.log('data: ', data);
  const STATUS = methods.watch('options.status_projects')
  const TYPE_PROJECT = methods.watch('options.project_types')
  const DATE = methods.watch('date_start')

  const team = data.users.map((user: any) => {
    const { name, job, job_, ...data } = user
    console.log('job_: ', job_);
    console.log('job: ', job);
    return {
      professinal: {
        name: { label: name }
        
      },
      jobs: {
        name: { label: job_ ? job_ : job}
      },
      ...data
      
    }
  })
  console.log('team: ', team);

  methods.reset({
    
    id: data.id,
    name: data.name,
    project_status_id: GenerateOptions(data.project_status_id, STATUS),
    project_type_id: GenerateOptions(data.project_type_id, TYPE_PROJECT),
    date_start: data.date_start,
    date_end: data.date_end,
    date_start_performed: data.date_start_performed,
    date_end_performed: data.date_end_performed,
    team_cost: data.team_cost,
  
    team: data.users.map((user: any) => {
      const { name, job, job_, status, ...rest } = user;
      const professional = { name: { label: name } };
      const jobs = {
        name: { label: job_ !== null ? job_ : job },
        status: status
      };

      return {
        professional,
        jobs,
        ...rest
      };
    })

  })
  
}


const GenerateOptions = (
  value: string | number,
  data: SelectOption[]
) => {
  return data.find((item, index, obj) => {
    if (typeof item.value === 'number') 
      return item.value === value || null
    const item_value = item.value?.search(String(value))
    return item_value === 0 ? obj[index] : null
  })
  
}
// const GenerateOptions1 = (
//   value: string | number,
//   data: SelectOption[] | string
// ): string | undefined => {
//   if (typeof data === 'string') {
//     return value === data ? String(value) : undefined;
//   }

//   const option = data.find((item) => {
//     if (typeof item.value === 'number') {
//       return item.value === value;
//     }
//     const item_value = item.value?.search(String(value));
//     return item_value === 0;
//   });

//   return option?.value;
// }

// const GenerateOptionStatus = (
//   value: string,
//   methods: UseFormReturn<FormProjectProps['Project'], any>
// ) => {
//   const STATUS = methods.watch('options.status_projects')
//   return STATUS?.find((status: any) => status.value === value)
// }

// const GenerateOptionProjectType = (
//   value: string,
//   methods: UseFormReturn<FormProjectProps['Project'], any>
// ) => {
//   const PROJECT_TYPE = methods.watch('options.project_types')
//   return PROJECT_TYPE?.find((project_type: any) => project_type.value === value)
// }





