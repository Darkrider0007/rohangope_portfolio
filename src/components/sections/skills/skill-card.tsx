import React from 'react';
import { CardContent, Card } from '@/components/ui/card';
import { CodeIcon } from 'lucide-react';
import { Skill } from '@/types/skill';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface SkillCardProps extends Skill {
  index: number;
  className?: string;
}

function SkillCard({
  name,
  description,
  Icon,
  index,
  tools,
  className
}: SkillCardProps) {
  return (
    <Card className={cn('bg-muted/40', className)}>
      <CardContent className="flex flex-col items-start p-6">
        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-semibold">({index})</span>
          {Icon ? <Icon className="h-8 w-8" /> : <CodeIcon />}
        </div>
        <div className="grid gap-0.5">
          <h3 className="mt-2 text-2xl font-bold leading-8 tracking-tight">
            {name}
          </h3>
          <p className="mt-2 text-base text-gray-500">{description || ''}</p>
        </div>
        <div>
          <div className="flex flex-col gap-2 mt-4">
            {tools && Object.entries(tools).map(([key, value], index) => (
              <div key={index} className="flex flex-row">
                <h4 className="text-lg font-semibold">{key} :{'\u00A0'}</h4>

                <div className='flex flex-wrap gap-2'>
                  {value.map((tool, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">{tool}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
