import { ReactNode, useEffect, useState } from 'react'

import { LocalStorageKeys } from 'config'
import jwt_decode from 'jwt-decode'

import api from 'api'

import { AuthContext } from '.'
import type { AuthProps } from './types'
import { IJWTDecodeGoogle } from 'types'

const DEFAULT_VALUE = {
  user: {
    avatar: '',
    name: '',
    user_type_id: 0
  }
} as AuthProps

export function AuthProvider({ children }: { children: ReactNode }) {
  const [auth, setAuth] = useState(DEFAULT_VALUE)

  const isLogged = !!auth.token

  const signIn = async ({ credential }: CredentialResponse) => {
    const { email, sub, picture }: IJWTDecodeGoogle = jwt_decode(
      credential as string
    )

    try {
      const { data } = await api.post('/auth', {
        google_email: email,
        google_id: sub,
        access_token: credential
      })
      const token = data.token.token
      const user = {
        permissions: data.permissions[0],
        avatar: picture,
        isTechLead: data.isTechLead,
        name: data.data[0].name,
        user_type_id: data.data[0].user_type_id
      }

      localStorage.setItem(
        LocalStorageKeys.TOKEN,
        JSON.stringify(token)
      )
      localStorage.setItem(
        LocalStorageKeys.USER,
        JSON.stringify(user)
      )

      setAuth({ user, token })

      window.location.href = '/home'
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const logout = () => {
    window.location.href = '/'
    localStorage.clear()
    setAuth(DEFAULT_VALUE)
  }

  useEffect(() => {
    if (isLogged) return

    const ExistToken = localStorage.getItem(
      LocalStorageKeys.TOKEN
    ) as string
    const ExistUser = localStorage.getItem(
      LocalStorageKeys.USER
    ) as string

    if (!ExistToken && !ExistUser) return

    setAuth({
      user: JSON.parse(ExistUser),
      token: JSON.parse(ExistToken)
    })
  }, [isLogged])

  return (
    <AuthContext.Provider
      value={{ ...auth, isLogged, signIn, logout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
