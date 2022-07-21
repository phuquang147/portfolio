import project1_1 from '~/assets/images/projects/project1/project1_1.png';
import project1_2 from '~/assets/images/projects/project1/project1_2.png';

export interface ProjectProps {
  id: string;
  name: string;
  details: string;
  date: Date;
  client: string;
  category: string;
  technologies: string[];
  github: string;
  demo: string;
  images: string[];
}

const projects: ProjectProps[] = [
  {
    id: 'ec47e0de-2372-4ff8-aad9-d87aca69e2da',
    name: 'Portfolio',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique nisl id rutrum facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam id pharetra justo. Donec vel elementum mauris, posuere fermentum neque. Praesent lobortis est sed odio vulputate, vitae blandit metus imperdiet. Pellentesque et tincidunt ipsum. In sit amet mollis leo. Ut arcu arcu, sagittis eu dui ut, suscipit convallis massa.',
    date: new Date(),
    client: 'Me',
    category: 'Website',
    technologies: ['HTML', 'CSS', 'JS', 'ReactJs', 'Tailwind', 'Typescript'],
    github: 'https://github.com/phuquang147/portfolio',
    demo: 'https://portfolio-phuquang147.vercel.app/',
    images: [project1_1, project1_2],
  },
];

export default projects;
