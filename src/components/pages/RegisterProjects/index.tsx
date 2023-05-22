import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from '@stardust-ds/react'
import { Button, Loading } from 'components/atoms'
import { Form, FormProjectProps } from 'components/organisms'
import { validationSchema } from 'components/organisms/Forms/Project/logic'
import { AuthTemplate, CreateTemplate } from 'components/templates'
import api from 'api'
import { routes } from 'routes'
import { useDebounce } from 'hooks'
import { Container } from './style'
import { fetchAndPopulateFields, fetchPropsProject } from './logic'
import { TeamMemberProps } from 'components/organisms/Forms/Project/types'
import { Team } from 'components/organisms/Forms/Project/Sections/Team'
import { UserProjects } from 'contexts/List/User'
import { title } from 'process'



const RegisterProjects = () => {
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { id } = useParams()


  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
    shouldFocusError: true
  })

  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      name: data.name,
      id: data.id,
      team_cost: data.team_cost,
      project_status_id: data.project_status_id?.value,
      project_type_id: data.project_type_id?.value,
      date_start: data.date_start,
      date_end: data.date_end,
      date_start_performed: data.date_start_performed,
      date_end_performed: data.date_end_performed,

      users: data.team.map(user=> {
        return {
          user_id: user.professional.name?.value,
          extra_hours_estimated: user.extra_hours_estimated,
          extra_hours_performed: user.extra_hours_performed,
          hours_mounths_estimated: user.hours_mounths_estimated,
          hours_mounths_performed: user.hours_mounths_performed,
          status: user.status,
          job_: user.jobs.name?.label,

        }
      } )

    }

    try {
      if (id) {
        await api.put(routes.project.updateProject(Number(id)), sanitizeData);
      } else {
        await handleCreateProject(sanitizeData);
      }
      const successMessage = id ? 'Projeto atualizado com sucesso.' : 'Projeto cadastrado com sucesso.';
      toast({
        type: 'success',
        title: successMessage,
        position: 'bottom-right'  
      })
      navigate('/project');
    } catch (error) {
      console.log('error: ', error);
    
    }

  }
  const handleCreateProject = async (sanitizeData: any) => {
    try {
      const projectResponse = await api.post(routes.project.register, sanitizeData);
      const projectId = projectResponse.data.id;

      if (projectId) {
        
        if (sanitizeData.users && sanitizeData.users.length > 0) {
          const usersResponse = await api.post(routes.project.userProjects(projectId), sanitizeData.users);
          console.log('Users cadastrados:', usersResponse.data);
        }
      } else {
        throw new Error('Erro ao cadastrar o projeto.');
      }
      toast.success({
        title: 'Projeto cadastrado com sucesso.',
        position: 'bottom-right'
      });
      navigate('/project');
    } catch (error) {
      console.log('error: ', error);
    }
  };


  //const handleCreateProject = async (sanitizeData: any)=>{
    //console.log('sanitizeData: ', sanitizeData);
   // await api.post(routes.project.register, sanitizeData)
    //await  api.post(routes.project.userProjects( sanitizeData.id), sanitizeData.users)
//}

  const handleSave = () => {
    if (!validationSchema) {
      setIsSaving(true)

      methods.handleSubmit(onSubmit, OnError)()
      setIsSaving(false)
    }

  }

  function handleCancel() {
    navigate('/project')
  }

  function OnError(error: any) {
    if (
      error.inner &&
      error.inner.length > 0 &&
      error.inner[0].message
    ) {
      toast(error.inner[0].message)
    } else {
      toast({
        type: 'error',
        title: 'Há erros de validação no formulário.',
        position: 'bottom-right'
      })
    }
  }

  useDebounce({
    fn: () => fetchPropsProject(methods),
    delay: 0,
    listener: []
  })

  useEffect(() => {
    if (id) {
      fetchAndPopulateFields(id, methods)
        .catch((error) => console.log(error.message))
        .finally(() => setIsLoading(false))

    } else {
      setIsLoading(false)
    }
  }, [id])

  return (
    <>
      <AuthTemplate>
        <CreateTemplate
          title={!!id ? 'Editar Projeto ' : 'Cadastrar novo projeto'}
        >
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit, OnError)}>
              {isLoading ? (
                <Container>
                  <Loading />
                </Container>
              ) : (
                <Form.Project />
              )}
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
