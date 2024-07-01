import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: 'I am a full-stack developer with a passion for creating beautiful and functional web applications.',
};

export { hero };
