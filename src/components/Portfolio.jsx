import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import ProjectModal from "./common/ProjectModal";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsScrolling(true);
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setTimeout(() => {
        setIsScrolling(false);
      }, 1200);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = [
        "home",
        "about",
        "experience",
        "projects",
        "skills",
        "achievements",
        "certifications",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Experience />
      <Projects setSelectedProject={setSelectedProject} />
      <Skills />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;

