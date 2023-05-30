import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Loading } from 'components/atoms'
import { Form, FormProps, SchemaCompany } from 'components/organisms'

import { useDebounce } from 'hooks'

import { fetchProps, handleCEP, OnSubmit } from './logic'
import { IFormCompany } from './types'

export const FormCompany = ({
  defaultValue,
  isLoading
}: IFormCompany) => {
  const navigate = useNavigate()

  const { id } = useParams()
  const methods = useForm<FormProps['Company']>({
    defaultValues: defaultValue || {
      main_cnae: null,
      secondary_cnae: null
    },
    resolver: yupResolver(SchemaCompany)
  })
  const CEP = methods.watch('cep')

  useDebounce({
    fn: () => fetchProps(methods),
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

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(async (data) => {
          await OnSubmit(data, id)
          navigate('/company')
        })}
      >
        <Form.Company />
        <Button.Updade
          type='submit'
          onCancel={() => navigate('/company')}
          saveButtonName='Salvar Empresa'
          cancelButtonName='Cancelar'
        />
      </form>
    </FormProvider>
  )
}
