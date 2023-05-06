import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import './index.css';
import { App } from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <App />
  </CssVarsProvider>
);
