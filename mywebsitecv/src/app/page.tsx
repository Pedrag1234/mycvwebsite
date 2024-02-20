import AboutMe from '@/components/AboutMe/aboutme';
import Contacts from '@/components/Contacts/contacts';
import Footer from '@/components/Footer/footer';
import Intro from '@/components/Introduction/intro';
import NavBar from '@/components/NavBar/navbar';
import Projects from '@/components/Projs/projects';
import Timeline from '@/components/Timeline/timeline';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <div className="bg-website-pattern bg-cover bg-no-repeat bg-center pt-12">
        <Timeline />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
