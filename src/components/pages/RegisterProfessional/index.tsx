import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

//import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'
//import axios from 'axios'
//import { AuthContext } from 'contexts'

import { useParams } from 'react-router-dom'

import { Loading } from 'components/atoms'
import { Form, FormProps } from 'components/organisms'
import { AuthTemplate, CreateTemplate } from 'components/templates'

import api from 'api'
import { routes } from 'routes'

import { useDebounce } from 'hooks'

import {
  fetchProps,
  getCompanies,
  getPermissionsId,
  handleCEP,
  handleCNPJ,
  handleCPF,
  handlePopulateFields,
  handleRemoveSpecialCharacters,
  setLimitedExtraHoursToBoolean
} from './logic'
//import { payload } from './payload'
import { Container } from './style'

const RegisterProfessional = () => {
  const [payload, setPayload] = useState({} as any)
  const [isLoading, setIsLoading] = useState(true)

  const methods = useForm<FormProps['Professional']>({
    defaultValues: {
      ...(payload as any),
      commission: false,
      extra_hour_activated: false
    }
  })

  const CPF = methods.watch('cpf')
  const CEP = methods.watch('cep')
  const CNPJ = methods.watch('professional_data.cnpj')

  // TODO: [] Limpar campos com máscara;
  //       [] Tratar retorno de error e passa - los para: methods.setErrors();

  async function onSubmit(data: FormProps['Professional']) {
    const payload = {
      email: data.email,
      job_id: Number(data.job_id?.value),
      company_id: Number(data.company_id),
      user_type_id: 2,
      cpf: handleRemoveSpecialCharacters(data.cpf),
      rg: handleRemoveSpecialCharacters(data.rg),
      name: data.name,
      birth_date: new Date(data.birth_date),
      start_date: data.start_date,
      weekly_hours: Number(data.weekly_hours),
      mounth_hours: Number(data.mounth_hours),
      commission: data.commission,
      function_job: data.function_job,
      fixed_payment_value: Number(data.fixed_payment_value),
      telephone_number: handleRemoveSpecialCharacters(
        data.telephone_number
      ),
      job_type: data.job_type?.value,
      avatar:
        'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png',
      cep: handleRemoveSpecialCharacters(data.cep),
      street_name: data.street_name,
      house_number: Number(data.house_number),
      //complement: data.complement,
      neighbourhood_name: data.neighbourhood_name,
      city_name: data.city_name,
      country: 'Brasil',
      uf: data.uf?.value,
      //tools: data.tools,
      //extra_hour_activated: setLimitedExtraHoursToBoolean(
      //  data.extra_hour_activated
      //),
      //variable1: data.extra_hour_activated ? data.variable1 : null,
      //variable2: data.extra_hour_activated ? data.variable2 : null,
      //extra_hour_value: data.extra_hour_value || 0,
      //limited_extra_hours: data.limited_extra_hours || 0,
      //extra_hour_limit: data.extra_hour_limit || 0,
      //permissions: getPermissionsId(data.permissions),
      //companies: getCompanies(data.options.payingCompanies),
      professional_data: {
        bank: data.professional_data.bank?.value,
        account_type: data.professional_data.account_type?.value,
        agency: +data.professional_data.agency,
        account_number: +handleRemoveSpecialCharacters(
          data.professional_data.account_number
        ),
        //cnpj: data.professional_data.cnpj,
        //razao_social: data.professional_data.razao_social,
        //company_cep: handleRemoveSpecialCharacters(
        //  data.professional_data.company_cep
        //),
        //fantasy_name: data.professional_data.fantasy_name,
        //company_street_name:
        //  data.professional_data.company_street_name,
        //company_neighborhood_name:
        //  data.professional_data.company_neighborhood_name,
        //company_house_number:
        //  +data.professional_data.company_house_number,
        //company_complement: data.professional_data.company_complement,
        //company_city_name: data.professional_data.company_city_name,
        //uf_company: data.professional_data.uf_company?.value,
        //company_phone_number: handleRemoveSpecialCharacters(
        //  data.professional_data.company_phone_number
        //),
        //company_email: data.professional_data.company_email,
        type_person: data.professional_data.type_person?.value,
        type_of_transfer:
          data.professional_data.type_of_transfer?.value
        //pix_key_type: data.professional_data.pix_key_type?.value,
        //pix_key: data.professional_data.pix_key
      },
      projects: data.projects.attachment
    }
    console.log(payload)
    await api.post(routes.professional.register, payload)
  }
  const { id } = useParams()

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
    if (id) {
      api
        .get(routes.professional.getUser(+id))
        .then(({ data }) => data)
        .then((data) => {
          if (data.length === 0)
            throw new Error('Usuário não encontrado')
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
    <AuthTemplate>
      <CreateTemplate
        title={
          !!id ? 'Editar profissional' : 'Cadastrar novo profissional'
        }
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {isLoading ? (
              <Container>
                <Loading />
              </Container>
            ) : (
              <Form.Professional />
            )}
            <button type='submit'>salvar</button>
          </form>
        </FormProvider>
      </CreateTemplate>
    </AuthTemplate>
  )
}

export default RegisterProfessional
