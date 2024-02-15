import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { Button } from '@/components/ui/button';

import { IoDownload } from 'react-icons/io5';
import { FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Intro() {
  return (
    <section id="home" className="flex items-center justify-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-center text-4xl">I'm Pedro Azevedo</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-4">
          <p className="flex justify-center">
            I am a Porto based software engineer and game dev currently looking for work.
          </p>
          <p className="flex justify-center">
            In my free time, I enjoy doing some reading, playing video games, and going to the gym.
          </p>
          <div className="flex justify-center space-x-16">
            <FaGithub size={24} />
            <FaLinkedin size={24} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button className="mr-4">
            <IoDownload className="mr-2" /> Resume
          </Button>
          <Button>
            <FaPhone className="mr-2" /> Contacts
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
