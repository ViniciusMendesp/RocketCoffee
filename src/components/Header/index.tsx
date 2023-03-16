import { useState } from "react";
import { Navbar } from "../Navbar";

import * as Styles from "./styles";
import LogoMobile from "../../assets/logo-mobile.svg";
import MenuClose from "../../assets/menu-buguer-close.svg";
import MenuOpen from "../../assets/menu-buguer-open.svg";

export function Header() {
  const [navbarisOpen, setNavbarIsOpen] = useState(false);

  const toggleMenu = () => {
    setNavbarIsOpen(!navbarisOpen);
  };

  return (
    <Styles.Container>
      <Styles.HeaderContainer>
        <Styles.LogoMobile src={LogoMobile} />
        <Styles.MenuButton
          onClick={toggleMenu}
          src={navbarisOpen ? MenuClose : MenuOpen}
        />
      </Styles.HeaderContainer>

      {navbarisOpen && <Navbar />}
    </Styles.Container>
  );
}
