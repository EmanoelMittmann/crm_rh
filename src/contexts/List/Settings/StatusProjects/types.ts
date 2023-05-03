import type { SelectProps } from '@stardust-ds/react'
export type { ReactNode } from 'react'
export interface DefaultMetaProps {
  search: string
  isActive: number | null
  order: 'ASC' | 'DESC'
  orderField: string
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextPropsStatusProject {
  statusProjects: StatusProps[]
  meta: DefaultMetaProps
  filterOptions: { status: SelectProps['options'] }
  isLoading: boolean
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleOrder(field: string): void
  handleOrderField(field: string): void
  handleStatus(status: number | null): void
  handleSearch(text: string): void
  handleUpdateStatus(id: number): void
  handleCreateStatusProject(name: string, color: number): void
  handleUpdateStatusProject(
    id: number,
    name: string,
    color: string
  ): void
}

export interface StatusProps {
  id: number
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
  colors_id: number
  color: ColorProps
}

export interface ColorProps {
  id: number
  name: string
  button_color: string
  text_color: string
}
