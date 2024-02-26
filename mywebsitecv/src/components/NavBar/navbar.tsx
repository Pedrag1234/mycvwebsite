'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

import { FaHome, FaPhone } from 'react-icons/fa';

import { IoPersonSharp, IoGrid } from 'react-icons/io5';

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: 'Home', path: '#home', icon: <FaHome /> },
    { title: 'About Me', path: '#about', icon: <IoPersonSharp /> },
    { title: 'Projects', path: '#projs', icon: <IoGrid /> },
    { title: 'Contacts', path: '#contacts', icon: <FaPhone /> },
  ];

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

  return (
    <nav className="bg-[#140338]  w-full border-b md:border-0 sticky top-0 z-20">
      <div className="items-center px-4 max-w-screen-xl md:flex md:px-8">
        <div className="flex items-left justify-between py-3 md:py-5 md:block">
          <div className="md:hidden">
            <button
              className="text-white font-mono outline-none p-2 rounded-md hover:text-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
          <ul className="justify-left items-left space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-white font-mono hover:text-gray-400">
                <div className="container px-0" style={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <Link href={item.path} style={{ marginLeft: '8px' }} onClick={handleScroll}>
                    {item.title}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
