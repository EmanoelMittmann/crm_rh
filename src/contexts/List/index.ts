import { Professional } from './Professional'
import { Project } from './Project'

import type { ContextProps } from './Professional'
import type { ContextProjectProps } from './Project'

export const List = Object.assign({}, { Professional, Project})

export type ListContext = {
  Professional: ContextProps
  Project: ContextProjectProps
}
