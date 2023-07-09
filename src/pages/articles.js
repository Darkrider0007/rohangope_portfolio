import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article from '../../public/images/articles/gfg-new-logo.png'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const MovingImg = ({title,img,link}) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = 'inline-block';
        x.set(event.pageX);
        y.set(-10);
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = 'none';
        x.set(0);
        y.set(0);
    }

    return(
        <Link href={link} target="_blank"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
        >
            <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
            <FramerImage 
                style={{x:x,y:y}}
                initial={{opacity:0}}
                whileInView={{opacity:1,transition:{duration:0.2}}}
            ref={imgRef} src={img} alt={title} className="z-10 w-96 h-auto hidden absolute rounded-lg border border-solid border-dark bg-dark dark:border-light dark:bg-light md:!hidden"/>
        </Link>
    )
}


const Article = ({img,title,date,link})=>{
    return(
        <motion.li 
        initial={{y:200}}
        whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
        viewport={{once:true}}
        className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
        justify-between bg-light dark:bg-dark text-dark dark:text-light  first:mt-0 border border-solid border-dark dark:border-light
        border-r-4 border-b-4 sm:flex-col">
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary dark:text-primaryDark font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm'>{date}</span>
        </motion.li>
    )
}


const FeaturedArticle = ({img,title,time,summary,link})=>{
    return(
        <li className="relative col-span-1 w-full p-4 bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-2xl ">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light
            rounded-br-3xl "/>
            <Link href={link} target="_blank"
                className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage src={img} alt={title} className="w-full h-auto"
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority
                    sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw, 50vw" 
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2xl font-bold my-2 mt-4
                    hover:underline xs:text-lg
                ">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{time}</span>
        </li>
    )
}

const articles = () => {
  return (
    <>
        <Head>
            <title>My Articles</title>
            <meta name="description" content="any description" />
        </Head>
        <TransitionEffect/>
        <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
            <Layout className="pt-16 ">
                <AnimatedText text='Words unite, heal, and foster compassion.' className="mb-16 
                lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>
                <ul className="grid grid-cols-2 gap-16  lg:gap-8  md:grid-cols-1 md:gap-y-16">
                    <FeaturedArticle
                        title='How To Find Minimal Set?'
                        summary='The article explains how to find the minimal cover or irreducible set of functional dependencies in a database. It involves splitting left-hand attributes, removing redundancies, and eliminating extraneous attributes.'
                        time=' 5-10 minutes read'
                        link='https://www.geeksforgeeks.org/how-to-find-minimal-set/'
                        img={article}
                    />
                    <FeaturedArticle
                        title='  Probability of winning in a Die-throw game'
                        summary='The article solves a die-throw game where two players aim to reach a target point. It uses dynamic programming to find the probability of the first player winning. The solution involves evaluating a 3D DP array and applying modulo division.'
                        time=' 5 min read'
                        link='https://www.geeksforgeeks.org/how-to-find-minimal-set/'
                        img={article}
                    />
                </ul>
                <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
                <ul>
                <Article
                        title=' Probability of winning in a Die-throw game'
                        date='16 May, 2023'
                        link='https://www.geeksforgeeks.org/probability-of-winning-in-a-die-throw-game/'
                        img={article}
                    />
                <Article
                        title='Mongoose SchemaTypes Getters'
                        date='07 May, 2023'
                        link='https://www.geeksforgeeks.org/mongoose-schematypes-getters/'
                        img={article}
                    />
                <Article
                        title='File writing permissions blocked by the EPERM - Deleting then writing a new file. Node.js'
                        date='10 Apr, 2023'
                        link='https://www.geeksforgeeks.org/how-to-solve-file-writing-permissions-blocked-by-the-eperm-issue-in-node-js/'
                        img={article}
                    />
                <Article
                        title='Transactions management in PostgreSQL Python '
                        date='05 Jun, 2023'
                        link='https://www.geeksforgeeks.org/transactions-management-in-postgresql-python/'
                        img={article}
                    />
                <Article
                        title='Read and insert bytea columns using psycopg2'
                        date='16 Mar, 2023'
                        link='https://www.geeksforgeeks.org/read-and-insert-bytea-columns-using-psycopg2/'
                        img={article}
                    />
                <Article
                    title='How To Find Minimal Set?'
                    date='28 Mar, 2023'
                    link='https://www.geeksforgeeks.org/how-to-find-minimal-set/'
                    img={article}
                />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default articles
