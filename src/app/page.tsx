import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer
} from '@/components/sections';

import Preloader from '@/components/preloader/preloader';
import SmoothScroll from '@/components/smooth-scroll';
import Articles from '@/components/sections/articles/articles';

export default function Home() {
  return (
    <SmoothScroll>
      <Preloader />
      <div className="flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Articles />
          <Contact />
          <Footer />
        </main>
      </div>
    </SmoothScroll>
  );
}