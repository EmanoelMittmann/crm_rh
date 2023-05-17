import { UseFormReturn } from 'react-hook-form'

import { FormProjectProps } from 'components/organisms'

import api from 'api'
import { routes } from 'routes'

import { ProjectProps } from 'types'

export async function fetchPropsProject(
  methods: UseFormReturn<FormProjectProps['Project'], any>
) {
  const { data: project_type } = await api.get(
    routes.project_type.list + '?limit=120'
  )
  const { data: status } = await api.get(
    routes.status.list + '?limit=120'
  )

  const { data: jobs } = await api.get(
    routes.job.list + '?limit=120',
    {
      params: { is_active: true }
    }
  )
  const { data: users } = await api.get(
    routes.usersProjects.list + '?limit=120'
  )
  const { data: professionals } = await api.get(
    routes.professional.list + '?limit=120'
  )

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

export function handlePopulateFields(
  data: any,
  methods: UseFormReturn<FormProjectProps['Project'], any>
) {
  methods.reset({
    id: data.id,
    name: data.name,
    project_status_id: data.project_status_id.value,
    project_type_id: data.project_type_id.value,
    date_start: data.date_start.value,
    date_end: data.date_end.value,
    date_start_performed: data.date_start_performed.value,
    date_end_performed: data.date_end_performed.value,
    team_cost: data.team_cost,

    usersProjects: {
      user_id: data.user_id,
      name: data.name,
      job_id: data.job_id,
      job_: data.job_,
      extra_hours_estimated: data.extra_hours_estimated,
      extra_hours_performed: data.extra_hours_performed,
      status: data.status
    }
  })
}
