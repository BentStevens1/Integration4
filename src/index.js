import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <App />
      {/*  <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);


reportWebVitals();