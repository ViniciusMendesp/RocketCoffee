import * as Styles from "./styles";
import ButtonImage from "../../assets/buttonImage.svg";
import RocketCoffeImg from "../../assets/rocket-coffe.png";
import BlurMobile from "../../assets/blur-mobile.png";
import TitleMobile from "../../assets/title-mobile.png";

export function Main() {
  return (
    <Styles.MainContainer>
      <Styles.MainTitleMobileContainer>
        <Styles.MainTitleMobile>
          O café que fara seu código decolar para o próximo nível.
        </Styles.MainTitleMobile>
      </Styles.MainTitleMobileContainer>

      <Styles.ButtonMain>
        <Styles.ButtonText>Pegar meu café</Styles.ButtonText>
        <Styles.ButtonImage src={ButtonImage} />
      </Styles.ButtonMain>

      <Styles.ContainerImage>
        <Styles.MainTitleContainer>
          <Styles.TitleMobile src={TitleMobile} />
        </Styles.MainTitleContainer>
        <Styles.MainImage src={RocketCoffeImg} />
        <Styles.BlurMobile src={BlurMobile} />
      </Styles.ContainerImage>
    </Styles.MainContainer>
  );
}
