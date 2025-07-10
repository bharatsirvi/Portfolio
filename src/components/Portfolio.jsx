import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
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
      setIsScrolling(true); // Disable scroll listener during programmatic scroll
      setActiveSection(sectionId); // Immediately set the target section as active
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);

      // Re-enable scroll listener after scroll animation completes
      // Using a slightly longer timeout to ensure smooth scroll is completely finished
      setTimeout(() => {
        setIsScrolling(false);
      }, 1200); // Increased timing for better reliability
    }
  };

  // Add scroll event listener to update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Don't update active section during programmatic scrolling
      if (isScrolling) return;

      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "achievements",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Call once to set initial active section
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]); // Add isScrolling as dependency

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
      <Projects setSelectedProject={setSelectedProject} />
      <Skills />
      <Achievements />
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
