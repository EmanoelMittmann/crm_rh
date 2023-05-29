import { SelectProps } from '@stardust-ds/react'

import type { SelectOption } from 'components/atoms'

import { PIX_KEY_TYPE } from './constants'

export interface CompanyProps {
  razao_social: string
  fantasy_name: string
  cnpj: string
  is_matriz: boolean
  director: number | null
  witnesses: number[]
  opening_date: string
  state_registration: string
  municipal_registration: string
  size: string
  main_cnae: string[]
  secondary_cnae: string[]
  code_and_description_of_the_legal_status: string[]
  cep: string
  street_name: string
  house_number: number
  complement: string
  neighborhood_name: string
  city_name: string
  uf: string
  phone_number: string
  main_email: string
  secondary_email: string
  responsible_federative_entity: string
  registration_status: string
  type_company: string
  date_of_registration_status: string
  date_of_special_situation: string
  reason_for_registration_status: string
  special_situation: string
  account_number: number
  account_type: string
  agency: string
  bank: string
}

interface FormConfigProps {
  options: IOptions
}

export interface IOptions {
  owners: SelectProps[]
  banks: SelectProps[]
  uf: SelectProps[]
  cnae: SelectProps[]
}

export interface FormProps extends CompanyProps, FormConfigProps {}

export type MasksTypesOfPixProps =
  (typeof PIX_KEY_TYPE)[keyof typeof PIX_KEY_TYPE]

export type { SelectOption }
