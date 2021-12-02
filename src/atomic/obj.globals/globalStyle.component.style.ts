/* eslint-disable import/no-duplicates */
/* eslint-disable camelcase */
import 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { fontFamily, fontSize, lineHeight, BACKGROUND } from '../obj.constants'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secundary: string;
      background_primary: string;
      background_secundary: string;
      text: string;
      red: string;
      black: string;
      black_secondary: string;
      green: string;
      lightGray: string;
      gray: string;
      darkGray: string;
      yellow: string;
      grayMedium: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
    background: ${(props) => props.theme.colors.background_primary};
    font-size: ${fontSize.small};
    color: ${(props) => props.theme.colors.text};
    font-family: ${fontFamily};
    line-height: ${lineHeight.small};
    max-width: 100vw;
    min-height: 100vh;
    background-image: url(${BACKGROUND});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    background-attachment: fixed;
    > div {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
}
`
