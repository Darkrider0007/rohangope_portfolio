"use client";
import React, { useEffect, useState } from 'react';
import Autoplay from "embla-carousel-autoplay"
import MotionWrap from '@/components/motion-wrap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Reveal from '@/components/reveal';
import { ArticlesSchema } from '@/types/articles';
import { articlesLocal } from '@/components/sections/articles/config';
import ArticlesCard from './articles-card';
import axios from 'axios';


function Articles() {
  const [articles, setArticles] = useState<ArticlesSchema[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('/api/get-all-articles');
        if (res.data.success) {
          setArticles(res.data.articles);
        } else {
          setArticles(articlesLocal);
        }

      } catch (error) {
        console.error(error);
      }
    }
    fetchArticles();
  }, []);
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="articles">
      {/* TODO: Redesign for horizontal */}
      <div className="px-4 md:px-6">
        <div className="grid gap-10">
          <div className="flex w-full flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="flex flex-col items-center lg:items-start">
              <Reveal>
                <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  My
                </h2>
              </Reveal>
              <Reveal>
                <h2 className="-mt-2 text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                  Articles
                </h2>
              </Reveal>
            </div>
            <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
              Here are some articles I've written on various topics.
            </p>
          </div>

          <div className="flex items-center justify-center overflow-hidden lg:px-12 ">
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                align: 'start'
              }}
              className="w-full"
            >
              <CarouselContent>
                {articles.map((article, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="h-full p-1">
                      <ArticlesCard
                        topic={article.topic}
                        imageURL={article.imageURL}
                        desc={article.desc}
                        alt={article.alt}
                        link={article.link}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Articles;
