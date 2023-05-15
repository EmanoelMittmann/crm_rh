import { Professional } from './Professional'
import type { ContextProps as ProfessionalContextProps } from './Professional'

export const List = Object.assign({}, { Professional })

export type ListContext = {
  Professional: ProfessionalContextProps
}
