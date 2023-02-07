import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
 body {
    min-height: 100vh;
    font-family: sans-serif;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.body}
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;