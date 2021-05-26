import React from "react";
import styled from "styled-components";
import bgImg1 from "../assets/background-img-1.jpg";
import art1 from "../assets/art_1.png";
import { Montserrat } from "../styles/Fonts";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";
import Palette from "../styles/Palette";

function OnePortfolioTemplate() {
  return (
    <>
      <BackgroundScreen />
      <PortfolioWrap>
        <IntroScreen>
          <IntroContentBlock>
            <h1>
              Hi :)
              <br />
              @iamformegusto.
            </h1>
            <h2>I'M A DEVELOPER.</h2>
            <IconBlock>
              <a
                href="https://www.facebook.com/profile.php?id=100004846296456"
                target="__blank"
              >
                <AiOutlineFacebook size={32} />
              </a>
              <a href="https://www.instagram.com/hi_thniii/" target="__blank">
                <AiOutlineInstagram size={32} />
              </a>
              <a href="https://github.com/formegusto" target="__blank">
                <AiOutlineGithub size={32} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCP4AYzIwzLLmk0KYNXtHNXQ"
                target="__blank"
              >
                <AiOutlineYoutube size={32} />
              </a>
            </IconBlock>
          </IntroContentBlock>
        </IntroScreen>
        <AboutScreen>
          <h1>ABOUT</h1>
          <AboutContentWrap>
            <AboutContentBlock />
            <AboutArtBlock>
              <div />
              <img src={art1} alt="art1" />
            </AboutArtBlock>
          </AboutContentWrap>
        </AboutScreen>
        <SkillScreen />
        <ExperienceScreen />
        <WorkScreen />
        <TfcScreen />
      </PortfolioWrap>
    </>
  );
}

const PortfolioWrap = styled.div`
  position: relative;
  z-index: 1;

  & > div {
    width: 100vw;
    height: 100vh;

    min-width: 1280px;
    min-height: 900px;
  }
`;

const BackgroundScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-image: url(${bgImg1});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  min-width: 1280px;
  min-height: 900px;
`;

const IntroScreen = styled.div`
  display: flex;
  align-items: center;
  background: rgba(45, 45, 45, 0.3);
`;

const IntroContentBlock = styled.div`
  margin: 0 0 0 226px;
  ${Montserrat}

  & > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: 0.05em;

    color: #333333;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    margin: 0 0 11px;
  }

  & > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;

    color: #333333;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const IconBlock = styled.div`
  & > a {
    display: inline-block;
    color: #333;
    margin: 16.63px 0 16.63px 3px;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.25));
  }
`;

const AboutScreen = styled.div`
  background-color: ${Palette["black"][3]};

  & > h1 {
    box-sizing: border-box;
    width: 1200px;

    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.1em;

    color: #ffffff;

    text-align: right;

    margin: 0 auto;
    padding: 95px 113px 63px 0;
  }
`;

const AboutContentWrap = styled.div`
  position: relative;

  width: 1200px;
  height: 600px;

  margin: 0 auto;
  border-radius: 16px;
`;

const AboutContentBlock = styled.div`
  width: 1050px;
  height: 600px;
  background: #373737;
  border-radius: 16px;
`;

const AboutArtBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 300px;
  height: 300px;

  transform: translateX(900px) translateY(32px);

  border-radius: 100%;
  background-color: #fff;

  & > img {
    position: relative;
    width: 200px;
    height: 200px;

    z-index: 1;
  }

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;

    width: 150px;
    height: calc(100vh - 362px);
    background-color: #fff;
  }
`;

const SkillScreen = styled.div`
  background-color: #fff;
`;

const ExperienceScreen = styled.div`
  background-color: ${Palette["black"][3]};
`;

const WorkScreen = styled.div`
  background-color: #fff;
`;

const TfcScreen = styled.div`
  background-color: ${Palette["black"][3]};
`;

export default OnePortfolioTemplate;
