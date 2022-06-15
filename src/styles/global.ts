import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #8284FA;
    --purple-dark: #5E60CE;
    --blue: #4EA8DE;
    --blue-dark: #1E6F9F;
    --hover-blue: #0C1C26;
    --danger: #E25858;

    --gray-700: #0D0D0D;
    --gray-600: #1a1a1a;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #d9d9d9;
    --gray-100: #f2f2f2;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Inter', sans-serif;
    background: var(--gray-600);
    -webkit-font-smoothing: antialiased;
  }

  body, input[type="text"], textarea, button {
    font-size: 1rem;
    font-weight: 400;
    color: var(--gray-100);
  }

  input[type="text"] {
    width: 100%;
    background: var(--gray-500);
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: .5rem;
    outline: var(--purple-dark);
    transition: .2s;

    &::placeholder {
      color: var(--gray-300);
    }
    
    &:hover, &:focus {
      border: 1px solid var(--purple-dark);
    }
  }

  .formInput {
    margin: 0;
    appearance: none;
    border: .125rem solid var(--blue);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background: transparent;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    transition: .1s;
    cursor: pointer;

    &:hover {
      border: .125rem solid var(--blue-dark);
      background: var(--hover-blue);
    }
    
    &:checked {
      border: .125rem solid var(--purple-dark);
      background: var(--purple-dark);

      &:hover {
        border: .125rem solid var(--purple);
        background: var(--purple);
      }
    }
  }

  button {
    cursor: pointer;
    padding: 1rem;
    background: transparent;
    border: none;
    border-radius: .5rem;
  }

  .font-bold {
    font-weight: 700;
  }

  .sr-only {
  position:absolute;
  left:-10000px;
  top:auto;
  width:1px;
  height:1px;
  overflow:hidden;
  }
`;
