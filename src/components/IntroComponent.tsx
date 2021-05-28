import React from "react";
import styled from "styled-components";
import { DefaultContentScreen } from "../styles/Screens";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineYoutube,
  AiOutlineBold,
} from "react-icons/ai";

function IntroComponent() {
  return (
    <DefaultContentScreen>
      <IntroBlock>
        <SayHello>
          Hi :)
          <br />
          @iamformegusto.
        </SayHello>
        <MyDesc>I'M A DEVELOPER.</MyDesc>
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
          <a href="https://velog.io/@formegusto" target="__blank">
            <AiOutlineBold size={32} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCP4AYzIwzLLmk0KYNXtHNXQ"
            target="__blank"
          >
            <AiOutlineYoutube size={32} />
          </a>
        </IconBlock>
      </IntroBlock>
    </DefaultContentScreen>
  );
}

const IntroBlock = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;

  height: 100vh;

  min-height: 900px;

  margin: 0 32px;
`;

const SayHello = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 59px;
  letter-spacing: 0.05em;

  color: #333333;

  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

  margin: 0 0 11px;
`;

const MyDesc = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.1em;

  color: #333333;

  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
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
