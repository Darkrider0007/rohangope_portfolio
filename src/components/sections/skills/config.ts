import { Skill } from '@/types/skill';
import {
  BrainCircuit,
  CodeIcon,
  DatabaseIcon,
  LayoutIcon,
  SmartphoneIcon
} from 'lucide-react';

const skills: Skill[] = [
  {
    name: 'Full stack Development',
    description: 'Building beautiful and functional websites.',
    Icon: CodeIcon,
    tools: {
      Frontend: ['React', 'Tailwind CSS', 'Shadcn', 'Redux', 'Different 3rd party libraries'],
      Backend: ['Node.js', 'Express', 'Mongoose ORM', 'Different 3rd party libraries'],
      Fullstack: ['Next.js'],
      Database: ['MongoDB', 'MySQL', 'PostgreSQL'],
      'Version Control': ['Git', 'GitHub']
    }
  },
  {
    name: 'Data Structures & Algorithms',
    description: 'Solving problems efficiently.',
    Icon: BrainCircuit,
    tools: {
      "Data-Structures": ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees', 'Graphs'],
      Algorithms: ['Searching', 'Sorting', 'Greedy Algorithms']
    }
  },
  {
    name: 'Database Management',
    description: 'Storing and organizing data efficiently.',
    Icon: DatabaseIcon,
    tools: {
      Databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
      'ORM/ODM': ['Mongoose', 'Sequelize']
    }
  },
  {
    name: 'Mobile Development',
    description: 'Crafting apps for smartphones and tablets.',
    Icon: SmartphoneIcon,
    tools: {
      'Mobile Development': ['React Native', 'Expo', 'Firebase', 'Different 3rd party libraries'],
    }
  }
];

export { skills };
