import type { Option, SelectOption } from 'components/atoms'

export interface ProjectProps {
  name: string;
  date_start: string;
  date_end: string;
  date_end_performed: string;
  project_status_id: number;
  project_type_id: number;
  team_cost: string;
  id: Option | null;
  date_start_performed: string;
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
    name: string;
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
  }
}

export interface FormProjectProps extends ProjectProps, FormConfigProps { }


export type { SelectOption }