
import { UserProjectsProps } from 'types'

export type { ReactNode } from 'react'

export interface ContextUserProps {
  usersProjects: UserProjectsProps[]
  isLoading: boolean
  handleOrder(field: string): void
  navigateTo(url: string): void
  // handleFillUser(id: number | null): void
  // handleUpdateUser(user_id: number): void

}
