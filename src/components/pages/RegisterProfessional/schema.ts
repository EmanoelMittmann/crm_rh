import { object, string, number, date, array, mixed } from 'yup'

import { handleRemoveSpecialCharacters } from './logic'
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
const imageDefault =
  'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'

export const ProfessionalSchema = object({
  email: string().email().required(validation.required),
  job_id: mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  company_id: number().required(validation.required),
  user_type_id: number().required(validation.required).default(2),
  cpf: string()
    .transform((currentValue) =>
      handleRemoveSpecialCharacters(currentValue)
    )
    .required(validation.required),
  rg: string()
    .transform((currentValue) =>
      handleRemoveSpecialCharacters(currentValue)
    )
    .required(validation.required),
  name: string().required(validation.required),
  birth_date: string().required(validation.required),
  start_date: string().required(validation.required),
  weekly_hours: number()
    .typeError(validation.required)
    .required(validation.required),
  mounth_hours: number()
    .typeError(validation.required)
    .required(validation.required),
  commission: string().required(validation.required),
  fixed_payment_value: number()
    .typeError(validation.required)
    .required(validation.required),
  telephone_number: string()
    .transform((currentValue) =>
      handleRemoveSpecialCharacters(currentValue)
    )
    .required(validation.required),
  job_type: mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  cep: string()
    .transform((currentValue) =>
      handleRemoveSpecialCharacters(currentValue)
    )
    .required(validation.required),
  street_name: string().required(validation.required),
  house_number: number()
    .typeError(validation.required)
    .required(validation.required),
  neighbourhood_name: string().required(validation.required),
  city_name: string().required(validation.required),
  country: string().required(validation.required).default('Brasil'),
  uf: mixed().test({
    name: 'required',
    message: validation.required,
    test: (value) => value && value.value !== '' && value.label !== ''
  }),
  professional_data: object({
    cnpj: string().required(validation.required),
    company_cep: string().required(validation.required),
    company_city_name: string().required(validation.required),
    company_email: string().required(validation.required),
    company_house_number: number()
      .typeError(validation.required)
      .required(validation.required),
    company_neighborhood_name: string().required(validation.required),
    company_phone_number: string().required(validation.required),
    company_street_name: string().required(validation.required),
    fantasy_name: string().required(validation.required),
    razao_social: string().required(validation.required),
    uf_company: mixed().test({
      name: 'required',
      message: validation.required,
      test: (value) =>
        value && value.value !== '' && value.label !== ''
    }),
    bank: mixed().test({
      name: 'required',
      message: validation.required,
      test: (value) =>
        value && value.value !== '' && value.label !== ''
    }),
    account_type: mixed().test({
      name: 'required',
      message: validation.required,
      test: (value) =>
        value && value.value !== '' && value.label !== ''
    }),
    agency: number()
      .typeError(validation.required)
      .required(validation.required),
    account_number: string().required(validation.required),
    type_person: mixed().test({
      name: 'required',
      message: validation.required,
      test: (value) =>
        value && value.value !== '' && value.label !== ''
    }),
    type_of_transfer: mixed().test({
      name: 'required',
      message: validation.required,
      test: (value) =>
        value && value.value !== '' && value.label !== ''
    })
  }),
  options: object({
    payingCompanies: array().min(1, validation.required)
  })
})
