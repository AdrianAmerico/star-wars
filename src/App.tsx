import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from './app/context'
import Router from './app/pages/Router'
import { defaultTheme, GlobalStyle } from './atomic'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalContextProvider>
        <Router/>
        <GlobalStyle />
      </GlobalContextProvider>
    </ThemeProvider>
  )
}

export default App
