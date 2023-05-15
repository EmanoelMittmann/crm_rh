import { UseFormReturn } from 'react-hook-form'

import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'
import axios from 'axios'

import { FormProps, getUfOption } from 'components/organisms'
import { UF_OPTIONS } from 'components/organisms/Forms/Professional/constants'

import api from 'api'
import { externRoutes, routes } from 'routes'

export function getPermissionsId(data: any[]) {
  return (
    data
      // eslint-disable-next-line array-callback-return
      .map((permission: any, index: number) => {
        if (permission !== undefined && permission !== false) {
          return index
        }
      })
      .filter((item) => item !== undefined)
  )
}

export function getCompanies(companies: SelectOption[]) {
  const ids = companies.map((company: SelectOption) => company.value)
  return ids
}

export function setLimitedExtraHoursToBoolean(
  value: string | boolean
) {
  const isTrue = value == '0'
  return !isTrue
}

export function handleCNPJ(
  methods: UseFormReturn<FormProps['Professional'], any>,
  CNPJ: string
) {
  if (!CNPJ) return
  if (CNPJ.length < 18) return

  const sanitizedData = CNPJ.replace(/\D/g, '') //Regex para remover todos os caracteres não numéricos Ex: In.: '00.000.000/0000-00' Out.: '00000000000000'

  axios
    .get<Partial<CNPJValidatorResponse>>(
      externRoutes.cnpj(sanitizedData)
    )
    .then(({ data }) => {
      const phone_number = data?.ddd_telefone_1?.replace(' ', '')
      methods.setValue(
        'professional_data.company_cep',
        String(data?.cep)
      )
      methods.setValue(
        'professional_data.company_street_name',
        `${data?.descricao_tipo_de_logradouro} ${data?.logradouro}`
      )
      methods.setValue(
        'professional_data.company_house_number',
        Number(data?.numero)
      )
      methods.setValue(
        'professional_data.company_complement',
        data?.complemento || ''
      )
      methods.setValue(
        'professional_data.company_city_name',
        data?.municipio || ''
      )
      methods.setValue(
        'professional_data.company_neighborhood_name',
        data?.bairro || ''
      )
      methods.setValue(
        'professional_data.uf_company',
        getUfOption(data?.uf || '')
      )
      methods.setValue(
        'professional_data.fantasy_name',
        data?.nome_fantasia || ''
      )
      methods.setValue(
        'professional_data.razao_social',
        data?.razao_social || ''
      )
      methods.setValue(
        'professional_data.company_phone_number',
        phone_number || ''
      )
      methods.clearErrors('professional_data.cnpj')
    })
    .catch((error) => {
      methods.setError('professional_data.cnpj', {
        message: 'CNPJ Inválido'
      })
    })
}

export function handleCEP(
  methods: UseFormReturn<FormProps['Professional'], any>,
  CEP: string
) {
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

export function handleCPF(
  methods: UseFormReturn<FormProps['Professional'], any>,
  CPF: string
) {
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

export async function fetchProps(
  methods: UseFormReturn<FormProps['Professional'], any>
) {
  const [
    { data: permissions },
    { data: userTypes },
    { data: banks },
    { data: projects },
    { data: companies },
    { data: jobs }
  ] = await Promise.all([
    await api.get(routes.permission.list),
    api.get(routes.userType.list),
    api.get(externRoutes.banks),
    api.get(routes.project.list),
    api.get(routes.companies.list),
    await api.get(routes.job.list, {
      params: { is_active: true }
    })
  ])
  methods.setValue('options', {
    permissions
  } as FormProps['Professional']['options'])

  methods.setValue('options', {
    jobs: jobs?.data.map((job: any) => ({
      label: job.name,
      value: job.id
    })),
    userTypes: userTypes?.map((user: any) => ({
      label: user.name,
      value: user.id
    })),
    banks: banks
      ?.filter((bank: any) => bank.ispb !== '')
      .map((bank: any) => ({
        label: `${bank.ispb} ${bank.name}`,
        value: bank.name
      })),
    permissions,
    projects: projects.data.map((project: any) => ({
      label: project.name,
      value: project
    })),
    companies: companies.data.map((company: any) => ({
      label: company.razao_social,
      value: company.id
    })),
    payingCompanies: methods.watch('options.payingCompanies')
  })
}

export function handlePopulateFields(
  data: any,
  methods: UseFormReturn<FormProps['Professional'], any>
) {
  console.log(data)
  methods.reset({
    name: data.name,
    cpf: data.cpf,
    birth_date: data.birth_date,
    rg: data.rg,
    email: data.email,
    telephone_number: data.telephone_number,
    cep: data.cep,
    city_name: data.city_name,
    uf: data.uf,
    country: data.country,
    neighbourhood_name: data.neighbourhood_name,
    street_name: data.street_name,
    house_number: data.house_number,
    complement: data.complement,
    professional_data: {
      cnpj: data.professional_data.cnpj,
      fantasy_name: data.professional_data.fantasy_name,
      razao_social: data.professional_data.razao_social,
      company_cep: data.professional_data.company_cep,
      company_email: data.professional_data.company_email,
      company_house_number:
        data.professional_data.company_house_number,
      company_phone_number:
        data.professional_data.company_phone_number,
      company_street_name: data.professional_data.company_street_name,
      company_complement: data.professional_data.company_complement,
      company_city_name: data.professional_data.company_city_name,
      company_neighborhood_name:
        data.professional_data.company_neighborhood_name,
      uf_company: data.professional_data.uf_company,
      account_type: data.professional_data.account_type,
      account_number: data.professional_data.account_number,
      agency: data.professional_data.agency,
      bank: data.professional_data.bank,
      pix_key: data.professional_data.pix_key,
      pix_key_type: data.professional_data.pix_key_type,
      type_of_transfer: data.professional_data.type_of_transfer,
      type_person: data.professional_data.type_person
    },
    commission: data.commission,
    company_id: data.company_id,
    extra_hour_activated: data.extra_hour_activated,
    extra_hour_limit: data.extra_hour_limit,
    extra_hour_value: data.extra_hour_value,
    function_job: data.function_job,
    job_id: data.job_id,
    job_type: data.job_type,
    fixed_payment_value: data.fixed_payment_value,
    variable1: data.variable1,
    variable2: data.variable2,
    permissions: data.permissions,
    start_date: data.start_date,
    limited_extra_hours: data.limited_extra_hours,
    avatar: data.avatar,
    is_active: data.is_active,
    user_type_id: data.user_type_id,
    weekly_hours: data.weekly_hours,
    mounth_hours: data.mounth_hours
  })
}

export const handleRemoveSpecialCharacters = (value: string) => {
  return value.replace(/[^a-zA-Z0-9]/g, '')
}
