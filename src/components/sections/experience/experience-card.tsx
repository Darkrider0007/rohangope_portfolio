import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon, Dot } from 'lucide-react';

import { Experience } from '@/types/experience';

import { cn } from '@/lib/utils';

interface ExperienceCardProps extends Experience {
  className?: string;
}

function ExperienceCard({
  company,
  name,
  duration,
  description,
  className
}: ExperienceCardProps) {
  return (
    <Card className={cn('border-none bg-transparent', className)}>
      <CardContent className="p-1">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold">{company}</h3>
          <span className="text-sm font-medium">{duration}</span>
        </div>
        <h4 className="mt-2 text-lg font-medium uppercase">{name}</h4>
        {
          description?.map((desc, index) => (
            <div key={index} className='flex flex-row items-center mt-2'>
              <Dot className="h-8 w-8 b" />
              <p>{desc}</p>
            </div>
          ))
        }
        {/* <p className="mt-2">{description}</p> */}
        <hr className="my-6 border-t border-border" />
      </CardContent>
    </Card>
  );
}

export default ExperienceCard;
