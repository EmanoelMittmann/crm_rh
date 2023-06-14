import { UseFormReturn } from 'react-hook-form'

import { ProfessionalProps } from 'contexts/List/Professional/types'
import { JobsProps } from 'contexts/List/Settings/Jobs/types'
import { FormProjectProps } from 'components/organisms'
import { getDateInput } from 'components/utils/formatDate'
import {
  generateOpitionsFromBackend,
  GenerateValue
} from 'components/utils/OptionsAplication'

import api from 'api'
import { routes } from 'routes'

import { ProjectProps } from 'types'

export async function fetchPropsProject(
  methods: UseFormReturn<FormProjectProps['Project']>
) {
  const [
    { data: project_type },
    { data: status },
    { data: jobs },
    { data: users },
    { data: professionals }
  ] = await Promise.all([
    await api.get(routes.project_type.list + '?limit=100'),
    api.get(routes.status.list + '?limit=100'),
    api.get(routes.job.list + '?limit=100', {
      params: { is_active: true }
    }),
    api.get(routes.usersProjects.list),
    api.get(routes.professional.list + '?limit=100')
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
    jobs: jobs?.data.map((job: JobsProps) => ({
      label: job.name,
      value: job.id
    })),
    professionals: professionals?.data.map(
      (professional: ProfessionalProps) => ({
        label: professional.name,
        value: professional.id
      })
    ),
    usersProjects: users.map((user_project: ProjectProps) => ({
      label: user_project.name,
      value: user_project.id
    })),
    users: users
  } as FormProjectProps['Project']['options'])
}

export async function fetchAndPopulateFields(
  id: string,
  methods: UseFormReturn<FormProjectProps['Project']>
) {
  const { data: projectData } = await api.get(
    routes.project.updateProject(Number(id))
  )
  if (projectData.length === 0)
    throw new Error('Projeto não encontrado.')
  await fetchPropsProject(methods)
  handlePopulateFields(projectData[0], methods)
}

export function handlePopulateFields(
  data: ProjectProps,
  methods: UseFormReturn<FormProjectProps['Project']>
) {
  const STATUS = methods.watch('options.status_projects')
  const TYPE_PROJECT = methods.watch('options.project_types')
  const OPTIONS = methods.watch('options')

  methods.reset({
    id: data.id,
    name: data.name,
    project_status_id: generateOpitionsFromBackend(
      data.project_status_id,
      STATUS
    ),
    project_type_id: generateOpitionsFromBackend(
      data.project_type_id,
      TYPE_PROJECT
    ),
    date_start: getDateInput(data.date_start),
    date_end: getDateInput(data.date_end),
    date_start_performed: getDateInput(data.date_start_performed),
    date_end_performed: getDateInput(data.date_end_performed),
    team_cost: GenerateValue(String(data.team_cost)),

    team: data.users.map((user) => {
      const allUsers = OPTIONS.users.flatMap(
        (selectUser:any) => selectUser.users
        )
    const userData = allUsers.find(
      (userData) => userData.id === user.user_id
      )
      console.log('userData: ', userData);
 


      const { name, job, job_, status, ...rest } = user
      const professional = { name: { label: name } }
      const jobs = {
      name: { label: job_ !== null ? job_ : job }
    }

      return {
      professional: professional,
      jobs: jobs,
      job_:userData.job_,
      status: userData.status,
      is_active: userData.is_active,
      job_id: userData.job_id,
      isTechLead: userData.isTechLead,
      extra_hours_estimated: userData.extra_hours_estimated,
      hours_mounths_estimated: userData.hours_mounths_estimated,
      hours_mounths_performed: userData.hours_mounths_performed,
      extra_hours_performed: userData.extra_hours_performed,
      ...rest
    }
  }),
    options: OPTIONS
})
}
