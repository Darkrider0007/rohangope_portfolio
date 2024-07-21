"use client";
import MotionWrap from '@/components/motion-wrap';
import Reveal from '@/components/reveal';
import ProjectCard from '@/components/sections/projects/project-card';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface Project {
    _id: string;
    name: string;
    slug: string;
    description: string[];
    thumbnail: string;
    technologies: string[];
    repoLink: string;
    liveLink: string;
    __v: number;
}

interface ApiResponse {
    success: boolean;
    message: string;
    data: Project[];
}

function Page() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<ApiResponse>('/api/get-all-projects');
                if (response.data.success) {
                    setProjects(response.data.data);
                }
            } catch (error) {
                console.log('Error fetching data:', error);

            }
        }
        fetchData();
    }, []);

    return (
        <MotionWrap className="w-full py-24 lg:py-32" id="projects">
            <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
                <div className="flex w-full flex-col items-center justify-center text-center ">
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
                </div>
                <div className="mt-6 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project._id}
                            _id={project._id}
                            slug={project.slug}
                            name={project.name}
                            description={project.description}
                            thumbnail={project.thumbnail}
                            technologies={project.technologies}
                            repoLink={project.repoLink}
                            liveLink={project.liveLink}
                        />
                    ))}
                </div>
            </div>
        </MotionWrap>
    );
}

export default Page;
