import { Professional } from './Professional'
import type { ContextProps } from './Professional'
import type { ContextProjectProps } from './Project'
import { Project } from './Project'
import type { ContextPropsSettings } from './Settings'
import { Settings } from './Settings'

export const List = Object.assign(
  {},
  { Professional, Project, Settings }
)

export type ListContext = {
  Professional: ContextProps
  Settings: ContextPropsSettings
  Project: ContextProjectProps
}
