import styled, { css } from "styled-components";

interface NavItemProps {
  selected?: boolean;
}

export const NavContainer = styled.div<NavItemProps>`
  position: absolute;
  width: 100vw;
  max-width: 100vw;
  top: 104px;

  background-color: var(--backgrond);
  z-index: 1;
`;

export const Nav = styled.nav<NavItemProps>`
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const NavItem = styled.a<NavItemProps>`
  width: 100%;
  color: var(--text-color);

  padding: 15px;
  border-bottom: 1px solid #29292e;
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;

  ${(props) =>
    props.selected &&
    css`
      border-left: 5px solid #8257e5;
      font-weight: 700;
    `}

  cursor: pointer;
`;
