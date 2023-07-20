import type { SelectProps } from '@stardust-ds/react'

import { UserProjectsProps } from 'types'
export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  user_id: number | null
  job: number | null
  team: number | null
  search: string
}

export interface ContextTeamProps {
  meta: DefaultMetaProps
  team: UserProjectsProps[]
  isLoading: boolean
  filterOptionsTeam: { users: SelectProps['options'] }
  navigateTo(url: string): void

  handleUpdateUser(id: number, name: string): void
}
