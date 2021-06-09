import React from "react";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScreen,
} from "../styles/Screens";
import art from "../assets/art/art_3.png";
import styled, { css } from "styled-components";
import didcme from "../assets/img/didcme.jpg";
import dongyangme from "../assets/img/dongyangme.jpg";
import ketime from "../assets/img/ketime.jpg";
import laonme from "../assets/img/laonme.jpg";

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
            <ExpGroup>
              <ExpBox className="right">
                <ExpImage className="exp-img" imgUrl={dongyangme}>
                  <ExpImageShadow />
                </ExpImage>
              </ExpBox>
              <ExpBox className="left">
                <ExpImage className="exp-img" imgUrl={didcme}>
                  <ExpImageShadow />
                </ExpImage>
              </ExpBox>
              <ExpBox className="right">
                <ExpImage className="exp-img" imgUrl={laonme}>
                  <ExpImageShadow />
                </ExpImage>
              </ExpBox>
              <ExpBox className="left">
                <ExpImage className="exp-img" imgUrl={ketime}>
                  <ExpImageShadow />
                </ExpImage>
              </ExpBox>
            </ExpGroup>
          </ContentBlock>
        </ExpBlock>
      </DefaultContentScreen>
    </FullScreen>
  );
}

const ExpImage = styled.div<{ imgUrl: string }>`
  position: absolute;
  width: 225px;
  height: 100%;

  ${(props) =>
    css`
      background-image: url(${props.imgUrl});
      background-size: cover;
      background-repeat: no-repeat;
    `}
`;

const ExpImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

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

const ExpGroup = styled.div`
  width: 100%;
  padding: 0 24px 150px;
  box-sizing: border-box;
`;

const ExpBox = styled.div`
  position: relative;

  width: 100%;
  height: 350px;

  box-sizing: border-box;
  background-color: #2d2d2d;
  overflow: hidden;

  &.right {
    border-radius: 0 200px 200px 0;
    border-left: none;
    border-top: none;
    border-bottom: none;

    & > .exp-img {
      right: 0;
      & > div {
        background: linear-gradient(
          90deg,
          #2d2d2d 0%,
          rgba(45, 45, 45, 0) 103.78%
        );
      }
    }
  }

  &.left {
    border-radius: 200px 0 0 200px;
    border-right: none;
    border-top: none;
    border-bottom: none;

    & > .exp-img {
      left: 0;
      & > div {
        background: linear-gradient(
          270deg,
          #2d2d2d 0%,
          rgba(45, 45, 45, 0) 100%
        );
      }
    }
  }
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
