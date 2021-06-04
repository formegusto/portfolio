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

type Skill = {
  name: string;
  tag: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
};

const Skills: Skill[][] = [
  [
    {
      name: "HTML",
      tag: <img src={HTML} alt="HTML" />,
    },
    {
      name: "CSS",
      tag: <img src={CSS} alt="CSS" />,
    },
    {
      name: "JavaScript",
      tag: <img src={JS} alt="JS" />,
    },
    {
      name: "TypeScript",
      tag: <img src={TS} alt="TS" />,
    },
    {
      name: "React",
      tag: <img src={ReactImg} alt="React" />,
    },
    {
      name: "MobX",
      tag: <img src={Mobx} alt="MobX" />,
    },
    {
      name: "Redux",
      tag: <img src={Redux} alt="Redux" />,
    },
    {
      name: "NodeJS",
      tag: <img src={NodeJS} alt="Nodejs" />,
    },
  ],
  [
    {
      name: "C",
      tag: <img src={C} alt="C" />,
    },
    {
      name: "C#",
      tag: <img src={Csharp} alt="C#" />,
    },
    {
      name: "WinForms",
      tag: <img src={Winforms} alt="winforms" />,
    },
    {
      name: "Java",
      tag: <img src={Java} alt="Java" />,
    },
    {
      name: "Spring",
      tag: <img src={Spring} alt="Spring" />,
    },
    {
      name: "Flutter",
      tag: <img src={Flutter} alt="flutter" />,
    },
    {
      name: "MySQL",
      tag: <img src={MySQL} alt="mysql" />,
    },
  ],
  [
    {
      name: "EC2",
      tag: <img src={EC2} alt="ec2" />,
    },
    {
      name: "S3",
      tag: <img src={S3} alt="s3" />,
    },
    {
      name: "Linux",
      tag: <img src={Linux} alt="linux" />,
    },
  ],
  [
    {
      name: "Figma",
      tag: <img src={Figma} alt="Figma" />,
    },
    {
      name: "Notion",
      tag: <img src={Notion} alt="notion" />,
    },
  ],
];

export default Skills;
