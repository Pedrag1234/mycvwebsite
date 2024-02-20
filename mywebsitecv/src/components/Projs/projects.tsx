'use client';

import './projects.css';
import Badge from './badge';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Button } from '@/components/ui/button';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

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
  <Card
    className="transform transition duration-500 hover:scale-110 max-w-[450px]"
    onClick={() => (window.location.href = project.link)}
  >
    <CardHeader>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link" className="text-lg font-bold">
            <Link href={project.link}>{project.title}</Link>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="max-w-xs">
          <div className="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src={project.link_img} />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">{project.title}</h4>
              <p className="text-sm">{project.desc}</p>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    </CardHeader>
    <CardContent className="flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <Image
          src={project.img}
          alt="Image"
          className="rounded-md w-auto h-auto"
          width={300}
          height={300}
          layout="fixed"
        />
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-2 max-w-[300px] mt-4">
        {project.badges.map((badge, index) => (
          <Badge key={index} title={badge.title} color={badge.color} />
        ))}
      </div>
    </CardContent>
  </Card>
);

interface ProjsSectionProps {
  projects: Project[];
}

const ProjsSection: React.FC<ProjsSectionProps> = ({ projects }) => (
  <div className="projects-container flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2 gap-8 lg:mx-8 max-w-[1600px]">
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
      badges: [
        getBadge('Typescript'),
        getBadge('React'),
        getBadge('Next.js'),
        getBadge('Tailwind CSS'),
        getBadge('CSS'),
        getBadge('HTML'),
      ],
      link: 'https://www.google.com/',
      link_img: 'https://avatars.githubusercontent.com/u/24899230?v=4',
    },
  ];

  return (
    <section id="projs" className="p-8">
      <h2 className="text-center text-3xl font-semibold pt-6 mb-6 text-white">My Projects</h2>
      <ProjsSection projects={projects} />
    </section>
  );
}
