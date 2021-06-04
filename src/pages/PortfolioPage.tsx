import React from "react";
import AboutComponent from "../components/AboutComponent";
import BackgroundComponent from "../components/BackgroundComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import IntroComponent from "../components/IntroComponent";
import ThxComponent from "../components/ThxComponent";
import WorkComponent from "../components/WorkComponent";
import SkillContainer from "../containers/SkillContainer";

function PortfolioPage() {
  return (
    <>
      <BackgroundComponent />
      <IntroComponent />
      <AboutComponent />
      <SkillContainer />
      <ExperienceComponent />
      <WorkComponent />
      <ThxComponent />
    </>
  );
}

export default PortfolioPage;
