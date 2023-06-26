import { Company, ContextCompanyProps } from './Company'
import {
  Notes,
  ContextNotesProps,
  ContextUserNotesProps,
  UserNotes
} from './Notes'
import { Professional } from './Professional'
import type { ContextProps as ProfessionalContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import { Reports } from './Reports'
import { ContextReportsProps } from './Reports/types'
import { Settings } from './Settings/Jobs'
import type { ContextPropsSettings } from './Settings/Jobs'
import { ContextPropsStatusProject } from './Settings/StatusProjects'
import { Status } from './Settings/StatusProjects'
import { Types } from './Settings/TypesProjects'
import { ContextPropsTypeProject } from './Settings/TypesProjects'
import { ContextTeamProps } from './Team'
import { Team } from './Team'
import { ContextPropsProfessionalOS } from './OrderOfServiceProfessional'
import { ContextOrderOfServiceProps } from './OrderOfService'
import { OrderOfService } from './OrderOfService'
import { OrderOfServiceprofessionalOS } from './OrderOfServiceProfessional'

export const List = Object.assign(
  {},
  {
    Professional,
    Project,
    Settings,
    Status,
    Types,
    Company,
    Team,
    Notes,
    UserNotes,
    OrderOfService,
    Reports,
    OrderOfServiceprofessionalOS
  }
)

export type ListContext = {
  Professional: ProfessionalContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
  Status: ContextPropsStatusProject
  Types: ContextPropsTypeProject
  Companys: ContextCompanyProps
  Team: ContextTeamProps
  Notes: ContextNotesProps
  Reports: ContextReportsProps
  UserNotes: ContextUserNotesProps
  OrderOfService: ContextOrderOfServiceProps
  OrderOfServiceprofessionalOS: ContextPropsProfessionalOS
}
