import { UseFormReturn } from 'react-hook-form'

import { toast } from '@stardust-ds/react'
import { SelectOption } from '@stardust-ds/react/lib/esm/components/Select/interfaces'
import axios from 'axios'

import { FormProps, getUfOption } from 'components/organisms'
import {
  BANK_OPTIONS,
  CONTRACT_TYPE_OPTIONS
} from 'components/organisms/Forms/Professional/constants'
import { getDateInput } from 'components/utils/formatDate'
import {
  generateOpitionsFromBackend,
  GenerateValue
} from 'components/utils/OptionsAplication'

import api from 'api'
import { externRoutes, routes } from 'routes'

import { CNPJValidatorResponse } from 'types'

export function getPermissionsId(data: any[]) {
  if (!data) return []
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
      methods.setValue('neighbourhood_name', data?.bairro)
      methods.setValue('uf', getUfOption(data?.uf))
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

function convertIdInIndexs(v2: any[]) {
  const index: boolean[] = new Array(10).fill(false)

  v2.forEach((v) => {
    const id = v.id
    if (id >= 1 && id <= 10) {
      index[Number(id)] = true
    }
  })
  return index
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
    api.get(routes.company.list),
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
    payingCompanies: methods.watch('options.payingCompanies'),
    payingCompany: methods.watch('options.payingCompany')
  })
}

export async function fetchAndPopulateUser(
  id: string,
  methods: UseFormReturn<FormProps['Professional'], any>
) {
  const { data: userData } = await api.get<any[]>(
    routes.professional.getUser(+id)
  )

  if (userData.length === 0) throw new Error('Usuário não encontrado')

  await fetchProps(methods)
  handlePopulateFields(userData[0], methods)
}
export function handlePopulateFields(
  data: any,
  methods: UseFormReturn<FormProps['Professional'], any>
) {
  const { companies, permissions, projects, userTypes, banks, jobs } =
    methods.watch('options')
  const PAYING = data.userCompanies.map((prop: any) => ({
    label: String(prop.razao_social),
    value: prop.id
  }))

  methods.reset({
    name: data.name,
    cpf: data.cpf,
    birth_date: getDateInput(data.birth_date),
    rg: data.rg,
    email: data.email,
    telephone_number: data.telephone_number,
    cep: data.cep,
    city_name: data.city_name,
    uf: getUfOption(data.uf),
    country: data.country,
    neighbourhood_name: data.neighbourhood_name,
    street_name: data.street_name,
    house_number: data.house_number,
    complement: data.complement,
    options: {
      banks,
      jobs,
      payingCompanies: PAYING,
      companies,
      permissions,
      projects,
      userTypes
    },
    professional_data: data.professional_data && {
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
      uf_company: getUfOption(data.professional_data.uf_company),
      account_type: generateOpitionsFromBackend(
        data.professional_data.account_type,
        BANK_OPTIONS.ACCOUNT_TYPE
      ),
      account_number: data.professional_data.account_number,
      agency: data.professional_data.agency,
      bank: generateOpitionsFromBackend(
        data.professional_data.bank,
        banks
      ),
      pix_key: data.professional_data.pix_key,
      pix_key_type: generateOpitionsFromBackend(
        data.professional_data.pix_key_type,
        BANK_OPTIONS.PIX_KEY_TYPE
      ),
      type_of_transfer: generateOpitionsFromBackend(
        data.professional_data.type_of_transfer,
        BANK_OPTIONS.TRANSFER_TYPE
      ),
      type_person: generateOpitionsFromBackend(
        data.professional_data.type_person,
        BANK_OPTIONS.PERSON_TYPE
      )
    },
    commission: data.commission,
    company_id: data.company_id,
    extra_hour_activated: data.extra_hour_activated,
    extra_hour_limit: data.extra_hour_limit,
    extra_hour_value: data.extra_hour_value,
    function_job: data.function_job,
    job_id: generateOpitionsFromBackend(data.job_id, jobs),
    job_type: generateOpitionsFromBackend(
      data.job_type,
      CONTRACT_TYPE_OPTIONS
    ),
    fixed_payment_value: GenerateValue(
      String(data.fixed_payment_value)
    ),
    variable1: data.variable1,
    variable2: data.variable2 === null ? '' : data.variable2,
    permissions: convertIdInIndexs(data.permissions),
    start_date: getDateInput(data.start_date),
    limited_extra_hours: data.limited_extra_hours,
    avatar: data.avatar,
    tools: data.tools,
    is_active: data.is_active,
    user_type_id: data.user_type_id,
    weekly_hours: data.weekly_hours,
    mounth_hours: data.mounth_hours,
    projects: {
      attachment: data.projects
    }
  })
}

export const handleRemoveSpecialCharacters = (value: string) => {
  return value.replace(/[^a-zA-Z0-9]/g, '')
}

export async function onSubmit(
  data: FormProps['Professional'],
  id?: string
) {
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
    neighbourhood_name: data.neighbourhood_name,
    city_name: data.city_name,
    country: 'Brasil',
    uf: data.uf?.value,
    projects: data.projects.attachment,
    professional_data: {
      bank: data.professional_data?.bank?.value,
      account_type: data.professional_data?.account_type?.value,
      agency: Number(data.professional_data?.agency),
      account_number:
        data.professional_data &&
        handleRemoveSpecialCharacters(
          data.professional_data.account_number
        ),
      type_person: data.professional_data?.type_person?.value,
      type_of_transfer:
        data.professional_data?.type_of_transfer?.value,
      cnpj: data.professional_data?.cnpj,
      razao_social: data.professional_data?.razao_social,
      company_cep:
        data.professional_data &&
        handleRemoveSpecialCharacters(
          data.professional_data.company_cep
        ),
      fantasy_name: data.professional_data?.fantasy_name,
      company_street_name:
        data.professional_data?.company_street_name,
      company_neighborhood_name:
        data.professional_data?.company_neighborhood_name,
      company_house_number:
        data.professional_data?.company_house_number,
      company_complement: data.professional_data?.company_complement,
      company_city_name: data.professional_data?.company_city_name,
      uf_company: data.professional_data?.uf_company?.value,
      company_phone_number:
        data.professional_data &&
        handleRemoveSpecialCharacters(
          data.professional_data.company_phone_number
        ),
      company_email: data.professional_data?.company_email,
      pix_key_type: data.professional_data?.pix_key_type?.value,
      pix_key: data.professional_data?.pix_key
    },
    complement: data.complement,
    tools: data.tools,
    extra_hour_activated: setLimitedExtraHoursToBoolean(
      data.extra_hour_activated
    ),
    variable1: data.extra_hour_activated ? data.variable1 : null,
    variable2: data.extra_hour_activated ? data.variable2 : null,
    extra_hour_value: data.extra_hour_value || 0,
    limited_extra_hours: data.limited_extra_hours || 0,
    extra_hour_limit: data.extra_hour_limit || 0,
    permissions: getPermissionsId(data.permissions),
    companies: getCompanies(data.options.payingCompanies)
  }

  try {
    id
      ? await api.put(
          routes.professional.getUser(Number(id)),
          payload
        )
      : await api.post(routes.professional.register, payload)

    return toast({
      type: 'success',
      title: id
        ? 'Profissional Editado com sucesso '
        : 'Profissional Criado com sucesso',
      description: 'Contrato Enviado',
      position: 'bottom-right'
    })
  } catch (error) {
    console.error(error)
  }
}
