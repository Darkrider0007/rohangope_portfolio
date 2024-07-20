export interface Project {
  _id: string;
  name: string;
  slug: string;
  description?: string[];
  thumbnail?: string;
  technologies?: string[];
  repoLink?: string;
  liveLink?: string;
  addInTheTop?: boolean;
}
