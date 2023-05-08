import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ProjectProps } from 'types'
import { Button } from 'components/atoms'
import { Form, FormProjectProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'
import api from 'api'
import { routes } from 'routes'
import { useDebounce } from 'hooks'
import { validation } from 'components/organisms/Forms/Project/logic'


const RegisterProjects = () => {
  const [isSaving, setIsSaving] = useState(false)
  const navigate = useNavigate()

  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {}
  })



  async function fetchPropsProject() {
    const { data: project_type } = await api.get(
      routes.project_type.list + '?limit=120'
    )
    const { data: status } = await api.get(routes.status.list + '?limit=120')

    const { data: jobs } = await api.get(routes.job.list + '?limit=120', {
      params: { is_active: true }
    })
    const { data: user_projects } = await api.get(
      routes.user_projects.list + '?limit=120'
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
      user_projects: user_projects.map((user_project: any) => ({
        label: user_project.name,
        value: user_project.id
      }))
    } as FormProjectProps['Project']['options'])
  }


  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      team_cost: data.team_cost?.value,
      project_status_id: data.project_status_id?.value,
      project_type_id: data.project_type_id?.value,
      date_start: data.date_start?.value,
      date_end: data.date_end?.value,
      date_start_performed: data.date_start_performed?.value,
      date_end_performed: data.date_end_performed?.value,
      users: []
    }

    await api.post(routes.project.register, sanitizeData)
  }


  const handleSave = async () => {
    if (!validation) {
      console.log('validation: ', validation);
      setIsSaving(true);
      try {
        await methods.handleSubmit(onSubmit)();
        navigate('/project');
        console.log('navigate: ', navigate);

      } catch (error) {
        console.error(error);
      }
    }
    setIsSaving(false);

  }


  function handleCancel() {
    navigate('/project')
  }

  useDebounce({
    fn: fetchPropsProject,
    delay: 0,
    listener: []
  })


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
