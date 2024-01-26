import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import projectImg1 from "@/public/next.svg";


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
    title: "Software Engineer",
    location: "Vancvouer, BC",
    description:
      "I started as IOS developer, then I worked as a full-stack web developer for 1 year.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Jul 2020",
  },
  {
    title: "Software Engineer",
    location: "Vancvouer, BC",
    description:
      "I kept building web apps. My frontend stack includes React, Next.js, TypeScript, Tailwind and MongoDB. My backend stack are Golang(Gin&gRPC), NodeJS/Express, Postgres/sqlc, MongoDB/Mongoose.",
    icon: React.createElement(FaReact),
    date: "Aug 2020 - Apr 2022",
  },
  {
    title: "Junior Software Engineer",
    location: "Richmond Hill, ON",
    description:
      "I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "PeakPal Micro Server",
    description:
      "",
    tags: ["Golang", "gRPC", "Postgres","Paseto","Docker","Github Action","AWS-lightsail"],
    imageUrl: projectImg1,
    link: "https://peakpal.googuar.com"
  },
  {
    title: "Royal Metro College",
    description:
      "I worked as a full-stack developer",
    tags: ["React","NodeJS/Express", "MongoDB", "Bootstrap"],
    imageUrl: projectImg1,
    link: ""
  },
  {
    title: "Remmants",
    description:
      "The website offering a marketplace for quartz, granite, and porcelain countertop remnants. It connects buyers and sellers, featuring a gallery of stones, quote requests, and a platform for commercial project bidding.",
    tags: ["PHP", "Laravel", "MySQL", "Bootsrap","Stripe"],
    imageUrl: projectImg1,
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