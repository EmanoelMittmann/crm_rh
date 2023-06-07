import * as yup from 'yup'

import { SelectOption } from './types'

export const validation = {
  required: 'Campo Obrigatório',
  min: (
    value: number,
    min: number,
    message: string = 'Campo inválido'
  ) => {
    if (value < min) return message

    return true
  }
}

export function GenerateOption(data: Object): SelectOption[] {
  return Object.values(data).map((key: string) => ({
    label: key,
    value: key
  }))
}

export const validationSchema = yup.object().shape({
  razao_social: yup.string().required(validation.required),
  fantasy_name: yup.string().required(validation.required),
  cnpj: yup.string().required(validation.required),
  is_matriz: yup.boolean(),
  director: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  witnesses: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  opening_date: yup.string().required(validation.required),
  state_registration: yup.string().nullable(),
  municipal_registration: yup.string().nullable(),
  size: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  main_cnae: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  secondary_cnae: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  code_and_description_of_the_legal_status: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  cep: yup.string().required(validation.required),
  street_name: yup.string().required(validation.required),
  house_number: yup.number(),
  neighborhood_name: yup.string().required(validation.required),
  city_name: yup.string().required(validation.required),
  uf: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  phone_number: yup.string().required(validation.required),
  main_email: yup.string().required(validation.required),
  secondary_email: yup.string().nullable(),
  responsible_federative_entity: yup.string().nullable(),
  registration_status: yup.mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  type_company: yup.string().required(validation.required),
  date_of_registration_status: yup
    .string()
    .required(validation.required),
  date_of_special_situation: yup.string().nullable(),
  reason_for_registration_status: yup.string().nullable(),
  special_situation: yup.string().nullable(),
  account_number: yup.string().nullable(),
  account_type: yup.array().nullable(),
  agency: yup.string().nullable(),
  bank: yup.array().nullable()
})
