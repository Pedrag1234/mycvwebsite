'use client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

import { IoDownload } from 'react-icons/io5';
import { FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

import Link from 'next/link';
import React from 'react';

export default function Intro() {
  const { toast } = useToast();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, '');

    const elem = document.getElementById(targetId);

    if (elem) {
      const rect = elem.getBoundingClientRect();
      const isAlreadyInView = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isAlreadyInView) {
        window.scrollTo({
          top: rect.top + window.scrollY,
          behavior: 'smooth',
        });
      }
    }
  };

  const downloadResume = () => {
    const fileUrl = '/images/Pedro Azevedo CV.pdf';  // Updated path

    const link = document.createElement('a');
    link.href = fileUrl;
    link.target = '_blank';
    link.download = 'Pedro Azevedo CV.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen"
    >
      <Card className="bg-indigo-500/30 border-indigo-500/30 shadow-md mx-6">
        <CardHeader>
          <CardTitle className="flex justify-center text-3xl  text-white font-ubuntu">Hello! I&apos;m Pedro Azevedo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <p className="flex justify-center text-white font-ubuntu text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center mx-auto">
            I am a rececently graduated Porto based software engineer and I am currently looking for work.
          </p>
          <p className="flex justify-center text-white font-ubuntu text-sm md:text-base max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl text-center mx-auto">
            I enjoy reading, exercise and playing videogames. I also consider myself an honest hardworking person
            that strives to continually improve myself as a person and developer.
          </p>
          <div className="flex justify-center space-x-16 py-4">
            <a href="https://github.com/Pedrag1234" target="_blank" rel="noopener noreferrer">
              <FaGithub size={34} color="white" className="hover:fill-gray-400" />
            </a>
            <a href="https://www.linkedin.com/in/pedro-azevedo-8723952a3/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={34} color="white" className="hover:fill-gray-400" />
            </a>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center flex-col md:flex-row">
          <Button
            className="flex items-center md:mr-4 md:mb-0 mb-2 w-40 bg-indigo-600 hover:bg-indigo-500"
            onClick={() => {
              toast({
                title: 'Downloading Resume',
                description: new Date().toLocaleString(),
              });
              downloadResume();
            }}
          >
            <IoDownload size={19} className="mr-2" /> Resume
          </Button>
          <Button className="flex items-center w-40 bg-indigo-600 hover:bg-indigo-500">
            <Link href="#contacts" onClick={handleScroll} className="flex items-center">
              <FaPhone className="mr-2" /> Contacts
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
