import React from 'react';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';

export default function Contacts() {
  const contacts = [
    {
      title: 'Email',
      content: 'pedro_miguel_azevedo@outlook.com',
      icon: <MdOutlineEmail style={{ color: 'white' }} />,
    },
    { title: 'Phone', content: '(+351) 935-452-174', icon: <MdOutlinePhone style={{ color: 'white' }} /> },
  ];

  return (
    <section id="contacts" className="bg-primary w-full border-b md:border-0">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold pt-6 mb-6 text-white">Let's get in touch</h2>
        <div className="max-w-md pb-6 pl-6">
          {contacts.map((contact, idy) => (
            <div className="flex items-center mb-4" key={idy}>
              {contact.icon}
              <p className="text-white ml-4">
                <span className="font-bold">{contact.title}:</span> {contact.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
