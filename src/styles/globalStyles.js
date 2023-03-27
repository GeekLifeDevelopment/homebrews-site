import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    color: #003400;
    font-family: 'Roboto', sans-serif;
  }

  body {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #faf5e9;
  }

  h1, h2, h3, h4, h5, h6 {
    color: darkblue;
    font-weight: bold;
    padding: 1rem;
    line-height: 3rem;
    font-family: 'Press Start 2P', cursive;
  }

  
`;

export default GlobalStyles;
