import { SelectProps } from '@stardust-ds/react'

export interface DefaultMetaProps {
  search: string
  isActive: number | null
  orderField: string
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextPropsTypeProject {
  typesProjects: TypesProps[]
  meta: DefaultMetaProps
  filterOptions: { status: SelectProps['options'] }
  isLoading: boolean
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  handleOrder(field: string): void
  handleStatus(status: number | null): void
  handleSearch(search: string): void
  handleUpdateStatus(id: number): void
  handleCreateType(name: string): void
  handleUpdateType(id: number, name: string): void
}

export interface TypesProps {
  id: number
  name: string
  is_active: boolean
  created_at: string
  updated_at: string
}
