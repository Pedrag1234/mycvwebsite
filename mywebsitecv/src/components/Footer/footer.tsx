import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Footer() {
  return (
    <footer id="footer" className="w-full border-b md:border-0 pt-6 pb-6">
      <div className="flex justify-center space-x-16">
        <a href="https://github.com/Pedrag1234" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="white" className="hover:fill-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/pedro-azevedo-8723952a3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="white" className="hover:fill-gray-400" />
        </a>
      </div>
      <p className="flex justify-center pt-2 text-white">Made by Pedro Azevedo</p>
      <div className="flex flex-col items-center">
        <p className="text-white text-xs mt-6">Using:</p>
        <div className="flex justify-center space-x-8 mt-4 ml-2">
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex flex-col items-center text-xs"
          >
            <SiNextdotjs size={24} color="white" className="hover:fill-gray-400" />
            Next.js
          </a>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs flex flex-col items-center"
          >
            <SiReact size={24} color="white" className="hover:fill-gray-400" />
            React
          </a>
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex flex-col items-center text-xs"
          >
            <SiTailwindcss size={24} color="white" className="hover:fill-gray-400" />
            Tailwind
          </a>
        </div>
      </div>
    </footer>
  );
}
