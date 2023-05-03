import { Professional } from './Professional'
import type { ContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import { Settings } from './Settings/Jobs'
import type { ContextPropsSettings } from './Settings/Jobs'

export const List = Object.assign(
  {},
  { Professional, Project, Settings }
)

export type ListContext = {
  Professional: ContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
}
