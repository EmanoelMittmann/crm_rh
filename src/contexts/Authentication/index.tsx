import { createContext, useState, useEffect, ReactNode } from 'react'
import jwt_decode from 'jwt-decode'
import api from 'api'
import { LocalStorageKeys } from 'config'
import type { AuthContextProps, AuthProps } from './types'

const DEFAULT_VALUE = {} as AuthProps
export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(DEFAULT_VALUE)

  const isLogged = !!auth.token

  const signIn = async ({ credential }: CredentialResponse) => {
    const { email, sub, picture }: IJWTDecodeGoogle = jwt_decode(credential as string)

    try {
      const { data } = await api.post('/auth', {
        google_email: email,
        google_id: sub,
        access_token: credential,
      })

      const token = data.token.token
      const user = { avatar: picture, user_type_id: data.data[0].user_type_id }

      localStorage.setItem(LocalStorageKeys.TOKEN, JSON.stringify(token))
      localStorage.setItem(LocalStorageKeys.USER, JSON.stringify(user))

      setAuth({ user, token })

      window.location.href = '/home'
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const logout = () => {
    localStorage.clear()
    setAuth(DEFAULT_VALUE)
    window.location.href = '/'
  }

  useEffect(() => {
    if (isLogged) return

    const ExistToken = localStorage.getItem(LocalStorageKeys.TOKEN) as string
    const ExistUser = localStorage.getItem(LocalStorageKeys.USER) as string

    if (!ExistToken && !ExistUser) return

    setAuth({ user: JSON.parse(ExistUser), token: JSON.parse(ExistToken) })
  }, [])

  return <AuthContext.Provider value={{ ...auth, isLogged, signIn, logout }}>{children}</AuthContext.Provider>
}
