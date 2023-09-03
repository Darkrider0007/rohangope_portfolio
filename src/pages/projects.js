import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import threads from '../../public/images/projects/threads.png'
import project1 from '../../public/images/projects/weather.png'
import project2 from '../../public/images/projects/To-do.jpg'
import project3 from '../../public/images/projects/jarvis.png'
import contacts from '../../public/images/projects/contacts.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image);

const FeaturedProjects = ({type,title,summary,img,link,github})=>{
    return(
        <article
         className="w-full flex items-center justify-between rounded-br-2xl
            rounded-3xl border border-solid border-dark bg-light dark:border-light dark:bg-dark shadow-2xl
            p-12 relative lg:flex-col lg:p-8 xs:rounded-br-3xl xs:p-4
        ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl  xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <Image src={img} alt={title} className="w-full h-auto"priority
               sizes="(max-width: 768px) 100vw,
               (max-width: 1200px) 50vw, 50vw" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                   <Link href={github} target="_blank" className='w-10'><GithubIcon/></Link> 
                   <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6
                     text-lg font-semibold sm:px-4 sm:text-base '
                   >Visit Project</Link>  
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, link, github, summary }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark xs:p-4'>
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"/>
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-1/2"
                     whileHover={{scale:1.05}}
                     transition={{duration:0.2}}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_blank"
                        className='text-lg font-semibold underline md:text-base'
                    >Visit</Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'><GithubIcon /></Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <meta name="description" content="any description" />
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light ">
                <Layout className="pt-16 ">
                    <AnimatedText text="Imagination is the fuel for innovation!"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'
                    />
                    <div className="grid grid-cols-12 gap-24 gap-y-32 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                        <FeaturedProjects
                            type='Feature Project'
                            title='Threads Clone'
                            img={threads}
                            summary='Threads Clone, a web application where users can create their accounts, post their thoughts, read other users threads, and interact with them.'
                            link='https://threads-clone-gilt.vercel.app/'
                            github='https://github.com/Darkrider0007/Threads-Clone'

                        />
                    </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type='Website'
                                title='Weather Report'
                                img={project1}
                                link='https://darkrider0007.github.io/Weather_report/'
                                github='https://github.com/Darkrider0007/Weather_report'
                                // summary='Weather Report is a user-friendly global weather application. It allows users to search for any city and provides accurate current conditions, hourly and daily forecasts.
                                //  Stay prepared with real-time alerts for severe weather events, ensuring your safety. Plan your activities confidently with the help of Weather Report.'
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type='Website'
                                title='To-Do-List'
                                img={project2}
                                link='https://dark-rose-gharial-tie.cyclic.app/'
                                github='https://github.com/Darkrider0007/Todo-List'
                                // summary='Allows users to track daily activity. Users can add, delete and check his/her daily activity in the form of a list'
                            />
                        </div>
                        {/* <div className="col-span-12">
                        Featured Project
                    </div> */}
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type='Project'
                                title='JARVIS python Voice Assistant'
                                img={project3}
                                link='https://github.com/Darkrider0007/JARVIS-pythonVoiceAssistant'
                                github='https://github.com/Darkrider0007/JARVIS-pythonVoiceAssistant'
                                // summary='Users can start and exit by voice commands. Users can access time, Google, YouTube, Wikipedia, stack overflow. Users can even send emails by using voice commands'
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-12">
                            <Project
                                type='Project'
                                title='Contact Management App With Charts and Maps'
                                img={contacts}
                                link='https://contact-management-app-with-charts-and-maps-4weh-b8spfdjz4.vercel.app/'
                                github='https://github.com/Darkrider0007/contact_management_app_with_Charts_and_Mapsc:\Users\HP\Pictures\Screenshots\Screenshot 2023-09-03 134641.png'
                                // summary='Users can start and exit by voice commands. Users can access time, Google, YouTube, Wikipedia, stack overflow. Users can even send emails by using voice commands'
                            />
                        </div>
                    </div>
                </Layout>
            </main>

        </>
    )
}

export default projects
