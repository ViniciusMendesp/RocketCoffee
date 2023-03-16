import * as Styles from "./styles";
import TitleDesktop from "../../assets/title-desktop.png";
import RocketCoffe from "../../assets/rocket-coffe.png";

export function MainDesktop() {
  return (
    <Styles.Container>
      <Styles.TitleImage src={TitleDesktop} />
      <Styles.CoffeImage src={RocketCoffe} />
    </Styles.Container>
  );
}
