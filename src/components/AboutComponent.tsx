import React from "react";
import styled from "styled-components";
import Palette from "../styles/Palette";
import {
  DefaultContentScreen,
  DefaultHeadScreen,
  FullScrenn,
} from "../styles/Screens";
import artformegusto from "../assets/img/artformegusto.jpg";
import devformegusto from "../assets/img/devformegusto.jpg";
import iamformegusto from "../assets/img/iamformegusto.jpg";

function AboutComponent() {
  return (
    <FullScrenn
      custom={{
        backgroubdColor: Palette["black"][3],
        isNotDefault: true,
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
              <div className="banner">
                <ImgShadow />
              </div>
            </DevFormegusto>
          </RightBlock>
          <LeftBlock>
            <IamFormegusto>
              <h1>iam.formegusto</h1>
              <div className="content"></div>
              <div className="banner">
                <ImgShadow />
              </div>
            </IamFormegusto>
            <ArtFormegusto>
              <h1>art.formegusto</h1>
              <div className="banner">
                <ImgShadow />
              </div>
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

const DevFormegusto = styled.div`
  height: 100%;

  & > h1 {
    top: 0;
  }

  & > .banner {
    width: 100%;
    height: 218px;
    background-image: url(${devformegusto});
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const IamFormegusto = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 218px;

  margin: 0 184px 34px 0;
  & > h1 {
    bottom: 0;
  }

  & > .banner {
    width: 100%;
    height: 100px;

    background-image: url(${iamformegusto});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 45%;
  }

  & > .content {
    flex: 1;
  }
`;

const ArtFormegusto = styled.div`
  min-height: 252px;

  & > h1 {
    top: 0;
  }

  & > .banner {
    width: 252px;
    height: 252px;

    background-image: url(${artformegusto});
    background-repeat: no-repeat;
    background-size: 252px 272px;
    background-position: 10%;
  }
`;

const ImgShadow = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(45, 45, 45, 0.3);
`;

export default AboutComponent;
