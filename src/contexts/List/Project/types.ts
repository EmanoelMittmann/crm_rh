import type { SelectProps } from '@stardust-ds/react'

export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  status: null | number
  project_type: null | number
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextProjectProps {
  projects: ProjectProps[]
  isLoading: boolean
  filterOptionsType: { project_type: SelectProps['options'] }
  filterOptonsStatus: { status: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleFillProject_Type(id: number | null): void
  handleUpdateStatus(id: number): void
}

export interface ProjectProps {
  id: number
  name: string
  created_at: string
  date_start: string
  date_start_performed: string
  date_end: string
  date_end_performed: string
  project_status_id: number
  project_type: {
    id: string
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
  is_active: boolean
  team_cost: string
}
