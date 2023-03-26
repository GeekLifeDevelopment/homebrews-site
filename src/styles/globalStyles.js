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

  h3 {
    color: blue;
    text-decoration: underline ;
  }

  
`;

export default GlobalStyles;
