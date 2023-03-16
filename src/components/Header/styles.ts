import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const HeaderContainer = styled.div`
  border-bottom: 1px solid #29292e;

  z-index: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s ease-out;
  padding: 0 24px;
  height: 104px;
  max-width: 100vw;
`;

export const LogoMobile = styled.img``;

export const MenuButton = styled.img`
  cursor: pointer;
`;
