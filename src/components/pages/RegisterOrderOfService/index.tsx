import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { Loading } from 'components/atoms'
import { Form, FormOrderProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import { Container } from './style'

const RegisterOrderOfService = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })

  async function onSubmit(data: FormOrderProps['OrderOfService']) {
    const sanitizeData = {}

    try {
      await api.post(routes.orderOfService.register, sanitizeData)
      toast({
        type: 'success',
        title: 'Projeto cadastrado com sucesso.',
        position: 'bottom-right'
      })
      navigate('/orderOfService')
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return (
    <AuthTemplate>
      <CreateTemplate title='criar nova O.S'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* {isLoading ? (
                        <Container>
                            <Loading />
                        </Container>
                    ) : ( 
                        
                     )} */}
            <Form.OrderOfService />
          </form>
        </FormProvider>
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default RegisterOrderOfService
