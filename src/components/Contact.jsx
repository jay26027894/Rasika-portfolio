import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import GlassIcons from './GlassIcons';

const contactItems = [
  {
    icon: <FaEnvelope size={24} />,
    color: 'teal',
    label: 'Email',
    link: 'mailto:rasika.kharche6@gmail.com',
  },
  {
    icon: <FaLinkedin size={24} />,
    color: 'blue',
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rasikakharche/',
  },
];

const Contact = () => (
  <section className="py-20  text-white">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Contact</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-10">
        Feel free to reach out via email or connect on LinkedIn.
      </p>

      {/* Glass Icons Centered */}
      <div className="flex justify-center">
        <GlassIcons
          items={contactItems.map((item) => ({
            ...item,
            customClass: 'hover:scale-105',
            icon: (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full flex items-center justify-center"
              >
                {item.icon}
              </a>
            ),
          }))}
          className="max-w-xl"
        />
      </div>
    </div>
  </section>
);

export default Contact;
