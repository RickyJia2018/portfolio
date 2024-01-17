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
123
        </p>
    </motion.section>
  )
}
