import { createContext } from 'react'

import type { AuthContextProps } from './types'

export const AuthContext = createContext({} as AuthContextProps)

export { AuthProvider } from './provider'
export { AuthWrapper } from './wrapper'
