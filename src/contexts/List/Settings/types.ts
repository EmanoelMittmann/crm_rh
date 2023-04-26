import type { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  isActive: string
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
  handleStatus(status: number): void
  handleUpdateStatus(id: number): void
  handleOrder(field: string): void
}

export interface JobsProps {
  id: number
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
}
