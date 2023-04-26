import type { Option, SelectOption } from 'components/atoms'

export interface ProjectProps {
  name: string;
  date_start: string;
  date_end: string;
  date_end_performed: string;
  project_status_id: number;
  project_type_id: number;
  team_cost: string;
  id: string;
  date_start_performed: string;
  project_type: {
    id: string;
    name: string;
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
  projects_type:{
    selected: ProjectTypeProps
  }
  
}

interface ProjectTypeProps{
  project_type: Option | null
  input: string
}


interface FormConfigProps {
  options: {
    permissions: SelectOption[]
    userTypes: SelectOption[]
    jobs: SelectOption[]
    projects: SelectOption[]
    projects_type:SelectOption[]
  }
}

export interface FormProps extends ProjectProps, FormConfigProps { }


export type { SelectOption }