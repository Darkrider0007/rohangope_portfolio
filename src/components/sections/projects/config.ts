import { Project } from '@/types/project';

const projectsLocal: Project[] = [
  {
    _id: '669b7dae6afba3ec795d42a3',
    name: ' Mess Manager ',
    slug: 'mess-manager',
    description:
      [
        "Developed a mess management solution for 6 users with member management, transactions, and admin features.",
        "Created a customizable dashboard or expense tracking and graphs."
      ],
    thumbnail: 'https://github.com/Darkrider0007/mess_manager_frontend/raw/main/public/favicon.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary', 'Redux', 'React-hook-form'],
    repoLink: 'https://github.com/Darkrider0007/mess_manager_backend',
    liveLink: 'https://mess-manager-backend.onrender.com/api/v1/health'

  },
  {
    _id: '669b81666afba3ec795d42b2',
    name: 'YouTube Backend',
    slug: 'youtube-backend',
    description:
      [
        " Implemented video management: upload, update, and retrieve videos.",
        "Integrated Twitter functions: tweet, retrieve, delete, update tweets; manage subscriptions and comments."

      ],
    thumbnail: 'https://github.com/Darkrider0007/youTube-Backend/blob/main/WhatsApp%20Image%202024-06-29%20at%2003.08.11_1ad215c6.jpg?raw=true',
    technologies: ['NodeJS', 'Express', 'MongoDB', 'Mongoose', 'Cloudinary'],
    repoLink: 'https://github.com/Darkrider0007/youTube-Backend',
    liveLink: 'https://youtube-backend-7mpt.onrender.com/api/v1/healthCheck'
  },
  {
    _id: '669b80fd6afba3ec795d42ac',
    name: 'Shark Tank',
    slug: 'shark-tank',
    description: [
      "Implemented secure user authentication and account creation.",
      "Developed a user-friendly interface for pitches with Next.js and Tailwind CSS; used Appwrite for backend services."
    ],
    thumbnail: 'https://github.com/Darkrider0007/Shark-Tank/raw/main/public/STlogo1.png',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Appwrite', 'Redux Toolkit', 'React Hook Form'],
    repoLink: 'https://github.com/Darkrider0007/Shark-Tank',
    liveLink: 'https://shark-tank-ca5bwet1b-darkrider0007.vercel.app/'

  },
  {
    _id: '669b81586afba3ec795d42af',
    name: 'Blog Project',
    slug: 'blog-project',
    description: [
      "Implemented secure user authentication and account creation.",
      "Developed a user-friendly interface for articles with React and Tailwind CSS; used Appwrite for backend services."
    ],
    thumbnail: 'https://github.com/Darkrider0007/Blog-project/blob/main/blog.png?raw=true',
    technologies: ['React', 'Tailwind CSS', 'Appwrite', 'Redux Toolkit', 'React Hook Form'],
    repoLink: 'https://github.com/Darkrider0007/blog-project',
    liveLink: 'https://blog-project-jet-zeta.vercel.app/'
  }

];

export { projectsLocal };
