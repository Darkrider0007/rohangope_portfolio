import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon, Download } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                About
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            My Passion Drives My Purpose!
          </p>
        </div>
        <div className="space-y-4">
          <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">

            I am Rohan Gope, a final-year Information Technology undergraduate at Jalpaiguri Government Engineering College (Autonomous) and an intern at Celebal Technologies. My passion lies in full-stack web development, where I am skilled in front-end technologies like ReactJS, and NextJS, as well as back-end technologies such as Node.js, Express.js, MongoDB, PostgreSQL, and MySQL. With a strong foundation in data structures and algorithms, I focus on crafting high-performing, user-centric web applications. As the Placement Coordinator at TnP cell JGEC, I am eager to contribute to innovative projects. Feel free to reach out to me at rg2512@it.jgec.ac.in for any inquiries or collaboration opportunities.
          </p>
          <div className='flex flex-row gap-4'>
            <Button asChild>
              <Link href="https://resume-rohan-gope.vercel.app/" target="_blank">
                View Resume <ArrowUpRightIcon className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild>
              <Link href="resume.pdf" target="_blank">
                Download Resume <Download className="ml-2 size-5" />
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
