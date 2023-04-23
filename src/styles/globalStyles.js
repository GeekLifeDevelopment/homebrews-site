import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    color: #003400;
    font-family: 'Roboto', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
    &:hover{
      color: #003300;
    }
  }

  body {
    /* min-height: 100vh; */
    margin: 0;
    padding: 0;
    /* background-color: #faf5e9;  */
    background-color: white ;
  }

  main {

  }

  .page-heading {
    color: #000033;
    font-weight: bold;
    padding: 1rem;
    line-height: 3rem;
    font-family: 'Press Start 2P', cursive;
  }

  
`;

export default GlobalStyles;
