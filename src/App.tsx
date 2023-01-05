import { ThemeProvider } from '@stardust-ds/react';
import { useState } from 'react';
import Router from './routes/router';
import { getTheme, Scheme } from './styles/customTheme';
import { GlobalStyles } from './styles/globalStyles';
import { Provider } from 'react-redux';
import store from './redux/store/store';

const App = () => {
  const [theme, setTheme] = useState(getTheme('light'));

  function changeTheme(scheme: Scheme) {
    setTheme(getTheme(scheme));
  }

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <Router />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
