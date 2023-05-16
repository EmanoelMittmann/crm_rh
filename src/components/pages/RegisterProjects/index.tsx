import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from '@stardust-ds/react'
import { Button, Loading } from 'components/atoms'
import { Form, FormProjectProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'
import api from 'api'
import { routes } from 'routes'
import { useDebounce } from 'hooks'
import { Container } from './style'
import { validationSchema } from 'components/organisms/Forms/Project/logic'
import { fetchPropsProject, handlePopulateFields } from './logic'


const RegisterProjects = () => {
  const [isSaving, setIsSaving] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const methods = useForm<FormProjectProps['Project']>({
    defaultValues: {},
    resolver: yupResolver(validationSchema),
    shouldFocusError: true
  })


  async function onSubmit(data: FormProjectProps['Project']) {
    const sanitizeData = {
      name: data.name,
      id: data.id,
      team_cost: Number(data.team_cost),
      project_status_id: Number(data.project_status_id?.value),
      project_type_id: Number(data.project_type_id?.value),
      date_start: new Date(data.date_start),
      date_end: new Date(data.date_end),
      date_start_performed: new Date(data.date_start_performed),
      date_end_performed: new Date(data.date_end_performed),
     
      usersProjects: data.team,

    }

    try {
      id
        ? await api.put(routes.project.updateProject(Number(id)),
          sanitizeData
        )
        : await api.post(routes.project.register, sanitizeData)
      navigate('/projects')
    } catch (error) {
      console.error(error)
      OnError(error)
    }
    console.log('methods: ', methods)
  }

  const { id } = useParams()

  const handleSave = async () => {
    if (!validationSchema) {
      setIsSaving(true)

      methods.handleSubmit(onSubmit, OnError)()
      setIsSaving(false)
    }
  }

  function handleCancel() {
    navigate('/projects')
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
    console.log('error: ', error)
  }

  useDebounce({
    fn: () => fetchPropsProject(methods),
    delay: 0,
    listener: []
  })

  useEffect(() => {
    if (id) {
      api
        .get(routes.project.updateProject(+id))
        .then(({ data }) => data)
        .then((data) => {
          if (data.length === 0)
            throw new Error('Projeto não encontrado.')
          return data[0]
        })
        .then((data) => handlePopulateFields(data, methods))
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [id])


  return (
    <>
      <AuthTemplate>
        <CreateTemplate title={!!id ? 'Editar Projeto ' : 'Cadastrar novo projeto'}>
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
