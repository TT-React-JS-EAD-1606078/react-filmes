import { createGlobalStyle } from 'styled-components'
import { backgroundColor, secondary } from '.'

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
    background-color: ${backgroundColor};
    color: ${secondary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`