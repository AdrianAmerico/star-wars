import React, { createContext } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle, theme } from '../../atomic'
interface IGlobalProps {
  text: string
  onChangeText: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

const GlobalContext = createContext({} as IGlobalProps)

const GlobalContextProvider: React.FC = ({ children }) => {
  const [text, setText] = React.useState<string>('')

  const onChangeText = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setText(event.target.value)
  }

  return (
    <GlobalContext.Provider value={{ text, onChangeText }}>
      <StyledComponentsThemeProvider theme={defaultTheme}>
        <MuiThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </MuiThemeProvider>
      </StyledComponentsThemeProvider>
    </GlobalContext.Provider>
  )
}

export { GlobalContext, GlobalContextProvider }
