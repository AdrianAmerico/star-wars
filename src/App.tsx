import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { AppContainer } from './app/components'
import { GlobalContextProvider } from './app/context'
import { defaultTheme, GlobalStyle, theme } from './atomic'
import Router from './app/pages/Router'

const App = () => {
  return (
    <StyledComponentsThemeProvider theme={defaultTheme}>
      <MuiThemeProvider theme={theme}>
        <GlobalContextProvider>
          <AppContainer>
            <Router />
            <GlobalStyle />
          </AppContainer>
        </GlobalContextProvider>
      </MuiThemeProvider>
    </StyledComponentsThemeProvider>
  )
}

export default App
