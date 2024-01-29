"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section id='about' ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'initial={{ opacity:0, y:100}} animate={{ opacity:1, y:0 }} transition={{delay:0.175}}>
        <SectionHeading >About Me</SectionHeading>
        <p>
        In high school, I was fascinated by World of Warcraft, sparking a desire to become a creator in the realm of binary. This led me to choose computer science as my major in university. 
     
        </p>
        <p>   I really <span className='underline font-bold'>love</span> writing code to create things. It has become <span className='italic'>an integral part of my life.{" "}</span>
        My core stack is <span className='font-medium'>React, Golang(Gin & gRPC) and Postgres.</span> I am also experienced with Node.js, Flutter, MongoDB and Laravel.
        To keep my skills sharp, I am always eager to learn new technologies. 
        </p>
        <p className='mt-3 mb-3'>I am currently looking for a <span className='font-medium' >full-time position as a software developer.</span></p>
        <p>
          When I'm not coding, I enjoy playing video games, fishing, hiking and skiing(CSIA L2). Welcome ski with me.
        </p>
    </motion.section>
  )
}
