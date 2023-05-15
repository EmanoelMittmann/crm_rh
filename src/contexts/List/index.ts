import { Professional } from './Professional'
import type { ContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import { Settings } from './Settings/Jobs'
import type { ContextPropsSettings } from './Settings/Jobs'
import { ContextPropsStatusProject } from './Settings/StatusProjects'
import { Status } from './Settings/StatusProjects'
import { Types } from './Settings/TypesProjects'
import { ContextPropsTypeProject } from './Settings/TypesProjects'
import { ContextUserProps } from './User/types'
import { UserProjects } from './User'


export const List = Object.assign(
  {},
  { Professional, Project, Settings, Status, Types, UserProjects }
)

export type ListContext = {
  Professional: ContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
  Status: ContextPropsStatusProject
  Types: ContextPropsTypeProject
  UserProjects:ContextUserProps
}
