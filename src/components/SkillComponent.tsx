import React from "react";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_2.png";
import styled from "styled-components";

function SkillComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: "#FFF",
        isNotDefault: true,
      }}
    >
      <ArtBlock>
        <img src={art} alt="Skill art" />
      </ArtBlock>
      <DefaultHeadScreen
        custom={{
          textAlign: "center",
          color: "#333",
        }}
      >
        <h1>SKILL</h1>
      </DefaultHeadScreen>
      <DefaultContentScreen>
        <SkillBlock>
          <IconGrpBlock />
          <AnyFormegusto>
            <h1>&lt; any &gt;.formegusto</h1>
          </AnyFormegusto>
        </SkillBlock>
      </DefaultContentScreen>
    </FullScreen>
  );
}

const ArtBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  & > img {
    width: 500px;
    height: 500px;
  }
`;

const SkillBlock = styled.div`
  position: relative;
  width: calc(100% - 250px);

  z-index: 1;
  box-shadow: 12px 12px 16px rgba(45, 45, 45, 0.5);
  border-radius: 16px 16px 0px 0px;

  background-color: #fff;
`;

const IconGrpBlock = styled.div`
  width: 689px;
  height: 633px;

  width: calc(100% - 250px);
  height: calc(650px + 108px);
`;

const AnyFormegusto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;

  width: calc(100% - 300px);
  height: 650px;
  background: #2d2d2d;
  border-radius: 100% 0px 0px 0px;

  min-width: 650px;

  & > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 59px;
    /* identical to box height */

    letter-spacing: 0.1em;
    text-transform: lowercase;

    color: #dddddd;

    text-shadow: 0px 10px 8px rgba(0, 0, 0, 0.4);
    transform: rotate(-45deg);
  }
`;

export default SkillComponent;
