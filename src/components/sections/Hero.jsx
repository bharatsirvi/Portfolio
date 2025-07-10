import React, { useState, useEffect } from "react";
import { SiLeetcode } from "react-icons/si";

import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Code,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Photo from "../../assets/images/bharat.jpg";
import {
  githubLink,
  linkedInLink,
  leetcodeLink,
} from "../../utils/constants.jsx";
import TechBackground from "../common/TechBackground.jsx";

const Hero = ({ scrollToSection }) => {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Full Stack Developer",
    "Problem Solver",
    "DSA Enthusiast",
    "Code Artist",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setTypedText(currentRole.substring(0, typedText.length + 1));
          if (typedText === currentRole) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setTypedText(currentRole.substring(0, typedText.length - 1));
          if (typedText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-28 lg:pt-0 pb-16 sm:pb-20 lg:pb-0"
    >
      <TechBackground variant="hero" isHero={true} />

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-10 w-6 h-6 text-purple-400 animate-pulse opacity-60" />
        <Code className="absolute top-40 right-20 w-8 h-8 text-pink-400 animate-bounce opacity-40" />
        <Sparkles className="absolute bottom-40 left-20 w-4 h-4 text-blue-400 animate-pulse opacity-50" />
        <Code className="absolute bottom-60 right-10 w-6 h-6 text-purple-400 animate-bounce opacity-30" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Greeting */}
            <div className="space-y-2 animate-fadeInUp">
              <p className="text-lg text-purple-300 font-medium">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent leading-tight">
                Bharat Kumar
              </h1>
            </div>

            {/* Typing Animation */}
            <div className="h-12 sm:h-16 flex items-center justify-center lg:justify-start animate-fadeInUp delay-300">
              <span className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                {typedText}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed animate-fadeInUp delay-500">
              I love building web applications and solving problems with code. I
              enjoy creating user-friendly interfaces and working with modern
              technologies like React, Node.js, and databases. Always excited to
              learn new things.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeInUp delay-700">
              <button
                onClick={() => scrollToSection("projects")}
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400/50 bg-purple-400/10 backdrop-blur-sm text-purple-300 rounded-2xl font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 sm:w-5 h-4 sm:h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 animate-fadeInUp delay-1000">
              <SocialLink href={githubLink} icon={Github} label="GitHub" />
              <SocialLink
                href={linkedInLink}
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href={leetcodeLink}
                icon={SiLeetcode}
                label="LeetCode"
              />
              <SocialLink
                href="mailto:bharatsirvi855@gmail.com"
                icon={Mail}
                label="Email"
              />
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight delay-300">
            <div className="relative group">
              {/* Elegant Backdrop Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-pink-500/30 to-blue-600/40 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-all duration-700 scale-110 animate-pulse"></div>

              {/* Main Photo Container */}
              <div className="relative">
                {/* Sophisticated Border Ring */}
                <div className="w-80 h-80 sm:w-88 sm:h-88 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 p-1 group-hover:scale-[1.02] transition-all duration-500 shadow-2xl shadow-purple-500/25">
                  {/* Inner Container */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-full p-2 relative overflow-hidden">
                    {/* Image */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                      <img
                        src={Photo}
                        alt="Bharat Kumar"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />

                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      {/* Premium Shine Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rotate-45"></div>
                    </div>
                  </div>
                </div>

                {/* Minimalist Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-full blur-sm group-hover:scale-125 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-500/60 to-purple-600/60 rounded-full blur-sm group-hover:scale-110 transition-transform duration-500"></div>
                <div className="absolute top-1/3 -right-6 w-4 h-4 bg-blue-400/50 rounded-full blur-sm group-hover:scale-105 transition-transform duration-500"></div>
                <div className="absolute bottom-1/3 -left-6 w-3 h-3 bg-purple-400/50 rounded-full blur-sm group-hover:scale-105 transition-transform duration-500"></div>
              </div>

              {/* Elegant Background Rings */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-purple-400/20 rounded-full animate-spin-slow"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-pink-400/15 rounded-full animate-reverse-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group animate-fadeInUp delay-1200"
        onClick={() => scrollToSection("about")}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-gray-400 group-hover:text-purple-400 transition-colors">
            Scroll Down
          </span>
          <ChevronDown className="w-6 h-6 text-purple-400 animate-bounce group-hover:scale-110 transition-transform" />
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-3 bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl text-gray-400 hover:text-white hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </a>
);

export default Hero;
