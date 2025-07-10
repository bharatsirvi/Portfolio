import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Photo from "../../assets/images/bharat.jpg";
import { githubLink, linkedInLink } from "../../utils/constants.jsx";

const TechBackground = () => (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40"></div>
    
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '80px 80px',
    }}></div>
    
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A855F7' fill-opacity='0.03'%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' font-family='monospace' font-size='14'%3E01%3C/text%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px',
    }}></div>
    
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(circle at 30% 20%, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 25%, transparent 50%)',
    }}></div>
    <div className="absolute inset-0" style={{
      background: 'radial-gradient(circle at 70% 80%, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 25%, transparent 50%)',
    }}></div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/90"></div>
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-pink-900/10 animate-pulse"></div>
  </div>
);

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <TechBackground />
      <div className="relative z-10 text-center px-4">
        <div className="mb-8">
          <img
            src={Photo}
            alt="Bharat Kumar"
            className="w-40 h-40 rounded-full mx-auto border-4 border-purple-400 shadow-2xl animate-pulse object-cover"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-fadeIn">
          Bharat Kumar
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slideUp">
          Full Stack Developer & Problem Solver
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href={githubLink}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={linkedInLink}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:bharatsirvi855@gmail.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
