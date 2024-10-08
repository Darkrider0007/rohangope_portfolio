import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ArticlesSchema } from '@/types/articles';

interface ArticlesCardProps extends ArticlesSchema {
  className?: string;
}

function ArticlesCard({
  imageURL,
  topic,
  desc,
  alt,
  link,
  className
}: ArticlesCardProps) {
  const validLink = link || '/';



  return (
    <Card className={cn('h-full w-full rounded-xl', 'bg-muted/40', className)}>
      <div className="flex flex-col items-center p-6">
        <div className="relative h-48 w-72 overflow-hidden rounded-lg shadow-lg">
          <Image
            src={imageURL || '/articles.jpg'}
            alt={alt || 'Placeholder Image'}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <a href={validLink} target="_blank">
        <CardContent className="p-6">
          <div className="mt-4 text-center">
            <p className="text-xl font-bold text-gray-600">{topic}</p>
          </div>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            {desc && desc.length > 100 ? `${desc.substring(0, 100)}...` : desc}
          </p>
        </CardContent>
      </a>
    </Card>
  );
}

export default ArticlesCard;

