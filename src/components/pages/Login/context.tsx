import { useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'contexts'

export default () => {
  const { isLogged, signIn } = useContext(AuthContext)
  const navigate = useNavigate()
  const buttonRef = useRef<HTMLDivElement>(null)

  const handleSign = (user: CredentialResponse) => signIn(user)

  useEffect(() => {
    if (isLogged) navigate('/home')
  }, [isLogged])

  useEffect(() => {
    if (
      typeof window === 'undefined' ||
      !window?.google ||
      !buttonRef.current
    )
      return

    try {
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID as string,
        callback: handleSign
      })
      window.google.accounts.id.renderButton(buttonRef.current, {
        size: 'large',
        type: 'standard'
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return { buttonRef }
}
