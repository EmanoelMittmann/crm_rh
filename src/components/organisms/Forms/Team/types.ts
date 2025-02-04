import type { Option, SelectOption } from 'components/atoms'
import { TemplateProps } from 'components/organisms/Tables/types'

export interface TeamMemberProps {
  user_id: number
  user_projects_id: number
  job_: string
  job: string
  job_id: number
  name: string
  isTechLead: boolean
  extra_hours_estimated: number
  hours_mounths_estimated: number
  hours_mounths_performed: number
  extra_hours_performed: number
  extra_hours_percent: number
  hours_mounths_percent: number
  date_end_allocation: string
  date_start_allocation: string
  is_active: boolean
  avatar: string
  status: boolean
  jobs: {
    id: Option | null
    name: Option | null
  }
  professional: {
    id: Option | null
    name: Option | null
    status: boolean
    avatar: string
  }
}

export interface TeamProps {
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
  isTechLead: boolean
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
  users: {
    team: TeamMemberProps[]
    user_id: number
    user_project_id: number
    job_: string
    job: string
    job_id: number
    name: string
    isTechLead: boolean
    date_start_allocation: string | undefined
    extra_hours_estimated: number
    hours_mounths_estimated: number | null
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
      is_active: boolean
      avatar: string
    }
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

export type ShelfUserProject = {
  props: TeamMemberProps
  config: ConfigProps
}

export interface UpdateProfessionalProps {
  hours_mounths_estimated: number
  extra_hours_estimated: number
  hours_mounths_performed: number
  extra_hours_performed: number
  date_end_allocation: string | null
  user_projects_id: number
  date_start_allocation?: string | undefined
  isTechLead: boolean
  job_: string
  status: boolean
  user_id: number
}

export interface FormTeamProps extends TeamProps, FormConfigProps {}

export type { SelectOption }
