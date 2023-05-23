import type { SelectProps } from '@stardust-ds/react'
import { JobsProps } from 'components/organisms/Tables/Jobs/types'
import {UserProjectsProps } from 'types'
export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  id: number | null
  job: number | null
  users: number | null
  search: string
  orderField: string | null
  order: 'ASC' | 'DESC'
  paginate: {
    current_page: number
    last_page: number
  }
}

export interface ContextUsersProps {
  meta: DefaultMetaProps
  users: UserProjectsProps[]
  isLoading: boolean
  filterOptionsUserType: { users: SelectProps['options'] }
  paginate: {
    current_page: number
    last_page: number
    setCurrent_page(page: number): void
  }
  navigateTo(url: string): void
  handleSearch(text: string): void
  handleOrder(field: string): void
  handleFillProject_User(id: number | null): void
  handleUpdateUser(id: number, name: string): void
}
