import Image from 'next/image';
import React from 'react';
import './aboutme.css';

import { FaLocationDot, FaFlag, FaCalendarDay, FaLanguage } from 'react-icons/fa6';

import { FaUniversity, FaStar } from 'react-icons/fa';

import { Twemoji } from 'react-emoji-render';

interface Info {
  title: string;
  desc: React.ReactNode;
  icon?: React.ReactNode;
}

const InfoCard: React.FC<Info> = ({ title, desc, icon }) => (
  <div className="px-6 mb-4 w-full max-w-md">
    <strong className="flex items-center font-ubuntu text-sm md:text-base" style={{ color: '#5A9EFF' }}>
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </strong>
    <div className="emoji-list-container font-ubuntu text-sm md:text-base">{desc}</div>
  </div>
);

interface InfoSectionProps {
  infos: Info[];
}

const InfoSection: React.FC<InfoSectionProps> = ({ infos }) => (
  <div className="grid auto-cols-auto md:grid-cols-2 gap-x-10 gap-y-4 pt-8">
    {infos.map((info, index) => (
      <InfoCard key={index} {...info} />
    ))}
  </div>
);

export default function AboutMe() {
  const infos: Info[] = [
    { title: 'Location:', desc: 'Porto, Matosinhos', icon: <FaLocationDot /> },
    { title: 'Nationality:', desc: 'Portuguese', icon: <FaFlag /> },
    { title: 'Study:', desc: 'University of Porto', icon: <FaUniversity /> },
    { title: 'Age:', desc: "I'm 26", icon: <FaCalendarDay /> },
    { title: 'Interests:', desc: 'Video Games, Books, Movies, Gym, Anime', icon: <FaStar /> },
    {
      title: 'Languages:',
      desc: (
        <ul className="emoji-list">
          <li>
            <span className="emoji-item">
              <Twemoji svg text="🇬🇧" />
              <span className="language-text">English - C2</span>
            </span>
          </li>
          <li>
            <span className="emoji-item">
              <Twemoji svg text="🇵🇹" />
              <span className="language-text">Portuguese - C1</span>
            </span>
          </li>
          <li>
            <span className="emoji-item">
              <Twemoji svg text="🇪🇸" />
              <span className="language-text">Spanish - A2</span>
            </span>
          </li>
        </ul>
      ),
      icon: <FaLanguage size={20} />,
    },
  ];

  return (
    <section id="about" className="bg-indigo-500/30 border-indigo-500/30 w-full border-b md:border-0 shadow-md">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-semibold pt-6 mb-6 text-white font-ubuntu">About Me</h2>
        <div className="mx-auto flex flex-col md:flex-row items-start flex-shrink-0">
          <div className="basis-1/4 mb-4 mt-4 md:mb-0 relative w-full md:w-1/2 order-1 md:order-1">
            <div className="aspect-w-3 aspect-h-3 md:min-w-[300px] md:min-h-[300px] flex justify-center items-center">
              <Image
                src="/images/me.jpg"
                alt="Image"
                className="rounded-full"
                width={300}
                height={300}
                layout="fixed"
              />
            </div>
          </div>

          <div className="md:pl-16 max-w-[800px] basis-3/4 ml-4 mt-4 md:w-1/2 text-white overflow-hidden order-2 md:order-2">
  <p className="text-white font-ubuntu text-base md:text-lg mb-4">
    Hello! I&apos;m Pedro Azevedo, a dedicated and hardworking software engineer with a passion for problem-solving and programming. While I am still gaining work experience, I am committed to developing my skills and expanding my knowledge in the tech industry.
  </p>
  <p className="text-white font-ubuntu text-base md:text-lg mb-4">
    My interests span both software development and video games, driving me to create innovative solutions and exciting projects. In my free time, I enjoy reading, playing video games, and staying active at the gym. These activities help me maintain a balanced lifestyle and keep my mind sharp.
  </p>
  <p className="text-white font-ubuntu text-base md:text-lg mb-4">
    I am eager to take on new challenges that allow me to grow as a developer and as a person. I look forward to contributing to impactful projects and collaborating with like-minded professionals in the tech community.
  </p>
  
  <InfoSection infos={infos} />
</div>
        </div>
      </div>
    </section>
  );
}
