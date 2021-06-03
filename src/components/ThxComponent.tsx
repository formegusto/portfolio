import React from "react";
import styled from "styled-components";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_5.png";
import thxformgusto from "../assets/img/thxformegusto.jpg";
import { Montserrat } from "../styles/Fonts";

function ThxComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: Palette["black"][3],
        isNotDefault: true,
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
      <DefaultContentScreen
        custom={{
          padding: "0 0 150px 0",
        }}
      >
        <ThxBlock>
          <ThxContent></ThxContent>
          <ThxFormegusto>
            <ImgShadow />
            <h1>
              ENJOY
              <br />
              THINK
              <br />
              WORK
              <br />
              GROW
              <br />
              TOGETHER
            </h1>
          </ThxFormegusto>
        </ThxBlock>
      </DefaultContentScreen>
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

const ThxBlock = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 600px;
  margin: 0 75px;
`;

const ThxContent = styled.div`
  flex: 1;
`;

const ThxFormegusto = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  width: 300px;

  background-image: url(${thxformgusto});
  background-size: cover;
  background-position: 70%;

  & > h1 {
    ${Montserrat};
    text-align: right;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 70px;
    /* or 83% */

    text-align: right;
    letter-spacing: 0.05em;

    color: #999999;

    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6);

    transform: translateX(-250px);
  }
`;

const ImgShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;

export default ThxComponent;
