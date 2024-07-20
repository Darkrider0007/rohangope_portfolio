"use client";
import React, { useEffect, useState } from 'react';
import SmoothScroll from '@/components/smooth-scroll';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';
import { Dot, GithubIcon, GlobeIcon } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import axios from 'axios';

interface ApiResponse {
    success: boolean;
    message: string;
    project: Project;
}

function Page({ params }: any) {
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get<ApiResponse>(`/api/get-project-by-id?id=${params.project}`);
                if (response.data.success) {
                    setProject(response.data.project);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        }
        fetchData();
    }, [params.project]);

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <div className='mt-16 flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left'>
            <SmoothScroll>
                <Card
                    className={cn(
                        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40'
                    )}
                >
                    <CardContent className="z-[2] flex justify-center items-center w-full overflow-hidden py-10">
                        <Image
                            src={project.thumbnail || '/placeholder.svg'}
                            alt={`Image of ${project.name}`}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="h-96 max-h-96 w-96 object-cover transition-transform duration-300 hover:scale-105"
                        />
                    </CardContent>
                    <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2">
                        <div>
                            <h2 className="text-xl font-bold">{project.name}</h2>
                            {project.description && project.description.map((desc, index) => (
                                <div key={index} className="flex items-start space-x-1">
                                    <Dot className='w-4 h-4' />
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {desc}
                                    </span>
                                </div>
                            ))}
                            <div className="flex flex-wrap gap-4 mt-4">
                                {project.technologies?.map((tech, index) => (
                                    <span key={index}>
                                        <Badge>{tech}</Badge>
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex h-full w-full gap-4 items-end justify-end">
                            {project.repoLink && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                                            >
                                                <Link href={project.repoLink} target="_blank" className="flex items-center">
                                                    <GithubIcon />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>View Repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                            {project.liveLink && (
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                variant="outline"
                                                className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                                            >
                                                <Link href={project.liveLink} target="_blank" className="flex items-center">
                                                    <GlobeIcon />
                                                </Link>
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live Demo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )}
                        </div>
                    </CardFooter>
                </Card>
            </SmoothScroll>
        </div>
    );
}

export default Page;
