import { LoginTemplate } from 'components/templates'

import useContextLogin from './context'

const Login = () => {
  const { buttonRef } = useContextLogin()

  return <LoginTemplate {...{ buttonRef }} />
}

export default Login
