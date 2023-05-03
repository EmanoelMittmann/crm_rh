import { useContext, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { List } from 'contexts'
import { ProjectProps } from 'types'

import { Button } from 'components/atoms'
import { Form, FormProjectProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

const RegisterProjects = () => {
  const [isSaving, setIsSAving] = useState(false)
  const navigate = useNavigate()

  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {}
  })
  async function fetchPropsProject() {
    const { data: permissions } = await api.get(
      routes.permission.list
    )

    const { data: project_type } = await api.get(
      routes.project_type.list
    )
    const { data: status } = await api.get(routes.status.list)

    const { data: jobs } = await api.get(routes.job.list, {
      params: { is_active: true }
    })
    const { data: user_projects } = await api.get(
      routes.user_projects.list
    )
    const { data: professionals } = await api.get(
      routes.professional.list
    )

    methods.setValue('options', {
      permissions,
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
      user_projects: user_projects.map((user_project: any) => ({
        label: user_project.name,
        value: user_project.id
      }))
    } as FormProjectProps['Project']['options'])
  }

  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      ...data,
      id: data.id?.value,
      name: data.name?.value,
      date_start: data.date_start?.value,
      date_end: data.date_end?.value,
      date_start_performed: data.date_start_performed?.value,
      date_end_performed: data.date_end_performed?.value,
      team_cost: data.team_cost?.value,
      project_type: data.project_type?.name?.value,
      status: data.status?.name?.value,
      jobs: data.name?.value,
      professionals: data.name?.value,
      user_projects: data.user_projects?.name?.value,
      avatar: data.user_projects.avatar?.value,
      extra_hours_estimated:
        data.user_projects?.extra_hours_estimated?.value,
      hours_mounths_estimated:
        data.user_projects.hours_mounths_estimated?.value
    }

    await api.post(routes.project.register, sanitizeData)
  }

  useDebounce({
    fn: fetchPropsProject,
    delay: 0,
    listener: []
  })

  const handleSave = () => {
    setIsSAving(true)
  }

  function handleCancel() {
    navigate('/project')
  }

  return (
    <>
      <AuthTemplate>
        <CreateTemplate title='Cadastrar novo projeto'>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Form.Project />
              <Button.Updade
                onSave={handleSave}
                onCancel={handleCancel}
                saveButtonName='Salvar Projeto'
                cancelButtonName='cancelar'
                disabled={isSaving}
              />
            </form>
          </FormProvider>
        </CreateTemplate>
      </AuthTemplate>
    </>
  )
}

export default RegisterProjects
