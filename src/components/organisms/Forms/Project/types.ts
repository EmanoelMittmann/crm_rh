import type { Option, SelectOption } from 'components/atoms'
import { TemplateProps } from 'components/organisms/Tables/types'

export interface TeamMemberProps {
  user_id: number
  job_: number
  name: string
  extra_hours_estimated: number
  hours_mounths_estimated: number
  hours_mounths_performed: number
  extra_hours_performed: number
  is_active: boolean
  avatar: string
  status: boolean
  jobs: {
    id: number
    name: Option | null
  }
  professional: {
    id: number
    name: Option | null
    status: boolean
    avatar: string
  }
}

export interface ProjectProps {
  team: TeamMemberProps[]
  id: number
  name: string
  date_start: string
  date_end: string
  date_end_performed: string
  project_status_id: Option | null
  project_type_id: Option | null
  team_cost: string
  date_start_performed: string
  project_type: {
    id: number
    name: string
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
    name: string
  }
  permissions: any
  projects: {
    selected: ProjectAttachmentProps
    attachment: []
  }
  jobs: {
    id: Option | null
    name: Option | null
  }

  professional: {
    status: []
    avatar: Option | null
    name: Option | null
    id: Option | null
  }
  usersProjects: {
    user_id: Option | null
    extra_hours_estimated: number
    extra_hours_performed: Option | null
    hours_mounths_estimated: Option | null
    hours_mounths_performed: Option | null
    avatar: Option | null
    name: Option | null
    status: Option | null
    job_: Option | null
    job_id: Option | null
    job: {
      id: Option | null
      name: Option | null
    }
  }
}
interface ProjectAttachmentProps {
  project: Option | null
  input: string
}
export interface UserProjectsProps {
  user_id: number
  extra_hours_estimated: string
  extra_hours_performed: string
  hours_mounths_estimated: string
  hours_mounths_performed: string
  avatar: string
  name: string
  status: string
  job_: string
  job_id: string
  job: {
    id: number
    name: string
  }
}
interface FormConfigProps {
  options: {
    filter(arg0: (option: any) => boolean): SelectOption[]
    project_types: SelectOption[]
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
    status_projects: SelectOption[]
    usersProjects: SelectOption[]
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
export type ShelfUserProject = {
  props: TeamMemberProps
  config: ConfigProps
}

export interface FormProjectProps
  extends ProjectProps,
    FormConfigProps {}

export type { SelectOption }
