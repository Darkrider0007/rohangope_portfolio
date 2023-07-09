import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({name,x,y}) =>{
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
                xs:text-dark xs:dark:text-light xs:font-bold '
                whileHover={{scale: 1.05}}
                initial={{x:0,y:0}}
                whileInView={{x:x,y:y,transition:{duration:2}}}
                viewport={{once:true}}
            >{name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-black text-light
                p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                whileHover={{scale: 1.05}}>
                Skills
            </motion.div>
            <Skill name="DSA" x="-20vw" y="-14vw" />
            <Skill name="HTML" x="-18vw" y="2vw" />
            <Skill name="CSS" x="-5vw" y="-10vw" />
            <Skill name="Javascript" x="17vw" y="0vw" />
            <Skill name="ReactJS" x="0vw" y="11vw" />
            <Skill name="NextJS" x="30vw" y="6vw" />
            <Skill name="C++" x="15vw" y="-12vw" />
            <Skill name="Python" x="32vw" y="-5vw" />
            <Skill name="NodeJS" x="0vw" y="-22vw" />
            <Skill name="ExpressJS" x="-23vw" y="18vw" />
            <Skill name="MongoDB" x="-34vw" y="10vw" />
            <Skill name="MySQL" x="27vw" y="-15vw" />
            <Skill name="Tailwind Css" x="20vw" y="18vw" />
            <Skill name="Unity" x="-36vw" y="-7vw" />
        </div>
    </>
  )
}

export default Skills
