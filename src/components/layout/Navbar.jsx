import { X, Menu, Code2, Download } from "lucide-react";
import Photo from "../../assets/images/bharat-kumar.jpg";

const Navbar = ({
  activeSection,
  setActiveSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection,
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-purple-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div
            className="flex items-center group cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <div className="relative mr-3">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-xl border border-purple-400/30">
                <img
                  src={Photo}
                  alt="Bharat Kumar"
                  className="w-8 h-8 rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Bharat Kumar
              </h1>
              <Code2 className="w-4 h-4 text-purple-400 opacity-60" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-2 border border-purple-400/20">
              {[
                "home",
                "about",
                "projects",
                "skills",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span className="relative z-10">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                  {activeSection === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-sm"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Download Resume Button */}
            <button
              onClick={() => {
                // Create a temporary link to download the resume
                const link = document.createElement("a");
                link.href = "/resume.pdf"; // You'll need to add your resume PDF to the public folder
                link.download = "Bharat_Kumar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="group relative px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25 flex items-center space-x-2"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              <span>Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Bharat_Kumar_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="p-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-violet-500/25"
            >
              <Download className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 text-gray-300 hover:text-white bg-slate-800/50 rounded-xl border border-purple-400/20 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-t border-purple-400/20 shadow-2xl">
            <div className="px-4 py-6 space-y-3">
              {[
                "home",
                "about",
                "projects",
                "skills",
                "achievements",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    activeSection === item
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    {activeSection === item && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
