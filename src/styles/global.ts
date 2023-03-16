import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --backgrond: #000;
  --text-color: #FFF;
  --button: #8257E5;
  --border: #29292E;
  --border-menu-mobile: #A8A8B3;
  --text-color-menu-mobile: #E1E1E6;
}

* {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 :
  }

  body {
    font-size: 16px;
    height: 100%;
    background-color: var(--backgrond);

  }
  

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
`;

export const Image1 = styled.img`
  width: 700px;
  top: 0;
  right: 0;
  position: absolute;
  z-index: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image2 = styled.img`
  width: 800px;
  bottom: 0;
  left: 0;
  position: absolute;
  z-index: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;
