import { useCallback, useEffect, useMemo, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Loading } from 'components/atoms'
import { Form, FormProps } from 'components/organisms'
import { validationSchema } from 'components/organisms/Forms/Company/logic'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import { useDebounce } from 'hooks'

import {
  fetchCompany,
  fetchProps,
  handleCEP,
  OnSubmit
} from './logic'
import { Container } from './style'

export const RegisterCompany = () => {
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { id } = useParams()
  const methods = useForm<FormProps['Company']>({
    defaultValues: {
      main_cnae: null,
      secondary_cnae: null
    },
    resolver: yupResolver(validationSchema)
  })
  const CEP = methods.watch('cep')

  const test = useCallback(async () => {
    setIsLoading(true)
    if (id) {
      try {
        await fetchCompany(id, methods)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
      setIsLoading(false)
    }
  }, [id])

  useDebounce({
    fn: async () => {
      setIsLoading(true)
      await fetchProps(methods)
      setIsLoading(false)
    },
    listener: []
  })

  useDebounce({
    fn: () => {
      if (id) return
      handleCEP(methods, CEP)
    },
    delay: 500,
    listener: [CEP]
  })
  useEffect(() => {
    test()
  }, [test])

  return (
    <AuthTemplate>
      <CreateTemplate title='Cadastro de Empresas'>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(async (data) => {
              await OnSubmit(data, id)
              navigate('/company')
            })}
          >
            {isLoading ? (
              <Container>
                <Loading />
              </Container>
            ) : (
              <Form.Company />
            )}
            <Button.Updade
              type='submit'
              onCancel={() => navigate('/company')}
              saveButtonName='Salvar Empresa'
              cancelButtonName='Cancelar'
            />
          </form>
        </FormProvider>
      </CreateTemplate>
    </AuthTemplate>
  )
}
