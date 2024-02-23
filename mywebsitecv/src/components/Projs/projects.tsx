'use client';

import './projects.css';
import Badge from './badge';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Badges = new Map<string, string>([
  ['C#', '#68217A'],
  ['C++', '#6495ED'],
  ['C', '#FF5733'], 
  ['Python', '#306998'],
  ['Java', '#f89820'],
  ['Typescript', '#007ACC'],
  ['Unreal', '#FF8C00'], 
  ['Unity', '#FF1493'], 
  ['Gamemaker', '#8B008B'],
  ['React', '#61DAFB'],
  ['Next.js', '#00CED1'], 
  ['Tailwind CSS', '#06B6D4'],
  ['CSS', '#FF4500'],
  ['HTML', '#E34F26'],
  ['Makefile', '#32CD32'], 
  ['Dissertation', '#990000'], 
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
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="bg-white min-w-320 cursor-pointer group">
      <article
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 md:min-h-350 transform duration-500 relative"
        style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'cover', minHeight: '350px' }}
      >
        <div
          className="pt-4 bg-black bg-opacity-20 min-h-150 md:min-h-350 h-full px-4 md:px-6 flex flex-col flex-grow justify-start transition duration-300"
          style={{ minHeight: 'inherit' }}
        >
          <h2 className="text-white text-xl md:text-3xl mb-2 flex items-center transform translate-y-0 group-hover:translate-y-2 duration-300">
            <Avatar>
              <AvatarImage src={project.link_img} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="ml-2">{project.title}</span>
          </h2>
          <div className="w-16 h-2 bg-indigo-600 rounded-full mb-2 transform translate-y-0 group-hover:translate-y-2 duration-300"></div>
          <p className="opacity-0 pt-4 text-white font-bold text-sm md:text-l group-hover:opacity-100 transform duration-300">
            {project.desc}
          </p>
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
  <div className="projects-container flex justify-center pb-16">
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
      title: 'Masters Thesis',
      desc: 'My thesis about ranking compiler/interpreter versions by energy efficiency',
      img: '/images/dissertation.jpg',
      badges: [getBadge('Dissertation'),],
      link: 'https://hdl.handle.net/10216/152072',
      link_img: 'https://sigarra.up.pt/feup/WEB_GESSI_DOCS.download_file?p_name=F1323763649/minerva_new.jpg',
    },
    {
      title: 'Resource-probe',
      desc: 'Tool developed for my Masters Thesis to collecting resource usage (energy, memory, etc)',
      img: '/images/code.jpg',
      badges: [getBadge('Python'), getBadge('C'), getBadge('C++'), getBadge('Java'), getBadge('Makefile')],
      link: 'https://github.com/bernas670/resource-probe',
      link_img: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    },
    {
      title: 'Jeronimo',
      desc: '3D Game Developed during Game Dev Class',
      img: '/images/jeronimo.png',
      badges: [getBadge('Unity'), getBadge('C#')],
      link: 'https://guilhermesgama.itch.io/jeronimo',
      link_img: 'https://static.itch.io/images/app-icon.svg',
    },
    {
      title: 'Race to the Space',
      desc: '2D Game Developed during Game Dev Class',
      img: '/images/race2space.png',
      badges: [getBadge('Unity'), getBadge('C#')],
      link: 'https://pedrag1234.itch.io/race-to-the-space',
      link_img: 'https://static.itch.io/images/app-icon.svg',
    },
    {
      title: 'Website Cv',
      desc: 'My personal page, made with Next.js, Typescript and Tailwind CSS',
      img: '/images/next.jpg',
      badges: [getBadge('Typescript'), getBadge('React'), getBadge('Next.js'), getBadge('Tailwind CSS')],
      link: 'https://github.com/Pedrag1234/mycvwebsite',
      link_img: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
    },
  ];

  return (
    <section id="projs" className="m-12 sm:m-2">
      <h2 className="text-center text-3xl font-semibold pt-8 pb-8 md:pt-12 md:pb-12 mb-6 text-white">My Projects</h2>
      <ProjsSection projects={projects} />
    </section>
  );
}
