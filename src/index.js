import React from 'react';
import ReactDOM from 'react-dom/client';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import './index.css';
import { App } from './components/App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { DataImagesContextProvider, SelectedItemContextProvider } from './service/serviceContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <SelectedItemContextProvider>
    <DataImagesContextProvider>
      <CssVarsProvider>
        <App />
      </CssVarsProvider>
    </DataImagesContextProvider>
  </SelectedItemContextProvider>
);
