import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    scroll-behavior: smooth;
  }
  
  :root {
    --color-button-login: #FFECD7;
    --color-primary: #FBAA51;
    --color-secondary: #A05FF3;
    --color-terciary: #7E1AFF;
    --color-quartenary: #FBAA51;
    --color-white: #FFFFFF;

    --text-color-primary: var(--color-white);
    --text-color-secondary: var(--color-primary);
    --text-color-terciary: #47434E;
    --text-color-quartenary: #898989;
  }

  body {
    -webkit-font-smoothing: antialised;
  }

  body, input, button {
    font-family: 'Raleway', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    height: 8px;
    width: 8px
  }

  ::-webkit-scrollbar-button {
    height: 0;
    width: 0
  }

  ::-webkit-scrollbar-thumb {
    background: #BE8CFF;
    border: 8px #fff;
    border-radius: 10px
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #9aaabe
  }

  ::-webkit-scrollbar-thumb:active {
    background: #9aaabe
  }

  ::-webkit-scrollbar-track {
    background: #d9e3f0;
    border: 9px #fff;
    border-radius: 10px;
    margin: 6px 0
  }

  ::-webkit-scrollbar-track:hover {
    background: #d9e3f0
  }

  ::-webkit-scrollbar-track:active {
    background: #d9e3f0
  }
  
  ::-webkit-scrollbar-corner {
    background: 0 0
  }
`;