import React from "react";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_2.png";
import styled from "styled-components";
import { Montserrat } from "../styles/Fonts";
import Palette from "../styles/Palette";
import HTML from "../assets/skill/HTML.png";

function SkillComponent() {
  return (
    <FullScreen
      custom={{
        backgroubdColor: "#2D2D2D",
        isNotDefault: true,
      }}
    >
      <DefaultContentScreen>
        <SkillBlock>
          <DefaultHeadScreen
            custom={{
              textAlign: "center",
              color: "#333",
            }}
          >
            <h1>SKILL</h1>
          </DefaultHeadScreen>
          <ArtBlock>
            <img src={art} alt="Skill Art" />
            <ArtWrap />
            <SkillTyping>&lt; any &gt;.formegusto</SkillTyping>
          </ArtBlock>
          <SkillSetBlock>
            <SkillGrp>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
              <Skill>
                <img src={HTML} alt="html" />
                <Shadow />
              </Skill>
            </SkillGrp>
          </SkillSetBlock>
        </SkillBlock>
      </DefaultContentScreen>
    </FullScreen>
  );
}

const SkillBlock = styled.div`
  width: 100%;
  overflow: hidden;

  background-color: #fff;
  border-radius: 300px 0 300px 0;
`;

const ArtBlock = styled.div`
  position: relative;
  overflow: hidden;

  & > img {
    position: absolute;
    right: 0;
    transform: translateY(-100px);

    width: 300px;
    height: 300px;
  }
`;

const ArtWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  background: rgba(45, 45, 45, 0.1);
`;

const SkillSetBlock = styled.div`
  padding: 72px 0;

  & > div:not(:last-child) {
    margin: 0 0 32px;
  }
`;

const SkillGrp = styled.div`
  text-align: center;

  & > div:not(:last-child) {
    margin: 0 12px 0 0;
  }
`;

const Skill = styled.div`
  width: 75px;
  height: 75px;

  display: inline-block;
  position: relative;
  border-radius: 75px;

  & > img {
    width: 75px;
    height: 75px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  border-radius: 100%;

  background: rgba(45, 45, 45, 0.3);
`;

const SkillTyping = styled.h1`
  text-align: center;
  margin: 56px 0;

  ${Montserrat}
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height */

  text-transform: lowercase;

  color: ${Palette["black"][3]};

  text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.4);
`;

export default SkillComponent;
