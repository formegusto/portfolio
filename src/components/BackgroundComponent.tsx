import React from "react";
import styled from "styled-components";
import bgImg1 from "../assets/background-img-1.jpg";

function BackgroundComponent() {
  return (
    <>
      <BackgroundScreen />
      <BackgroundShadow />
    </>
  );
}

const BackgroundScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  background-image: url(${bgImg1});
  background-repeat: no-repeat;
  background-size: cover;

  width: 100vw;
  height: 100vh;

  min-width: 1200px;
  min-height: 900px;
`;

const BackgroundShadow = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  min-width: 1200px;
  min-height: 900px;

  background: rgba(45, 45, 45, 0.5);
`;

export default BackgroundComponent;
