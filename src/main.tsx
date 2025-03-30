import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {CssBaseline, ThemeProvider} from "@mui/material";
import globalTheme from "./theme/globalTheme";
import './i18n';
import {ToastContainer} from "react-toastify";
import {Provider as ReduxProvider} from 'react-redux'
import store from "./redux/store";

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={globalTheme}>
              <ReduxProvider store={store}>
                  <CssBaseline />
                  <Router>
                      <App />
                      <ToastContainer />
                  </Router>
              </ReduxProvider>

          </ThemeProvider>

          <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
      </QueryClientProvider>
  </StrictMode>,
)
