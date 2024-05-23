import React from 'react';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

export default function Contacts() {
  const contacts = [
    {
      title: 'Email',
      content: 'pedro_miguel_azevedo@outlook.com',
      icon: <MdOutlineEmail style={{ color: 'white' }} />,
    },
  ];

  return (
    <section id="contacts" className="bg-indigo-500/30 border-indigo-500/30 w-full border-b md:border-0 shadow-md">
  <div className="container mx-auto text-center">
    <h2 className="text-base md:text-3xl font-semibold pt-6 mb-6 text-white font-ubuntu">Let&apos;s get in touch</h2>
    <div className="max-w-md pb-6 pl-2 md:pl-6 mx-auto">
      {contacts.map((contact, idy) => (
        <div className="flex items-center mb-4" key={idy}>
          {contact.icon}
          <p className="text-white font-ubuntu ml-4 text-sm md:text-base">
            <span className="font-bold">{contact.title}:</span> {contact.content}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}
