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
      <div className="bg-intro-image bg-center bg-cover bg-fixed pt-12">
        <Intro />
        <AboutMe />
        <Timeline />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}
