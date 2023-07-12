import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  initialDate: string | null
  finalDate: string | null
  project_id: number | null
  status_id: number | null
  approved: string | null
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextPropsExtraHoursRh {
  extraHoursRh: PendingProps[]
  projects: ProjectExtraHoursProps[]
  statusHours: StatusHours[]
  detais: ExtraHoursRhProps[]
  meta: DefaultMetaProps
  isLoading: boolean
  filterOptions_Status: { status: SelectProps['options'] }
  filterOptions_Project: { project: SelectProps['options'] }
  filtertoAccept: { approved: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleFilterProject(id: number): void
  handleFilterStatus(id: number): void
  handleFillInitialDate(date: string): void
  handleFillFinalDate(date: string): void
  handleFillAccept(toAccept: string): void
  handleDetails(id: number): void
  fetchList(): Promise<void>
}

export interface ExtraHoursRhProps {
  type: string
  hour_quantity: number
  justification: string
  created_at: string
  updated_at: string
  user_id: number
  project_id: number
  extra_hours_status_id: number
  launch_date: string
  id: number
  user: {
    id: number
    name: string
  }
  project: {
    id: number
    name: string
  }
  status: {
    id: number
    name: string
  }
}

export interface ProjectExtraHoursProps {
  id: number
  name: string
}
export interface Release {
  end_date: string
  extra_hours_status_id: number
  hour_quantity: number
  justification: string
  launch_date: string
  project_id: string
  type: string
}

export interface PendingProps {
  id: number
  launch_date: string
  hour_quantity: number
  project_id: number
  project_name: string
  status_id: number
  status_name: string
  user_id: number
  user_name: string
  created_at: string
  justification: string
}

export interface StatusHours {
  id: number
  name: string
  color: Colors
  colors_id: number
  created_at: string
  is_active: boolean
  updated_at: string
}

export interface Colors {
  id: number
  name: string
  button_color: string
  text_color: string
}
