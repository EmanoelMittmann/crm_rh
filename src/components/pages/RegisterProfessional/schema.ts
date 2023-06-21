import { object, string, number, date, array } from 'yup'

import { handleRemoveSpecialCharacters } from './logic'
const imageDefault =
  'https://www.fiscalti.com.br/wp-content/uploads/2021/02/default-user-image.png'

export const ProfessionalSchema = object({
  email: string().email().required('O Campo Email é Obrigatório'),
  job_id: number().required(),
  company_id: number().required(),
  user_type_id: number().required().default(2),
  cpf: string().transform((currentValue) =>
    handleRemoveSpecialCharacters(currentValue)
  ),
  rg: string().transform((currentValue) =>
    handleRemoveSpecialCharacters(currentValue)
  ),
  name: string().required('O Campo Nome é Obrigatório'),
  birth_date: date().transform(
    (currentValue) => new Date(currentValue)
  ),
  start_date: date().transform(
    (currentValue) => new Date(currentValue)
  ),
  weekly_hours: number().transform((currentValue) =>
    Number(currentValue)
  ),
  mounth_hours: number().transform((currentValue) =>
    Number(currentValue)
  ),
  commission: string().required(),
  function_job: string().required(),
  fixed_payment_value: number().transform((currentValue) =>
    Number(currentValue)
  ),
  telephone_number: string().transform((currentValue) =>
    handleRemoveSpecialCharacters(currentValue)
  ),
  job_type: string().required(),
  avatar: string().default(imageDefault),
  cep: string().transform((currentValue) =>
    handleRemoveSpecialCharacters(currentValue)
  ),
  street_name: string().required(),
  house_number: number().transform((currentValue) =>
    Number(currentValue)
  ),
  neighbourhood_name: string().required(),
  city_name: string().required(),
  country: string().required().default('Brasil'),
  uf: string().required(),
  projects: array(
    object({
      id: number(),
      name: string(),
      date_start: string(), //date
      extra_hours_estimated: number(),
      extra_hours_performed: number(),
      extra_hours_percent: number(),
      hours_mounths_estimated: number(),
      hours_mounths_performed: number(),
      hours_mounths_percent: number()
    })
  ).default([]),
  professional_data: object({
    bank: string().required(),
    account_type: string().required(),
    agency: number().required(),
    account_number: number().required(),
    type_person: string().required(),
    type_of_transfer: string().required()
  })
})
