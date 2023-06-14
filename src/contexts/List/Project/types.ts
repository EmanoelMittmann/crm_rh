import type { SelectProps } from '@stardust-ds/react'
import { ProjectProps } from 'types'
export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  id: number | null
  status: number | null
  project_type: number | null
  project_type_id: number | null
  type_project: number | null
  project_status_id: number | null
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextProjectProps {
  meta: DefaultMetaProps
  projects: ProjectProps[]
  isLoading: boolean
  filterOptionsType: { project_type: SelectProps['options'] }
  filterOptionsStatus: { status: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleFillProject_Type(id: number | null): void
  handleFillProject_Status(id: number | null): void
  handleUpdateStatus(projectId: number, statusId: string): void
}
