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
}

export interface HoursProps {
  id: number
  launch_date: string
  end_date: string
  type: string
  hour_quantity: number
  justification: string
  user_id: number
  project_id: number
  extra_hours_status_id: number
  status: {
    name: string
    id: number
  }
  project: {
    name: string
    id: number
  }
}
