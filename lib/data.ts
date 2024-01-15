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
    title: "Graduated University of Mantoba",
    location: "Winnipeg, MB",
    description:
      "I graduated after 5 years of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2018",
  },
  {
    title: "Software Engineer",
    location: "Vancvouer, BC",
    description:
      "I worked as a front-end developer for 2 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - Jul 2020",
  },
  {
    title: "Software Engineer",
    location: "Vancvouer, BC",
    description:
      "My stack includes React, Next.js, TypeScript, Tailwind and MongoDB.",
    icon: React.createElement(FaReact),
    date: "Aug 2020 - Apr 2022",
  },
  {
    title: "Junior Software Engineer",
    location: "Richmond Hill, ON",
    description:
      " I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "project1",
    description:
      "I worked as a full-stack developer",
    tags: ["React", "MongoDB", "Bootstrap"],
    imageUrl: projectImg1,
    link: ""
  },
  {
    title: "project2",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: projectImg1,
    link: ""

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