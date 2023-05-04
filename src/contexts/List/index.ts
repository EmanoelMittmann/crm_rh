import { Professional } from './Professional'
import type { ContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import { Settings } from './Settings/Jobs'
import type { ContextPropsSettings } from './Settings/Jobs'
import { ContextPropsStatusProject } from './Settings/StatusProjects'
import { Status } from './Settings/StatusProjects'

export const List = Object.assign(
  {},
  { Professional, Project, Settings, Status }
)

export type ListContext = {
  Professional: ContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
  Status: ContextPropsStatusProject
}
