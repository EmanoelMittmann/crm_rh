import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Loading } from 'components/atoms'
import { Form, FormProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import {
  fetchAndPopulateUser,
  fetchProps,
  handleCEP,
  handleCNPJ,
  handleCPF,
  handleSave
} from './logic'
import { ProfessionalSchema } from './schema'
import { Container } from './style'

const RegisterProfessional = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [defaultValue, setDefaultValue] = useState()

  const methods = useForm<FormProps['Professional']>({
    resolver: yupResolver(ProfessionalSchema),
    defaultValues: defaultValue || {
      commission: false,
      extra_hour_activated: false
    }
  })

  const CPF = methods.watch('cpf')
  const CEP = methods.watch('cep')
  const CNPJ = methods.watch('professional_data.cnpj')
  const { id } = useParams()

  // TODO: [x] Limpar campos com máscara;
  //       [] Tratar retorno de error e passa - los para: methods.setErrors();

  useDebounce({
    fn: () => {
      if (id) {
        return
      }
      handleCPF(methods, CPF)
    },
    delay: 500,
    listener: [CPF]
  })

  useDebounce({
    fn: () => {
      if (id) {
        return
      }
      handleCEP(methods, CEP)
    },
    delay: 500,
    listener: [CEP]
  })

  useDebounce({
    fn: () => fetchProps(methods),
    delay: 0,
    listener: []
  })

  useDebounce({
    fn: () => {
      if (id) {
        return
      }
      handleCNPJ(methods, CNPJ)
    },
    delay: 500,
    listener: [CNPJ]
  })

  useEffect(() => {
    if (!!id) {
      api
        .get<any[]>(routes.professional.getUser(+id))
        .then(({ data }) => setDefaultValue(data[0]))
      /* fetchAndPopulateUser(id, methods)
        .catch((error) => {
          console.log(error.message)
        })
        .finally(() => setIsLoading(false)) */
    } else {
      /* setIsLoading(false) */
    }
  }, [id])

  return (
    <AuthTemplate>
      <CreateTemplate
        title={
          !!id ? 'Editar profissional' : 'Cadastrar novo profissional'
        }
      >
        <FormProvider {...methods}>
          <form>
            {isLoading ? (
              <Container>
                <Loading />
              </Container>
            ) : (
              <Form.Professional />
            )}
            <Button.Updade
              onClick={(e) => {
                handleSave(methods, id)
              }}
              saveButtonName='Salvar Profissional'
              cancelButtonName='cancelar'
            />
          </form>
        </FormProvider>
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default RegisterProfessional
