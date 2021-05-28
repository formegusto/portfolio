import React from "react";
import styled from "styled-components";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScrenn,
} from "../styles/Screens";

function AboutComponent() {
  return (
    <FullScrenn
      custom={{
        backgroubdColor: Palette["black"][3],
        isNotDefault: false,
      }}
    >
      <DefaultContentScreen
        custom={{
          padding: "0 0 142px",
        }}
      >
        <DefaultHeadScreen
          custom={{
            padding: "0 150px 0 0",
            textAlign: "right",
            color: "white",
          }}
        >
          <h1>ABOUT</h1>
        </DefaultHeadScreen>
        <AboutBlock>
          <RightBlock>
            <DevFormegusto>
              <h1>dev.formegusto</h1>
            </DevFormegusto>
          </RightBlock>
          <LeftBlock>
            <IamFormegusto>
              <h1>iam.formegusto</h1>
            </IamFormegusto>
            <ArtFormegusto>
              <h1>art.formegusto</h1>
            </ArtFormegusto>
          </LeftBlock>
        </AboutBlock>
      </DefaultContentScreen>
    </FullScrenn>
  );
}

const AboutBlock = styled.div`
  display: flex;
  flex-wrap: nowrap;

  width: calc(100% - 150px);

  background-color: #373737;
  border-radius: 16px;
  box-sizing: border-box;

  padding: 48px 32px;

  & > div {
    flex: 1;
  }

  & > div:nth-child(1) {
    margin: 0 17px 0 0;
  }

  & > div:nth-child(2) {
    margin: 0 0 0 17px;
  }

  & > div > div {
    position: relative;
  }

  & > div > div > h1 {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: ${Palette["black"][3]};

    font-style: normal;
    font-weight: normal;
    font-size: 18px;

    letter-spacing: 0.1em;

    color: #ffffff;
  }
`;

const RightBlock = styled.div``;

const LeftBlock = styled.div``;

const DevFormegusto = styled.div``;

const IamFormegusto = styled.div`
  & > h1 {
    top: 100%;
  }
`;

const ArtFormegusto = styled.div``;

export default AboutComponent;
