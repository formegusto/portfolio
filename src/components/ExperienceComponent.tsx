import React from "react";
import Palette from "../styles/Palette";
import { DefaultContentScreen, FullScreen } from "../styles/Screens";
import art from "../assets/art/art_3.png";
import styled from "styled-components";

function ExperienceComponent() {
  return (
    <FullScreen custom={{ backgroubdColor: Palette["black"][3], zIndex: 1 }}>
      <DefaultContentScreen>
        <ArtBlock>
          <img src={art} alt="Experience Alt" />
        </ArtBlock>
      </DefaultContentScreen>
    </FullScreen>
  );
}

const ArtBlock = styled.div`
  width: 300px;
  height: 300px;

  border-radius: 0 0 100% 100%;
  overflow: hidden;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export default ExperienceComponent;
