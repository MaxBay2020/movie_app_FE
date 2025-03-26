import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {ThemeProvider} from "@mui/material";
import globalTheme from "./theme/globalTheme";

const queryClient = new QueryClient()


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={globalTheme}>
              <Router>
                  <App />
              </Router>
          </ThemeProvider>

          <ReactQueryDevtools initialIsOpen={false} position='bottom-left'/>
      </QueryClientProvider>
  </StrictMode>,
)
