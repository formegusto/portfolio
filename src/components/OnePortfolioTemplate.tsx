import React from "react";
import styled from "styled-components";
import art1 from "../assets/art/art_1.png";
import art2 from "../assets/art/art_2.png";
import art3 from "../assets/art/art_3.png";
import art4 from "../assets/art/art_4.png";
import art5 from "../assets/art/art_5.png";
import { Montserrat } from "../styles/Fonts";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineBold,
} from "react-icons/ai";
import Palette from "../styles/Palette";

function OnePortfolioTemplate() {
  return (
    <>
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
              <a href="https://velog.io/@formegusto" target="__blank">
                <AiOutlineBold size={32} />
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
        <SkillScreen>
          <h1>SKILL</h1>
          <img src={art2} alt="art2" />
        </SkillScreen>
        <ExperienceScreen>
          <ExperienceArtBlock>
            <img src={art3} alt="art3" />
          </ExperienceArtBlock>
          <ExperienceLine />
        </ExperienceScreen>
        <WorkScreen>
          <h1>WORK</h1>
          <img src={art4} alt="art4" />
        </WorkScreen>
        <TfcScreen>
          <h1>Thx For Coming :)</h1>
          <TfcArtBlock>
            <img src={art5} alt="art5" />
          </TfcArtBlock>
          <TfcContentBlock />
        </TfcScreen>
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
    min-height: calc(900px - 362px);
    background-color: #fff;
  }
`;

const SkillScreen = styled.div`
  position: relative;
  background-color: #fff;

  & > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.1em;

    padding: 60px 0;
    text-align: center;

    color: #333333;
  }

  & > img {
    position: absolute;
    top: 0;
    right: 0;

    width: calc(600px);
    height: calc(600px);
  }
`;

const ExperienceScreen = styled.div`
  position: relative;
  background-color: ${Palette["black"][3]};
`;

const ExperienceLine = styled.div`
  position: absolute;
  top: 300px;
  left: calc(50% - 1.5px);
  width: 3px;
  height: calc(100vh - 300px);
  min-height: calc(900px - 300px);
  background-color: #fff;
`;

const ExperienceArtBlock = styled.div`
  position: absolute;
  top: 0;
  left: calc(50% - 150px);

  width: 300px;
  height: 300px;

  border-bottom-left-radius: 100%;
  border-bottom-right-radius: 100%;

  overflow: hidden;

  background-color: #fff;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

const WorkScreen = styled.div`
  position: relative;
  background-color: #fff;

  & > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.1em;
    text-align: center;
    padding: 60px 0;

    color: #333333;
  }

  & > img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
  }
`;

const TfcScreen = styled.div`
  position: relative;
  background-color: ${Palette["black"][3]};

  & > h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    /* identical to box height */

    letter-spacing: 0.1em;

    color: #ffffff;

    text-align: center;
    padding: 60px 0 68px;
  }
`;

const TfcArtBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: flex-end;

  width: 400px;
  height: 400px;

  background-color: #fff;
  border-bottom-left-radius: 100%;

  & > img {
    width: 250px;
    height: 250px;
  }
`;

const TfcContentBlock = styled.div`
  width: 1200px;
  height: 600px;

  margin: 0 auto;
  border-radius: 16px;

  background-color: #373737;
`;

export default OnePortfolioTemplate;
