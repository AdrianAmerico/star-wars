import React, { createContext } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import { defaultTheme, GlobalStyle, theme } from '../../atomic'
interface IGlobalProps {
  data: any[];
  setData: React.Dispatch<React.SetStateAction<any[]>>;
}

const GlobalContext = createContext({} as IGlobalProps)

const GlobalContextProvider: React.FC = ({ children }) => {
  const [data, setData] = React.useState<any[]>([])

  return (
    <GlobalContext.Provider value={{ data, setData }}>
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
