import React from "react";
import styled from "styled-components";
import bgImg1 from "../assets/background-img-1.jpg";
import { Montserrat } from "../styles/Fonts";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineYoutube,
} from "react-icons/ai";

function IntroComponent() {
  return (
    <FullScreen>
      <ScreenWrap />
      <IntroBlock>
        <h1>
          Hi :) <br />
          @iamformegusto.
        </h1>
        <h2>I’m a developer.</h2>
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
      </IntroBlock>
    </FullScreen>
  );
}

const FullScreen = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  width: 100vw;
  height: 100vh;

  min-width: 1280px;
  min-height: 720px;

  background-image: url(${bgImg1});
  background-size: cover;
  background-repeat: no-repeat;
`;

const ScreenWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(45, 45, 45, 0.3);
`;

const IntroBlock = styled.div`
  ${Montserrat}
  margin: 0 0 0 220px;

  color: #333;

  & > h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    letter-spacing: 0.05em;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    margin: 0 0 11px;
  }

  & > h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.1em;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    margin: 0 0 3px;
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

export default IntroComponent;
