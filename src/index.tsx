import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import store from './slices';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  </Provider>
);
