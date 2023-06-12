import { SelectProps } from '@stardust-ds/react'

import type { SelectOption } from 'components/atoms'

import { PIX_KEY_TYPE } from './constants'
import { Option } from 'types'

export interface CompanyProps {
  id: number
  razao_social: string
  fantasy_name: string
  cnpj: string
  is_matriz: boolean
  director: Option | null
  witnesses: Option[] | null
  opening_date: string
  state_registration: string
  municipal_registration: string
  size: Option | null
  main_cnae: Option[] | null
  secondary_cnae: Option[] | null
  code_and_description_of_the_legal_status: Option | null
  cep: string
  street_name: string
  house_number: number
  complement: string
  neighborhood_name: string
  city_name: string
  uf: Option | null
  phone_number: string
  main_email: string
  secondary_email: string
  responsible_federative_entity: string
  registration_status: Option | null
  type_company: string
  date_of_registration_status: string
  date_of_special_situation: string
  reason_for_registration_status: string
  special_situation: string
  account_number: number
  account_type: Option | null
  agency: string
  bank: Option | null
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
