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
import {validationSchema } from 'components/organisms/Forms/Project/logic'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from '@stardust-ds/react'


const RegisterProjects = () => {
  const [isSaving, setIsSaving] = useState(false)
  const navigate = useNavigate()

  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
  });


  async function fetchPropsProject() {
    const { data: project_type } = await api.get(
      routes.project_type.list + '?limit=120'
    )
    const { data: status } = await api.get(routes.status.list + '?limit=120')

    const { data: jobs } = await api.get(routes.job.list + '?limit=120', {
      params: { is_active: true }
    })
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


  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      ...data,
      team_cost: data.team_cost?.value,
      project_status_id: data.project_status_id?.value,
      project_type_id: data.project_type_id?.value,
      date_start: data.date_start?.value,
      date_end: data.date_end?.value,
      date_start_performed: data.date_start_performed?.value,
      date_end_performed: data.date_end_performed?.value,
      usersProjects:{
        user_id: data.usersProjects?.user_id?.value,
        extra_hours_estimated: data.usersProjects?.extra_hours_estimated?.value,
        hours_mounths_estimated: data.usersProjects?.hours_mounths_estimated?.value,
        avatar: data.usersProjects?.avatar?.value,
        name: data.usersProjects?.name?.value,
        job_: data.usersProjects?.job_?.value,
        }
      
    }
    try {
      await api.post(routes.project.register, sanitizeData);
      navigate('/project');
    } catch (error) {
      console.error(error);
      OnError(error);
      console.log('erros',methods)
    }
  }


  const handleSave = async () => {
    if (!validationSchema) {
      setIsSaving(true);

      methods.handleSubmit(onSubmit, OnError)();
      setIsSaving(false);
    }

  }

  function handleCancel() {
    navigate('/project')
  }

  function OnError(error: any) {
    console.log('error: ', error);
    if (error.inner && error.inner.length > 0 && error.inner[0].message) {
      toast(error.inner[0].message);
    } else {
      toast({
        type: 'error',
        title: 'Há erros de validação no formulário.',
        position: 'bottom-right'
      })
    }
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
            <form onSubmit={methods.handleSubmit(onSubmit, OnError)}>
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
