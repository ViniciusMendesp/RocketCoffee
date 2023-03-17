import { useState, useEffect } from "react";

import { Container, GlobalStyles, Image1, Image2 } from "./styles/global";
import { Header } from "./components/Header";
import { HeaderDesktop } from "./components/HeaderDesktop";
import BlurTwo from "./assets/blur-2.png";
import BlurOne from "./assets/blur-1.png";
import { Main } from "./components/Main";
import { MainDesktop } from "./components/MainDesktop";

export function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMobileMain, setIsMobileMain] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    function handleResize() {
      setIsMobileMain(window.innerWidth < 1000);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Image1 src={BlurTwo} />
      {isMobile ? <Header /> : <HeaderDesktop />}
      {isMobileMain ? <Main /> : <MainDesktop />}
      <Image2 src={BlurOne} />
      <GlobalStyles />
    </Container>
  );
}
