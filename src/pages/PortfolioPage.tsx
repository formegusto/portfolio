import React from "react";
import AboutComponent from "../components/AboutComponent";
import BackgroundComponent from "../components/BackgroundComponent";
import ExperienceComponent from "../components/ExperienceComponent";
import IntroComponent from "../components/IntroComponent";
import SkillComponent from "../components/SkillComponent";
import WorkComponent from "../components/WorkComponent";

function PortfolioPage() {
  return (
    <>
      <BackgroundComponent />
      <IntroComponent />
      <AboutComponent />
      <SkillComponent />
      <ExperienceComponent />
      <WorkComponent />
    </>
  );
}

export default PortfolioPage;
