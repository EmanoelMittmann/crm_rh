import { useContext, useEffect } from 'react'
import { AuthContext } from 'contexts'

export function AuthProvider({ children }: any) {
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    const ExistToken = localStorage.getItem('@UbiRH/TOKEN')
    const ExistUser = localStorage.getItem('@UbiRH/USER')

    if (!ExistToken && !ExistUser) logout()
  }, [])

  return children
}
