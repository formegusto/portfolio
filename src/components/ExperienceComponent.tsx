import React from "react";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_3.png";
import styled from "styled-components";

function ExperienceComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: Palette["black"][3],
        zIndex: 1,
        isNotDefault: true,
      }}
    >
      <DefaultContentScreen>
        <ExpBlock>
          <SideBlock>
            <ArtBlock>
              <img src={art} alt="Experience Art" />
            </ArtBlock>
            <ArtLine />
          </SideBlock>
          <ContentBlock>
            <DefaultHeadScreen
              custom={{
                color: "#FFF",
                textAlign: "center",
                isNotDefault: true,
              }}
            >
              <h1>EXPERIENCE</h1>
            </DefaultHeadScreen>
            <div
              style={{
                height: "900px",
              }}
            ></div>
          </ContentBlock>
        </ExpBlock>
      </DefaultContentScreen>
    </FullScreen>
  );
}

const ExpBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentBlock = styled.div`
  flex: 1;
`;

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

const ArtLine = styled.div`
  width: 3px;
  flex: 1;

  background-color: #fff;
`;

export default ExperienceComponent;
