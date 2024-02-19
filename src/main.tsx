import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/defaultTheme'

import { GlobalStyles } from './styles/globalStyles'

import { Home } from './pages/home'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
    <GlobalStyles/>
      <Home/>
    </ThemeProvider>
  </React.StrictMode>,
)
