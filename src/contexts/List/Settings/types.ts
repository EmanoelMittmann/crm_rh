import type { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  isActive: number | null
  search: string
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextPropsSettings {
  jobs: JobsProps[]
  meta: DefaultMetaProps
  isLoading: boolean
  filterOptions: { status: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleSearch(text: string): void
  handleUpdateStatus(id: number): void
  handleUpdateJob(id: number, name: string): void
  handleStatus(status: number | null): void
  handleOrder(field: string): void
  handleJob(name: string): void
}

export interface JobsProps {
  id: number
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
}
