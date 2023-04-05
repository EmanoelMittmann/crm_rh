import { Professional } from './Professional'

import type { ContextProps } from './Professional'

export const List = Object.assign({}, { Professional })

export type ListContext = {
  Professional: ContextProps
}
