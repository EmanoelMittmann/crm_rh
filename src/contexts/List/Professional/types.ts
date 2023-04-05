import type { SelectProps } from '@stardust-ds/react'

export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  job_id: null | number
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextProps {
  professionals: ProfessionalProps[]
  meta: DefaultMetaProps
  isLoading: boolean
  filterOptions: { job: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleFillJob(id: number | null): void
  handleOrder(field: string): void
  handleUpdateStatus(id: number): void
}

export interface ProfessionalProps {
  id: number
  avatar: string
  name: string
  job: { name: string }
  email: string
  telephone_number: string
  city_name: string
  is_active: boolean
}
