import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const MainTitleMobileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 1.875rem;
  padding: 22px;n
  text-align: center;
`;

export const MainTitleMobile = styled.h1`
  color: var(--text-color);
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 1.875rem;
  line-height: 40.98px;
`;

export const ButtonMain = styled.button`
  background-color: transparent;
  padding: 10px 30px;
  border: 1px solid var(--button);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-bottom: 6.25rem;

  cursor: pointer;
`;

export const ButtonText = styled.span`
  color: var(--text-color);
  font-family: "Manrope";
  font-size: 0.688rem;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
`;

export const ButtonImage = styled.img``;

export const MainTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleMobile = styled.img`
  width: 346px;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const MainImage = styled.img`
  width: 100%;
  height: auto;
  z-index: 1;
`;

export const BlurMobile = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
