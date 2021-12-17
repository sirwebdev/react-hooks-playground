import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
      --color-primary: #2c2c2c;
      --color-secundary: #202020;
      --color-white: #ffffff;
      --color-gray: #676767;

      font-size: 80%;
  }

  * {
      margin: 0;
      padding: 0;
      outline: none;
      box-sizing: border-box;
  }

  html, body, #root {
    display: flex;
    justify-content: center;
    
    width: 100vw;
    height: 100vh;
    background: var(--color-primary);

    color: var(--color-white);
    font-family: Roboto;
  }

  button { 
    cursor: pointer;
  }
`;
