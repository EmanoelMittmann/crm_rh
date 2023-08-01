import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  search: string | null
  status_id: number | null
  project_id: number | null
  order: 'ASC' | 'DESC'
  date_start: string
  date_end: string
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextHoursProps {
  meta: DefaultMetaProps
  releases: any[]
  details: HistoricProps[]
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
  handleSearch(search: string): void
  handleOrder(): void
  handleDate(start: string, end: string): void
  handleStatus(id: number | null): void
  handleProject(id: number | null): void
  handleDetails(id: number): void
}

export interface HoursProps {
  id: number
  name: string
  launch_date: string
  end_date: string
  created_at: string
  type: string
  hour_quantity: number
  justification: string
  user_id: number
  project_id: number
  extra_hours_status_id: number
  status: Status
  project: Project
}

interface Status {
  id: number
  name: string
}

interface Project {
  id: number
  name: string
}

export interface HistoricProps {
  id: number
  created_at: string
  end_date: string
  extra_hours_status_id: number
  hour_quantity: number
  justification: string
  launch_date: string
  type: string
  updated_at: string
  user_id: number
  project_id: number
  status: Status
  project: Project
  historic: Historic[]
}

interface Historic {
  id: number
  created_at: string
  updated_at: string
  extra_hours_status_id: number
  release_id: number
  justification: string
  status: Status
}
interface Status {
  id: number
  name: string
}
