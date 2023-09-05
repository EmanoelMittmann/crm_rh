import type { SelectProps } from '@stardust-ds/react'
import { type } from 'os'

import { TeamMemberProps } from 'components/organisms/Forms/Project/types'
import { UpdateProfessionalProps } from 'components/organisms/Forms/Team/types'

import { ProfessionalProps } from '../Professional/types'
import { ProjectProps, UserProjectsProps } from 'types'
export type { ReactNode } from 'react'

export interface DefaultMetaProps {
  user_id: number | null
  job: number | null
  team: number | null
  search: string
}

export interface ContextTeamProps {
  team: TeamMemberProps[]
  projects: ProjectProps[]
  professional: ProfessionalProps[]
  isLoading: boolean
  handleOrder(field: string): void
  fetchUsers(project_id: number): void
  navigateTo(url: string): void
  removeUser(user_projects_id: number, user_id: number): void
  handleUpdateUser: (
    idProject: number,
    idUser: number,
    data: any
  ) => Promise<void>
  fetchListProject(): void
}

export interface newTeamMember {
  user_id: number
  user_project_id: number
  professional: {
    id: number
    name: string
  }
  date_start_allocation: string
  date_end_allocation: string
  job_: string
  isTechLead: boolean
  status: boolean
  avatar: string
}
