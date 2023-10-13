import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    outline: none;
    box-sizing: border-box;
    font-family: 'Google Sans', sans-serif;
    scroll-behavior: smooth;
  }

  a, button {
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    outline: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 5px;
    transition: background 0.25s linear;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }

  body {
    width: 100vw;
    overflow-x: hidden;

    div#__next {
      width: 100%;
      min-height: 100vh - 75px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .full-width {
    width: 100%;
  }

  .dashboard-overview-support-flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .support-btn{
    background-color: var(--primary);
    border: 1px solid var(--primary);
    color: white;
    transition: background-color 0.25s linear;
    min-width: 165px;
    height: auto;
    padding: 10px;
    border-radius: 4px;
    font-style: normal;
    font-size: 16px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;

  :hover {
    background-color: #1f7945;
  }
  }
    @media screen and (max-width: 768px) {
      display: block;
  }
`;

export default GlobalStyle;