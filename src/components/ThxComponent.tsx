import React from "react";
import styled from "styled-components";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_5.png";

function ThxComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: Palette["black"][3],
      }}
    >
      <DefaultHeadScreen
        custom={{
          color: "#FFF",
          textAlign: "center",
        }}
      >
        <h1>Thx For Coming :)</h1>
      </DefaultHeadScreen>
      <DefaultContentScreen></DefaultContentScreen>
      <ArtBlock>
        <img src={art} alt="thx! fom coming!" />
      </ArtBlock>
    </FullScreen>
  );
}

const ArtBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;

  background-color: #fff;
  overflow: hidden;
  border-radius: 0 0 0 300px;

  & > img {
    width: 200px;
    height: 200px;
    float: right;
  }
`;

export default ThxComponent;
