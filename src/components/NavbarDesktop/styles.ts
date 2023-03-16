import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  width: 50%;
`;

export const NavDesktop = styled.nav`
  gap: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavItemDesktop = styled.a`
  color: var(--text-color);

  padding: 15px;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  cursor: pointer;
`;
