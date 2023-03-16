import * as Styles from "./styles";
import LogoDesktop from "../../assets/logo-desktop.svg";
import { NavbarDesktop } from "../NavbarDesktop";

export function HeaderDesktop() {
  return (
    <Styles.HeaderDesktopContainer>
      <Styles.Logo src={LogoDesktop} />

      <NavbarDesktop />

      <Styles.ButtonMain>
        <Styles.ButtonText>Pegar meu café</Styles.ButtonText>
      </Styles.ButtonMain>
    </Styles.HeaderDesktopContainer>
  );
}
