import React from "react";
import styled from "styled-components";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_4.png";

function WorkComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: "#FFF",
        isNotDefault: true,
      }}
    >
      <DefaultHeadScreen
        custom={{
          color: "#333",
          textAlign: "center",
        }}
      >
        <h1>WORK</h1>
      </DefaultHeadScreen>
      <DefaultContentScreen>
        <WorkBlock></WorkBlock>
      </DefaultContentScreen>
      <ArtBlock>
        <img src={art} alt="Work Art" />
      </ArtBlock>
    </FullScreen>
  );
}

const WorkBlock = styled.div`
  height: 600px;
`;

const ArtBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 400px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export default WorkComponent;
