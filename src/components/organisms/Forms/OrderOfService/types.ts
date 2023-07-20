import type { SelectOption } from 'components/atoms'
import { TemplateProps } from 'components/organisms/Tables/types'

export interface OrderProps {
  id: number
  professional: {
    id: number
    name: string
    company: string
    cnpj: string
    extra_hour_value: number
    fixed_payment_value: string
    commission: number
  }
}

export interface OrderOfServiceProps {
  id: number
  name: string
  professional_id: number
  cnpj: number
  companies_id: number
  commission: boolean
  created_at: string
  key_document: string
  os_generation: string
  reference: string
  status: string
  updated_at: string
  avatar: string
}

interface FormConfigProps {
  options: {
    project_types: SelectOption[]
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    orderOfService: SelectOption[]
    projects: SelectOption[]
    status_projects: SelectOption[]
    usersProjects: SelectOption[]
    users: SelectOption[]
    professionals: SelectOption[]
  }
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

interface OptionsProps {
  label: string
  callback: () => void
}

export type Shelf_O_S = {
  props: OrderOfServiceProps
  config: ConfigProps
}

export interface FormOrderProps
  extends OrderOfServiceProps,
    FormConfigProps {
  professionals: OrderProfessionalProps[]
}

export interface OrderProfessionalProps {
  professional_id: number
  commission: number
  companies_id: number
}

export type { SelectOption }
