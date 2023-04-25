import type { Option, SelectOption } from 'components/atoms'

export interface ProjectProps {
  name: string
  date_start: string
  date_end: string
  date_end_performed: string
  project_status_id: number
  project_type_id: number
  team_cost: string
  id: string
  date_start_performed: string
  status: {
    color: {
      button_color: string
      text_color: string
      id: number
      name: string
    }
    id: number
    is_active: boolean
    colors_id: number
    created_at: Date
    updated_at: Date
    name: string
  }
}

interface FormConfigProps {
  options: {
    banks: SelectOption[]
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
  }
}

export interface FormProjectProps
  extends ProjectProps,
    FormConfigProps {}

export type { SelectOption }
