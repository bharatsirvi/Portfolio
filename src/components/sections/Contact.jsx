import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { linkedInLink } from '../../utils/constants';
import TechBackground from '../common/TechBackground.jsx';

const Contact = () => {
  return (
    <section id="contact" className="py-32 pb-48 px-4 relative overflow-hidden">
      <TechBackground variant="contact" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to discussing new opportunities and interesting projects
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <ContactCard
            href="mailto:bharatsirvi855@gmail.com"
            icon={<Mail className="w-8 h-8 text-indigo-400 mx-auto mb-4" />}
            title="Email"
            content="bharatsirvi855@gmail.com"
          />
          <ContactCard
            href="tel:+918949885630"
            icon={<Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />}
            title="Phone"
            content="+91 8949885630"
          />
          <ContactCard
            href={linkedInLink}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />}
            title="LinkedIn"
            content="Connect with me"
          />
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ href, target, rel, icon, title, content }) => (
  <a
    href={href}
    target={target}
    rel={rel}
    className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-indigo-400/50 transition-all duration-300 hover:transform hover:scale-105"
  >
    {icon}
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{content}</p>
  </a>
);

export default Contact;
