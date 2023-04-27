import type { Option, SelectOption } from 'components/atoms'
import { TemplateProps } from 'components/organisms/Tables/types'

export interface ProjectProps {
  name: Option | null
  date_start: Option | null
  date_end: Option | null
  date_end_performed: Option | null
  project_status_id: number
  project_type_id: number
  team_cost: Option | null
  id: Option | null
  date_start_performed: Option | null
  project_type: {
    id: Option | null
    name: Option | null
  }
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
    name: Option | null
  }
  permissions: any
  projects: {
    selected: ProjectAttachmentProps
    attachment: []
  }
  jobs :{
    id: number
    name: Option | null
  }
  user_projects:{
    user_id: Option | null,
    extra_hours_estimated: Option | null ,
    extra_hours_performed: Option | null,
    hours_mounths_estimated: Option | null,
    hours_mounths_performed: Option | null,
    avatar: Option | null,
    name: Option | null,
    status: Option | null ,
    job_: Option | null,
    job_id: Option | null,
    job:{
      id: number
      name: Option | null
    }
  }
  professional:{
    name: Option | null,
    id: Option | null,
  }
}
interface ProjectAttachmentProps {
  project: Option | null
  input: string
}

interface FormConfigProps {
  options: {
    project_types: SelectOption[]
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
    status_projects: SelectOption[]
    user_projects_: SelectOption[]
    professionals: SelectOption[]
  }
}
interface OptionsProps {
  label: string
  callback: () => void
}

interface ConfigProps extends TemplateProps {
  options: OptionsProps[]
}

export type ShelfProjectsProps = {
  props: ProjectProps
  config: ConfigProps
}


export interface FormProjectProps
  extends ProjectProps,
    FormConfigProps {}

export type { SelectOption }
