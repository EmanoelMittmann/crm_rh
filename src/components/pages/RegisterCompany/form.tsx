import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from '@stardust-ds/react'

import { Button } from 'components/atoms'
import { Form, FormProps, SchemaCompany } from 'components/organisms'

import { useDebounce } from 'hooks'

import { fetchProps, handleCEP, OnSubmit } from './logic'
import { IFormCompany } from './types'

export const FormCompany = ({ defaultValue }: IFormCompany) => {
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

  const handleSave = async (data: any, id: string | undefined) => {
    if (
      (data.witnesses &&
        Number(data.witnesses[0]?.value) ===
          Number(data.witnesses[1]?.value)) ||
      (data.director &&
        data.witnesses?.find(
          (user: any) =>
            Number(user?.value) === Number(data.director?.value)
        ))
    ) {
      return toast({
        type: 'warning',
        title: 'Aviso ',
        description:
          'Testemunhas e Diretores devem ser todos diferentes',
        position: 'bottom-right'
      })
    }
    await OnSubmit(data, id)
    navigate('/company')
  }

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
        onSubmit={methods.handleSubmit((data) =>
          handleSave(data, id)
        )}
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
