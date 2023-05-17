import { Company, ContextCompanyProps } from './Company'
import { Professional } from './Professional'
import type { ContextProps as ProfessionalContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import { Settings } from './Settings/Jobs'
import type { ContextPropsSettings } from './Settings/Jobs'
import { ContextPropsStatusProject } from './Settings/StatusProjects'
import { Status } from './Settings/StatusProjects'
import { Types } from './Settings/TypesProjects'
import { ContextPropsTypeProject } from './Settings/TypesProjects'
import { UserProjects } from './User'
import { ContextUserProps } from './User/types'

export const List = Object.assign(
  {},
  {
    Professional,
    Project,
    Settings,
    Status,
    Types,
    Company,
    UserProjects
  }
)

export type ListContext = {
  Professional: ProfessionalContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
  Status: ContextPropsStatusProject
  Types: ContextPropsTypeProject
  UserProjects: ContextUserProps
  Companys: ContextCompanyProps
}
