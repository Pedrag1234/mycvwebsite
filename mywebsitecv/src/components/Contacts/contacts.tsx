import React from 'react';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

export default function Contacts() {
  const contacts = [
    {
      title: 'Email',
      content: 'pedro_miguel_azevedo@outlook.com',
      icon: <MdOutlineEmail style={{ color: 'white' }} />,
    },
    //{ title: 'Phone', content: '(+351) 935-452-174', icon: <MdOutlinePhone style={{ color: 'white' }} /> },
  ];

  return (
    <section id="contacts" className="bg-primary w-full border-b md:border-0 ">
      <div className="container mx-2 md:mx-auto">
        <h2 className="text-base md:text-3xl font-semibold pt-6 mb-6 text-white">Let&apos;s get in touch</h2>
        <div className="max-w-md pb-6 pl-2 md:pl-6">
          {contacts.map((contact, idy) => (
            <div className="flex items-center mb-4" key={idy}>
              {contact.icon}
              <p className="text-white ml-4 text-sm md:text-base">
                <span className="font-bold">{contact.title}:</span> {contact.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
