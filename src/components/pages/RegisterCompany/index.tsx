import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from 'components/atoms'
import { Form, FormProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import { useDebounce } from 'hooks'

import { fetchProps } from './logic'

export const RegisterCompany = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const methods = useForm<FormProps['Company']>({
    defaultValues: {},
    shouldFocusError: true
  })

  useDebounce({
    fn: () => fetchProps(methods),
    listener: []
  })

  return (
    <AuthTemplate>
      <CreateTemplate title='Cadastro de Empresas'>
        <FormProvider {...methods}>
          <form>
            {isLoading ? <></> : <Form.Company />}
            <Button.Updade
              onSave={() => {}}
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
