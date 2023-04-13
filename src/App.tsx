import { ThemeProvider } from '@stardust-ds/react'
import { useState } from 'react'
import Router from './routes/router'
import { getTheme, Scheme } from './styles/customTheme'
import { GlobalStyles } from './styles/globalStyles'
import { AuthProvider } from 'contexts'

const App = () => {
  const [theme, setTheme] = useState(getTheme('light'))

  function changeTheme(scheme: Scheme) {
    setTheme(getTheme(scheme))
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App
