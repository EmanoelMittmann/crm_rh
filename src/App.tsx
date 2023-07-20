import { useState } from 'react'

import { ThemeProvider, ToastContainer } from '@stardust-ds/react'
import { AuthProvider } from 'contexts'

import Router from './routes/router'
import { getTheme, Scheme } from './styles/customTheme'
import { GlobalStyles } from './styles/globalStyles'

const App = () => {
  const [theme, setTheme] = useState(getTheme('light'))

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <AuthProvider>
        <Router />
      </AuthProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
