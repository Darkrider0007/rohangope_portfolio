import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { Dot, GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  _id,
  name,
  description,
  thumbnail,
  slug,
  className,
  technologies,
  repoLink,
  liveLink,
}: ProjectCardProps) {

  function trimString(str: string, length: number) {
    return str.length > length ? str.substring(0, length) + '...' : str;
  }

  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40',
        className
      )}
    >
      <CardContent className="z-[2] flex justify-center items-center w-full overflow-hidden p-0">
        <Image
          src={thumbnail || '/projects.jpg'}
          alt={`Image of ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-96 max-h-96 w-96 object-cover transition-transform duration-300 hover:scale-105"
        />
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          {
            description && description
              .slice(0, 2)
              .map((desc, index) => (
                <div key={index} className="flex items-start space-x-1">
                  <Dot className='w-8 h-8' />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {trimString(desc, 50)}
                  </span>
                </div>
              ))
          }
          <div className="flex flex-wrap gap-4 mt-4">
            {technologies?.map((tech, index) => (
              <span key={index} >
                <Badge>{tech}</Badge>
              </span>
            ))}
          </div>
        </div>
        <div className="flex h-full w-full gap-4 items-end justify-end">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                >
                  <Link href={`/Projects/${_id}`} className="flex items-center">
                    <InfoIcon />
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More Details</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {repoLink && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                  >
                    <Link href={repoLink} target="_blank" className="flex items-center">
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

          {liveLink && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    className="z-[2] rounded-full border bg-muted hover:bg-foreground/10"
                  >
                    <Link href={liveLink} target="_blank" className="flex items-center">
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
  );
}

export default ProjectCard;
