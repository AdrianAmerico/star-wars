import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalContextProvider } from './app/context'
import { defaultTheme, GlobalStyle } from './atomic'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalContextProvider>
        <h1>Hello World</h1>
        <GlobalStyle />
      </GlobalContextProvider>
    </ThemeProvider>
  )
}

export default App
