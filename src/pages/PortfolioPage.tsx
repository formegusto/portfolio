import React from "react";
import AboutComponent from "../components/AboutComponent";
import BackgroundComponent from "../components/BackgroundComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import IntroComponent from "../components/IntroComponent";
import WorkComponent from "../components/WorkComponent";
import SkillContainer from "../containers/SkillContainer";
import ThxContainer from "../containers/ThxContainer";

function PortfolioPage() {
  return (
    <>
      <BackgroundComponent />
      <IntroComponent />
      <AboutComponent />
      <SkillContainer />
      <ExperienceComponent />
      <WorkComponent />
      <ThxContainer />
    </>
  );
}

export default PortfolioPage;
