import styled from "styled-components";
import { Montserrat } from "./Fonts";

export const FullScrenn = styled.div`
  width: 100vw;
  height: 100vh;

  min-width: 1200px;
  min-height: 900px;
`;

export const DefaultContentScreen = styled.div`
  position: relative;

  width: calc(100% - 240px);

  min-width: 1200px;
  margin: 0 auto;

  ${Montserrat}
`;
