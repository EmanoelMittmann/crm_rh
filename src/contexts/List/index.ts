import { Professional } from './Professional'
import type { ContextProps } from './Professional'
import type { ContextPropsSettings } from './Settings'
import { Settings } from './Settings'

export const List = Object.assign({}, { Professional, Settings })

export type ListContext = {
  Professional: ContextProps
  Settings: ContextPropsSettings
}
