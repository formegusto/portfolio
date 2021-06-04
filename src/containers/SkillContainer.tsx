import React, { useCallback, useEffect, useRef, useState } from "react";
import SkillComponent from "../components/SkillComponent";

function SkillContainer() {
  const [skill, setSkill] = useState<string>("any");
  const refSkillText = useRef<HTMLElement>(null);

  const textEvent = useCallback(
    (idx: number) => {
      const { skill: now } = refSkillText.current?.dataset as any;
      if (now !== skill) return;
      if (refSkillText.current) refSkillText.current.textContent += skill[idx];
      if (idx + 1 >= skill.length) return;
      setTimeout(textEvent, 100, idx + 1);
    },
    [skill]
  );

  const onMouseLeave = useCallback(() => {
    if (refSkillText.current) refSkillText.current.textContent = "";
    setSkill("any");
  }, []);

  const onMouseEnter = useCallback((skill: string) => {
    setSkill(skill);
  }, []);

  useEffect(() => {
    if (refSkillText.current) refSkillText.current.textContent = "";
    textEvent(0);
  }, [textEvent]);

  return (
    <SkillComponent
      skill={skill}
      refSkillText={refSkillText}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
  );
}

export default SkillContainer;
