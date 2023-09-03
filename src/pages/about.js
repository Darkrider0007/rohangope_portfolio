/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/developer_img.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Achievements from '@/components/Achievements'
import Languages_Known from '@/components/Languages_Known'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInview = useInView(ref, { once: true });

    useEffect(() => {
        if (isInview) {
            motionValue.set(value);
        }
    }, [isInview, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16">
                    <AnimatedText text="My Passion Drives My Purpose! " className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl-col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">About Me!</h2>
                            <p className="font-medium">
                                Hi, I'm Rohan Gope, a programmer, web developer, and Machine Learning Enthusiast with a passion for problem-solving and creating beautiful, functional, and user-centered digital experiences. I am always looking for new and innovative ways to solve a problem.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that programming and web development go beyond mere technicalities – they involve problem-solving and crafting user-friendly experiences.
                            </p>
                            <p className="font-medium">
                                As a passionate programmer, web developer, and machine learning enthusiast dedicated to delivering exceptional solutions. Combining technology and creativity to solve problems and create meaningful solutions. Excited to contribute skills and passion.
                            </p>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
                            <Image src={profilePic} alt="Rohan" className="w-full h-auto rounded-2xl"
                                priority
                                sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw, 50vw" />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={5} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={170} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>Leetcode Problems</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={8.8} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75
                                xl:text-center md:text-lg sm:text-base xs:text-sm'>CGPA</h2>
                            </div>

                        </div>
                    </div>
                    <Skills />
                    <Education />
                    <Experience />
                    <Achievements />
                    <Languages_Known />
                </Layout>
            </main>
        </>
    )
}

export default about
