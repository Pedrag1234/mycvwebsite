import AboutMe from '@/components/AboutMe/aboutme';
import Contacts from '@/components/Contacts/contacts';
import Footer from '@/components/Footer/footer';
import Intro from '@/components/Introduction/intro';
import NavBar from '@/components/NavBar/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutMe />
      <Contacts />
      <Footer />
    </>
  );
}
