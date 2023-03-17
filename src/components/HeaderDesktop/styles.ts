import styled from "styled-components";

export const HeaderDesktopContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;

  margin-top: 50px;
`;

export const Logo = styled.img`
  width: 43px;
`;

export const ButtonMain = styled.button`
  background-color: transparent;
  padding: 10px 38px;
  border: 1px solid var(--button);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &:hover {
    background-color: var(--button);
    transition: 0.5s;
  }
`;

export const ButtonText = styled.span`
  color: var(--text-color);
  font-family: "Manrope";
  font-size: 0.688rem;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;
