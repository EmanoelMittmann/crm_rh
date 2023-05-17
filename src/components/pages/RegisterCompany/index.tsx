import { FormProvider, useForm } from 'react-hook-form'

import { FormProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

export const RegisterCompany = () => {
  const methods = useForm<FormProps>

  return (
    <AuthTemplate>
      <CreateTemplate title='Cadastro de Empresas'>
        <></>
      </CreateTemplate>
    </AuthTemplate>
  )
}
