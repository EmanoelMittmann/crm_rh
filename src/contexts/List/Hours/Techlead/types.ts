import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  search: string
  project_id: number | null
  date_start: string
  date_end: string
  status_id: number | null
  order: 'ASC' | 'DESC'
  orderField: string
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextTechLeadProps {
  meta: DefaultMetaProps
  professional: DetailsProfessional[]
  techLead: TechLeadProps[]
  isLoading: boolean
  filterOptions: {
    project: SelectProps['options']
    status: SelectProps['options']
  }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleSearch(text: string): void
  handleFilterProject(id: number | null): void
  handleFilterStatus(id: number | null): void
  handleOrder(field: string): void
  handleDate(start: string, end: string): void
  fetchDetailsProfessional(id: number): void
  handleApprove(
    id: number,
    status: boolean,
    justification: string
  ): void
}

export interface TechLeadProps {
  id: number
  launch_date: string
  user_id: number
  avatar: string
  user_name: string
  project_id: number
  project_name: string
  hour_quantity: number
  status_id: number
  status_name: string
}

interface Project {
  name: string
  id: number
}

interface Status {
  name: string
  id: number
}

interface User {
  name: string
  id: number
}

export interface DetailsProfessional {
  id: number
  launch_date: string
  end_date: null | string
  type: string
  hour_quantity: number
  justification: string
  created_at: string
  updated_at: string
  user_id: number
  project_id: number
  extra_hours_status_id: number
  project: Project
  status: Status
  user: User
}
