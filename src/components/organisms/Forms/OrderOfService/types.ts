import type { Option, SelectOption } from 'components/atoms'
import { TemplateProps } from 'components/organisms/Tables/types'

export interface OrderOfServiceProps {
  id: number
  name: string
  professional_id: number
  cnpj: number
  companies_id: number
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
    FormConfigProps {}

export type { SelectOption }
