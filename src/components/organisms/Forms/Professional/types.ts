import type { Option, SelectOption } from 'components/atoms'
import { ProjectPropsHours } from 'components/organisms/Tables/Attachment/types'

import { PIX_KEY_TYPE } from './constants'

export interface ProfessionalProps {
  email: string
  name: string
  avatar: string
  birth_date: string
  cep: string
  is_active: boolean
  city_name: string
  commission: boolean
  complement: string
  country: string
  cpf: string
  password: string
  extra_hour_activated: boolean
  extra_hour_limit: string
  extra_hour_value: number
  fixed_payment_value: string
  company_id: number
  house_number: number
  job_id: Option | null
  job_type: Option | null
  limited_extra_hours: number
  mounth_hours: number
  rg: string
  start_date: string
  street_name: string
  telephone_number: string
  uf: Option | null
  user_type_id: number
  variable1: number
  variable2: string
  weekly_hours: number
  neighbourhood_name: string
  tools: string[]
  function_job:
    | 'Technical Leader'
    | 'Technical Lead and Developer'
    | 'Developer'
  professional_data: {
    account_number: string
    type_of_transfer: Option | null
    pix_key_type: Option | null
    pix_key: string
    type_person: Option | null
    account_type: Option | null
    agency: string
    bank: Option | null
    cnpj: string
    company_cep: string
    company_city_name: string
    company_complement: string
    company_email: string
    company_house_number: number
    company_neighborhood_name: string
    company_phone_number: string
    company_street_name: string
    fantasy_name: string
    razao_social: string
    uf_company: Option | null
  }
  permissions: any
  projects: {
    selected: ProjectAttachmentProps
    attachment: ProjectPropsHours[]
  }
}

interface ProjectAttachmentProps {
  project: Option | null
  input1: string
  input2: string
}

interface FormConfigProps {
  options: {
    banks: SelectOption[]
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
    companies: SelectOption[]
    payingCompanies: SelectOption[]
    payingCompany: SelectOption
  }
}

export interface FormProps
  extends ProfessionalProps,
    FormConfigProps {}

export type getMaskFromTypePIXProps =
  (typeof PIX_KEY_TYPE)[keyof typeof PIX_KEY_TYPE]

export type { SelectOption }
