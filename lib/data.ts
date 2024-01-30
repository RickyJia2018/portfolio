import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiMechanicalArm } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import projectPeak from "@/public/peakpal_carpool.png";
import projectRoyal from "@/public/royal.png";
import projectRem from "@/public/remnants.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Mantoba",
    location: "Winnipeg, MB",
    description:
      "I have obtained a Bachelor of Science degree (Marjor in Computer Science).",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2017",
  },
  {
    title: "Software Engineer @Coinchain Inc.",
    location: " Vancvouer, BC",
    description:
      "I started as IOS developer, then I worked as a full-stack web developer for 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Jul 2020",
  },
  {
    title: "Software Engineer @Evilnut Technology",
    location: "Vancvouer, BC",
    description:
      "I kept building web apps. My main stack is MERN. I've also ventrued into microservices development using Golang(gRPC), Postgres/sqlc, Docker and k8s.",
    icon: React.createElement(FaReact),
    date: "Aug 2020 - Apr 2022",
  },
  {
    title: "Junior Software Engineer @Funglyn Inc.",
    location: "Richmond Hill, ON",
    description:
      "I started building embedded software using C/C++ and also developed a web app to interact with our embedded software.",
    icon: React.createElement(GiMechanicalArm),
    date: "Aug 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "PeakPal Micro Server",
    description:
      "The main API server for my ski app is 100% homemade by me. There are additional microservers that rely on the main server.",
    tags: ["Golang", "gRPC", "Postgres","Docker"],
    imageUrl: projectPeak,
    link: "https://peakpal.googuar.com"
  },
  {
    title: "Royal Metro College",
    description:
      "The official RMC website for students to browse courses and apply for programs. I mainly involve in backend development and support junior front-end developers.",
    tags: ["React","next.js","Node.js", "MongoDB"],
    imageUrl: projectRoyal,
    link: ""
  },
  {
    title: "Remmants",
    description:
      "The website offers a marketplace for quartz, granite, and porcelain countertop remnants. I worked as a full-stack developer with Yulin, the Director of Software Development.",
    tags: [ "Laravel", "MySQL", "Bootstrap","Stripe"],
    imageUrl: projectRem,
    link: "https://remnantss.com/"

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Golang",
  "gRPC",
  "docker",
] as const;