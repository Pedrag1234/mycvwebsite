'use client';

import './projects.css';
import Badge from './badge';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Badges = new Map<string, string>([
  ['C#', '#68217A'],
  ['C++', '#6495ED'],
  ['C', '#CCCCCC'],
  ['Python', '#306998'],
  ['Java', '#f89820'],
  ['Typescript', '#007ACC'],
  ['Unreal', '#007ACC'],
  ['Unity', '#00539F'],
  ['Gamemaker', '#8B008B'],
  ['React', '#61DAFB'],
  ['Next.js', '#000000'],
  ['Tailwind CSS', '#06B6D4'],
  ['CSS', '#FF4500'],
  ['HTML', '#E34F26'],
  ['Makefile', '#00AEEF'],
]);

interface Badge {
  title: string;
  color: string;
}

function getBadge(name: string): Badge {
  const color = Badges.get(name);

  if (color !== undefined) {
    return {
      title: name,
      color: color,
    };
  } else {
    return {
      title: 'undefined',
      color: '#000000',
    };
  }
}

interface Project {
  title: string;
  desc: string;
  img: string;
  badges: Badge[];
  link: string;
  link_img: string;
}
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <a href={project.link}>
    <div className="bg-white min-w-370 cursor-pointer group">
    <article
      className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 relative"
      style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', minHeight: '350px' }}
    >
      <div
        className="pt-4 bg-black bg-opacity-20 min-h-150 min-w-150 h-full px-10 flex flex-col flex-grow justify-start transition duration-300"
        style={{ minHeight: 'inherit' }}
      >
        <h2 className="text-white text-3xl mb-2 flex items-center transform translate-y-0 group-hover:translate-y-2 duration-300">
          <Avatar>
            <AvatarImage src={project.link_img} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="ml-2">{project.title}</span>
        </h2>
        <div className="w-16 h-2 bg-blue-500 rounded-full mb-2 transform translate-y-0 group-hover:translate-y-2 duration-300"></div>
        <p className="opacity-0 text-white text-l group-hover:opacity-80 transform duration-300">{project.desc}</p>
      </div>
      <div className="mx-auto flex flex-wrap justify-center items-end bg-black bg-opacity-20 pb-2">
        {project.badges.map((badge, index) => (
          <Badge key={index} title={badge.title} color={badge.color} />
        ))}
      </div>
    </article>
  </div>
  </a>
);

interface ProjsSectionProps {
  projects: Project[];
}

const ProjsSection: React.FC<ProjsSectionProps> = ({ projects }) => (
  <div className="projects-container flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </div>
);

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Resource-probe',
      desc: 'Tool developed for my Masters Thesis to collecting resource usage(energy,memory,etc)',
      img: '/images/github.png',
      badges: [getBadge('Python'), getBadge('C'), getBadge('C++'), getBadge('Java'), getBadge('Makefile')],
      link: 'https://github.com/bernas670/resource-probe',
      link_img: 'https://avatars.githubusercontent.com/u/24899230?v=4',
    },
    {
      title: 'Jeronimo',
      desc: '3D Game Developed during Game Dev Class',
      img: '/images/jeronimo.png',
      badges: [getBadge('Unity'), getBadge('C#')],
      link: 'https://guilhermesgama.itch.io/jeronimo',
      link_img: 'https://pedrag1234.itch.io/static/images/frog-blue.png',
    },
    {
      title: 'Race to the Space',
      desc: '2D Game Developed during Game Dev Class',
      img: '/images/race2space.png',
      badges: [getBadge('Unity'), getBadge('C#')],
      link: 'https://pedrag1234.itch.io/race-to-the-space',
      link_img: 'https://pedrag1234.itch.io/static/images/frog-blue.png',
    },
    {
      title: 'Website Cv',
      desc: 'The current website',
      img: '/images/github.png',
      badges: [getBadge('Typescript'), getBadge('React'), getBadge('Next.js'), getBadge('Tailwind CSS')],
      link: 'https://www.google.com/',
      link_img: 'https://avatars.githubusercontent.com/u/24899230?v=4',
    },
  ];

  return (
    <section id="projs" className="m-16 ">
      <h2 className="text-center text-3xl font-semibold pt-6 mb-6 text-white">My Projects</h2>
      <ProjsSection projects={projects} />
    </section>
  );
}
