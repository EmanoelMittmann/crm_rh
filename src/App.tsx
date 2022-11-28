import { ThemeProvider } from '@stardust-ds/react';
import { useState } from 'react'
import Router from './routes/router'
import { getTheme, preferredMode, Scheme } from './styles/customTheme';
import { GlobalStyles } from './styles/globalStyles';

const App = () => {
  const [theme, setTheme] = useState(getTheme(preferredMode));

  function changeTheme(scheme: Scheme) {
    setTheme(getTheme(scheme));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <Router/>
    </ThemeProvider>
  );
};

export default App;
