import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { toast } from '@stardust-ds/react'

import { Button, Loading } from 'components/atoms'
import {
  Filter,
  FormOrderProps,
  FormProps
} from 'components/organisms'
import OrderOfService from 'components/organisms/Forms/OrderOfService'
import {
  AuthTemplate,
  CreateTemplate,
  ListTemplate
} from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import OrderForm from '../OrdeForm'
import {
  ConatinerButton,
  Container,
  ContainerCompany,
  ContainerFixed
} from './style'
import { OrderProfessionalProps } from 'components/organisms/Forms/OrderOfService/types'

const RegisterOrderOfService = () => {
  const navigate = useNavigate()

  const methods = useForm<FormOrderProps['OrderOfService']>({
    defaultValues: {},
    shouldFocusError: true
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post(routes.orderOfService.register, data.professional)
      if (response.data.msg === 'successfully generated report') {
        toast({
          type: 'success',
          title: 'Ordem de Serviço gerada com sucesso.',
          position: 'bottom-right'
        })
        navigate('/orderOfService')
      }
    } catch (err) {
      toast({
        type: 'error',
        title: 'Erro ao gerar ordem de serviço.',
        position: 'bottom-right'
      })
      console.log(err)
    }
  }

  return (
    <AuthTemplate>
      <FormProvider {...methods}>
        <form>
          <OrderForm />
          <ContainerFixed>
            <ContainerCompany>Empresas</ContainerCompany>
            <ConatinerButton>
              <Button.Updade
                onSave={methods.handleSubmit(onSubmit)}
                type='button'
                saveButtonName='Criar O.S'
                cancelButtonName='cancelar'
              />
            </ConatinerButton>
          </ContainerFixed>
        </form>
      </FormProvider>
    </AuthTemplate>
  )
}

export default RegisterOrderOfService
