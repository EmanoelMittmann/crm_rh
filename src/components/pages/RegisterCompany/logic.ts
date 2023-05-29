import { UseFormReturn } from 'react-hook-form'

import { toast } from '@stardust-ds/react'
import axios from 'axios'

import { FormProps, getUfOption } from 'components/organisms'
import { COMPANY } from 'components/organisms/Forms/Company/constants'
import { BANK_OPTIONS } from 'components/organisms/Forms/Company/constants'
import {
  ProfessionalProps,
  SelectOption
} from 'components/organisms/Forms/Professional/types'
import { getDateInput } from 'components/utils/formatDate'
import { generateOpitionsFromBackend } from 'components/utils/OptionsAplication'

import api from 'api'
import { routes } from 'routes'
import { externRoutes } from 'routes'

export async function fetchProps(
  methods: UseFormReturn<FormProps['Company'], any>
) {
  const [
    { data: owners },
    { data: banks },
    { data: cnae },
    { data: uf }
  ] = await Promise.all([
    await api.get(routes.professional.list + '?limit=50'),
    await api.get(externRoutes.banks),
    await api.get(externRoutes.cnae),
    await api.get(externRoutes.uf)
  ])

  methods.setValue('options', {
    owners: await owners.data
      .filter(
        (own: any) => own.job.name.substring(0, 7) === 'Diretor'
      )
      .map((own: ProfessionalProps) => ({
        label: own.name,
        value: String(own.id)
      })),
    banks: banks
      ?.filter((bank: any) => bank.ispb !== '')
      .map((bank: any) => ({
        label: `${bank.ispb} ${bank.name}`,
        value: bank.name
      })),
    uf: uf.map((uf: any) => ({
      label: uf.nome,
      value: uf.sigla
    })),
    cnae: cnae.map((cnae: any) => ({
      label: cnae.descricao,
      value: cnae.id
    }))
  })
}

export function handleCEP(
  methods: UseFormReturn<FormProps['Company'], any>,
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
      methods.setValue('neighborhood_name', data?.bairro)
      methods.setValue('uf', getUfOption(data?.uf) as any)
      methods.setValue('phone_number', data?.ddd)
      methods.clearErrors('cep')
    })
    .catch((error) => {
      methods.setError('cep', { message: 'CEP inválido' })
    })
}

export async function fetchCompany(
  id: string,
  methods: UseFormReturn<FormProps['Company'], any>
) {
  const { data: props } = await api.get(
    routes.company.getCompany(+id)
  )
  if (props.length === 0) throw new Error('Empresa não encontrada')

  await fetchProps(methods)
  return HandlePopulateFields(props, methods)
}

export function HandlePopulateFields(
  props: any,
  methods: UseFormReturn<FormProps['Company'], any>
) {
  const BANK = methods.watch('options.banks')

  const director = props.userCompanies.find(
    (prop: any) => prop.type_of_subscribes === 'DIRECTOR'
  )

  const code = props.code_and_description_of_the_legal_status.map(
    (item: any) => ({ label: item.name, value: item.id })
  )

  const witnesses = props.userCompanies
    .filter((prop: any) => prop.type_of_subscribes === 'WITNESSES')
    .map((v: any) => ({ label: v.name, value: v.id }))

  methods.reset({
    id: props.id,
    razao_social: props.razao_social,
    fantasy_name: props.fantasy_name,
    director: { label: director.name, value: String(director.id) },
    witnesses: witnesses,
    opening_date: getDateInput(props.opening_date),
    state_registration: props.state_registration,
    municipal_registration: props.municipal_registration,
    size: generateOpitionsFromBackend(props.size, COMPANY.SIZE),
    code_and_description_of_the_legal_status: code[0],
    cep: props.cep,
    street_name: props.street_name,
    house_number: props.house_number,
    complement: props.complement,
    neighborhood_name: props.neighborhood_name,
    city_name: props.city_name,
    uf: getUfOption(props.uf),
    responsible_federative_entity:
      props.responsible_federative_entity,
    registration_status: generateOpitionsFromBackend(
      props.registration_status,
      COMPANY.CADASTRATION
    ),
    date_of_registration_status: getDateInput(
      props.date_of_registration_status
    ),
    reason_for_registration_status:
      props.reason_for_registration_status,
    special_situation: props.special_situation,
    date_of_special_situation: props.date_of_special_situation,
    main_cnae: props.main_cnae.map((item: any) => ({
      label: item.description,
      value: item.id
    })),
    secondary_cnae: props.secondary_cnae.map((item: any) => ({
      label: item.description,
      value: item.id
    })),
    is_matriz: props.is_matriz,
    secondary_email: props.secondary_email,
    main_email: props.main_email,
    cnpj: props.cnpj,
    phone_number: props.phone_number,
    type_company: props.type_company,
    bank: generateOpitionsFromBackend(
      props.bank,
      BANK as SelectOption[]
    ),
    account_type: generateOpitionsFromBackend(
      props.account_type,
      BANK_OPTIONS.TYPE_ACCOUNT
    ),
    agency: props.agency,
    account_number: props.account_number
  })
}

export async function OnSubmit(
  data: FormProps['Company'],
  id: string | undefined
) {
  const payload = {
    id: data.id,
    razao_social: data.razao_social,
    fantasy_name: data.fantasy_name,
    opening_date: data.opening_date,
    director: data.director?.value,
    witnesses: data.witnesses?.map((item) => item.value),
    state_registration: data.state_registration,
    municipal_registration: data.municipal_registration,
    size: data.size?.value,
    code_and_description_of_the_legal_status: [
      {
        id: data.code_and_description_of_the_legal_status?.value,
        name: data.code_and_description_of_the_legal_status?.label
      }
    ],
    cep: data.cep,
    street_name: data.street_name,
    house_number: data.house_number,
    complement: data.complement,
    neighborhood_name: data.neighborhood_name,
    city_name: data.city_name,
    uf: data.uf?.value,
    responsible_federative_entity: data.responsible_federative_entity,
    registration_status: data.registration_status?.value,
    date_of_registration_status: data.date_of_registration_status,
    reason_for_registration_status:
      data.reason_for_registration_status,
    special_situation: data.special_situation,
    date_of_special_situation: data.date_of_special_situation,
    main_cnae: data.main_cnae?.map((item) => ({
      id: item.value,
      description: item.label
    })),
    secondary_cnae: data.secondary_cnae?.map((item) => ({
      id: item.value,
      description: item.label
    })),
    is_matriz: data.is_matriz,
    secondary_email: data.secondary_email,
    main_email: data.main_email,
    cnpj: data.cnpj,
    phone_number: data.phone_number,
    type_company: data.type_company,
    bank: data.bank?.value,
    account_type: data.account_type?.value,
    agency: data.agency,
    account_number: data.account_number
  }

  id
    ? await api.put(routes.company.getCompany(Number(id)), payload)
    : await api.post(routes.company.list, payload)

  return toast.success({
    type: 'success',
    title: id
      ? 'Empresa Editada com Sucesso'
      : 'Empresa Criada com Sucesso',
    position: 'bottom-right'
  })
}
