import HTML from "../assets/skill/HTML.png";
import CSS from "../assets/skill/CSS.png";
import JS from "../assets/skill/JavaScript.png";
import TS from "../assets/skill/TypeScript.png";
import ReactImg from "../assets/skill/React.png";
import Mobx from "../assets/skill/Mobx.png";
import Redux from "../assets/skill/Redux.png";
import NodeJS from "../assets/skill/NodeJS.png";
import C from "../assets/skill/C.png";
import Csharp from "../assets/skill/Csharp.png";
import Winforms from "../assets/skill/Winforms.png";
import Java from "../assets/skill/Java.png";
import Spring from "../assets/skill/Spring.png";
import Flutter from "../assets/skill/Flutter.png";
import MySQL from "../assets/skill/MySQL.png";
import EC2 from "../assets/skill/EC2.png";
import S3 from "../assets/skill/S3.png";
import Linux from "../assets/skill/Linux.png";
import Figma from "../assets/skill/Figma.png";
import Notion from "../assets/skill/Notion.png";
import React from "react";

type SkillType = {
  [key: string]: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
};

const Skills: SkillType = {
  html: <img src={HTML} alt="HTML" />,
  css: <img src={CSS} alt="CSS" />,
  js: <img src={JS} alt="JS" />,
  ts: <img src={TS} alt="TS" />,
  react: <img src={ReactImg} alt="React" />,
  mobx: <img src={Mobx} alt="MobX" />,
  redux: <img src={Redux} alt="Redux" />,
  node: <img src={NodeJS} alt="Nodejs" />,
  c: <img src={C} alt="C" />,
  csharp: <img src={Csharp} alt="C#" />,
  spring: <img src={Spring} alt="Spring" />,
  winform: <img src={Winforms} alt="winform" />,
  java: <img src={Java} alt="Java" />,
  flutter: <img src={Flutter} alt="flutter" />,
  mysql: <img src={MySQL} alt="mysql" />,
  ec2: <img src={EC2} alt="ec2" />,
  s3: <img src={S3} alt="s3" />,
  linux: <img src={Linux} alt="linux" />,
  figma: <img src={Figma} alt="Figma" />,
  notion: <img src={Notion} alt="notion" />,
};

export default Skills;
