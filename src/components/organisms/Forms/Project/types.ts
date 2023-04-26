import type { Option, SelectOption } from 'components/atoms'

export interface ProjectProps {
  name: Option | null
  date_start: Option | null
  date_end: Option | null
  date_end_performed: Option | null
  project_status_id: number;
  project_type_id: number;
  team_cost: Option | null
  id: Option | null;
  date_start_performed: Option | null;
  project_type: {
    id: Option | null;
    name: Option | null;
  }
  status: {
    color: {
      button_color: string;
      text_color: string
      id: number;
      name: string
    }
    id: number;
    is_active: boolean;
    colors_id: number;
    created_at: Date;
    updated_at: Date;
    name: Option | null;
  }
  permissions: any
  projects: {
    selected: ProjectAttachmentProps
    attachment: []
  }
}
interface ProjectAttachmentProps {
  project: Option | null
  input: string
}

interface FormConfigProps {
  options: {
    project_types: SelectOption[];
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
    status_projects: SelectOption[]
  }
}

export interface FormProjectProps extends ProjectProps, FormConfigProps { }


export type { SelectOption }