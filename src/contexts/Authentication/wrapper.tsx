import { useContext, useEffect } from 'react'

import { AuthContext } from '.'

export function AuthWrapper({ children }: { children: JSX.Element }) {
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    const ExistToken = localStorage.getItem('@UbiRH/TOKEN')
    const ExistUser = localStorage.getItem('@UbiRH/USER')

    if (!ExistToken && !ExistUser) logout()
  }, [])

  return children
}
