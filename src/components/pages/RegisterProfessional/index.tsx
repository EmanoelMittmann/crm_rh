import { FormProvider, useForm } from 'react-hook-form'

import axios from 'axios'

import { Form, FormProps, getUfOption } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import api from 'api'
import { externRoutes, routes } from 'routes'

import { useDebounce } from 'hooks'

const RegisterProfessional = () => {
  const methods = useForm<FormProps['Professional']>({
    defaultValues: {
      commission: false,
      extra_hour_activated: false
    }
  })

  const CPF = methods.watch('cpf')
  const CEP = methods.watch('cep')

  async function fetchProps() {
    const { data: permissions } = await api.get(
      routes.permission.list
    )
    methods.setValue('options', {
      permissions
    } as FormProps['Professional']['options'])

    const { data: jobs } = await api.get(routes.job.list, {
      params: { is_active: true }
    })
    const { data: userTypes } = await api.get(routes.userType.list)
    const { data: banks } = await api.get(externRoutes.banks)
    const { data: project } = await api.get(routes.project.list)
    
    methods.setValue('options', {
      jobs: jobs?.data.map((job: any) => ({
        label: job.name,
        value: job.id
      })),
      userTypes: userTypes?.map((user: any) => ({
        label: user.name,
        value: user.id
      })),
      banks: banks?.map((bank: any) => ({
        label: `${bank.ispb} ${bank.name}`,
        value: bank.name
      })),
      permissions,
      projects: project.data.map((project: any) => ({ label: project.name, value: project })),
    })

  }

  async function handleCPF() {
    if (!CPF) return
    if (CPF.length < 14) return

    api
      .post(routes.professional.validateCPF, {
        cpf: CPF
      })
      .then(() => {
        methods.clearErrors('cpf')
      })
      .catch((error) => {
        methods.setError('cpf', {
          message: error?.response?.data?.msg
        })
      })
  }

  async function handleCEP() {
    if (!CEP) return
    if (CEP.length < 9) return
    axios
      .get(externRoutes.cep(CEP))
      .then(({ data }) => {
        methods.setValue('street_name', data?.logradouro)
        methods.setValue('complement', data?.complemento)
        methods.setValue('city_name', data?.localidade)
        methods.setValue('uf', getUfOption(data?.uf))
        methods.setValue('telephone_number', data?.ddd)
        methods.clearErrors('cep')
      })
      .catch((error) => {
        methods.setError('cep', { message: 'CEP inválido' })
      })
  }

  // TODO: [] Limpar campos com máscara;
  //       [] Tratar retorno de error e passa - los para: methods.setErrors();
  async function onSubmit(data: FormProps['Professional']) {
    const sanitizeData = {
      ...data,
      uf: data.uf?.value,
      job_id: data.job_id?.value,
      job_type: data.job_type?.value,
      professional_data: {
        type_of_transfer:
          data?.professional_data?.type_of_transfer?.value,
        pix_key_type: data?.professional_data?.pix_key_type?.value,
        type_person: data?.professional_data?.type_person?.value,
        account_type: data?.professional_data?.account_type?.value,
        bank: data?.professional_data?.bank?.value,
        uf_company: data.uf?.value
      }
    }

    await api.post(routes.professional.register, sanitizeData)
  }

  useDebounce({
    fn: handleCPF,
    delay: 500,
    listener: [CPF]
  })

  useDebounce({
    fn: handleCEP,
    delay: 500,
    listener: [CEP]
  })

  useDebounce({
    fn: fetchProps,
    delay: 0,
    listener: []
  })

  return (
    <AuthTemplate>
      <CreateTemplate title='Cadastrar novo profissional'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Form.Professional />
            <button>salvar</button>
          </form>
        </FormProvider>
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default RegisterProfessional
