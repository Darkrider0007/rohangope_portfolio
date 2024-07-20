"use client";
import React, { useEffect, useState } from 'react';
import ProjectCard from './project-card';

import Reveal from '@/components/reveal';

import { projectsLocal } from '@/components/sections/projects/config';
import { Project } from '@/types/project';
import axios from 'axios';
import MotionWrap from '@/components/motion-wrap';
import Link from 'next/link';

interface ApiResponse {
  success: boolean;
  message: string;
  data: Project[];
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get<ApiResponse>('/api/get-all-projects');
        if (response.data.success) {
          setProjects(response.data.data);
        }
        console.log("load from db");
      } catch (error) {
        console.log('Error fetching data:', error);
        setProjects(projectsLocal as Project[]);
      }
    }
    fetchData();
  }, []);

  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="projects">
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                My
              </h2>
            </Reveal>
            <Reveal>
              <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Projects
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my projects where I've turned code into cool,
            functional stuff.
          </p>
        </div>
        <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {projects
            .filter((project, index) => project.addInTheTop)
            .map((project, index) => (
              <ProjectCard
                key={index}
                _id={project._id}
                slug={project.slug}
                name={project.name}
                description={project.description}
                thumbnail={project.thumbnail}
                technologies={project.technologies}
                repoLink={project.repoLink}
                liveLink={project.liveLink}
              />
            ))
          }

        </div>
        <div className="flex justify-center mt-8">
          <Link
            href="/Projects"
            className="px-6 py-2 text-lg font-semibold text-white bg-primary-500 rounded-md hover:bg-primary-600"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
