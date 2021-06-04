import React from "react";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_2.png";
import styled, { css, keyframes } from "styled-components";
import { Montserrat } from "../styles/Fonts";
import Palette from "../styles/Palette";
import Skills from "../stores/Skill";

type Props = {
  skill: string;
  refSkillText: React.Ref<HTMLElement>;
  onMouseEnter: (skill: string) => void;
  onMouseLeave: () => void;
};

function SkillComponent(props: Props) {
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
            <SkillTyping>
              &lt; <em ref={props.refSkillText} data-skill={props.skill}></em>{" "}
              &gt;.formegusto
            </SkillTyping>
          </ArtBlock>
          <SkillSetBlock>
            <SkillGrp>
              <Skill
                onMouseEnter={() => props.onMouseEnter(`html`)}
                onMouseLeave={props.onMouseLeave}
              >
                {Skills["html"]}
                <Shadow />
              </Skill>
              <Skill
                onMouseEnter={() => props.onMouseEnter("css")}
                onMouseLeave={props.onMouseLeave}
              >
                {Skills["css"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["js"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["ts"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["react"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["mobx"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["redux"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["node"]}
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                {Skills["c"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["csharp"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["winform"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["java"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["spring"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["flutter"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["mysql"]}
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                {Skills["ec2"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["s3"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["linux"]}
                <Shadow />
              </Skill>
            </SkillGrp>
            <SkillGrp>
              <Skill>
                {Skills["figma"]}
                <Shadow />
              </Skill>
              <Skill>
                {Skills["notion"]}
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

  cursor: pointer;

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
const cursorAni = keyframes`
  0% {
    opacity: 0;
  } 50% {
    opacity: 1;
  } 100% {
    opacity: 0;
  }
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

  & > em {
    position: relative;
  }

  & > em::after {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 3px;
    height: 80%;
    transform: translateX(5px);
    background-color: #2d2d2d;

    ${css`
      animation: ${cursorAni} infinite step-end 0.7s;
    `};
  }
`;

export default SkillComponent;
