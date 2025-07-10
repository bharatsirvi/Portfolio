import { Github, ExternalLink, Download } from "lucide-react";
import { projects } from "../../utils/constants";
import TechBackground from "../common/TechBackground.jsx";

const Projects = ({ setSelectedProject }) => {
  return (
    <section
      id="projects"
      className="pt-32 pb-16 px-4 relative overflow-hidden"
    >
      <TechBackground variant="projects" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div
    className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-400/50 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20"
    onClick={onClick}
  >
    {/* Gradient Overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500`}
    ></div>

    {/* Animated Background Pattern */}
    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full blur-2xl transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>
    </div>

    <div className="relative p-8 h-full flex flex-col">
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl border border-purple-400/20 group-hover:scale-110 transition-transform duration-300">
            <img
              src={project.icon}
              alt={`${project.name} logo`}
              className="w-12 h-12 object-contain filter drop-shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
              {project.name}
            </h3>
            <p className="text-purple-400 text-sm font-medium">
              {project.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Image Preview Section */}
      {(project.images || project.desktopImages) && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-xs font-medium">
              {project.images?.length || project.desktopImages?.length || 0}{" "}
              Screenshots
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2 rounded-xl overflow-hidden">
            {(project.images || project.desktopImages)
              ?.slice(0, 3)
              .map((image, i) => (
                <div
                  key={i}
                  className="aspect-video bg-gradient-to-br from-slate-700/50 to-slate-600/50 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={image}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
          </div>
          {(project.images?.length || 0) +
            (project.desktopImages?.length || 0) >
            3 && (
            <div className="text-center mt-2">
              <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
                +
                {(project.images?.length || 0) +
                  (project.desktopImages?.length || 0) -
                  3}{" "}
                more images
              </span>
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.slice(0, 4).map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium rounded-xl hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 transition-all duration-300"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 4 && (
          <span className="px-3 py-1.5 bg-slate-700/50 border border-slate-600/50 text-slate-400 text-xs font-medium rounded-xl">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
        <button
          onClick={onClick}
          className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 mr-3"
        >
          View Details
        </button>

        <div className="flex items-center space-x-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 border border-slate-600/50 text-gray-400 hover:text-white hover:border-purple-400/50 rounded-xl transition-all duration-300 transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
            title="View Source"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800/50 border border-slate-600/50 text-gray-400 hover:text-white hover:border-purple-400/50 rounded-xl transition-all duration-300 transform hover:scale-110"
            onClick={(e) => e.stopPropagation()}
            title={project.name === "Vaultix" ? "Download" : "Live Demo"}
          >
            {project.name === "Vaultix" ? (
              <Download className="w-5 h-5" />
            ) : (
              <ExternalLink className="w-5 h-5" />
            )}
          </a>
        </div>
      </div>
    </div>

    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/5 group-hover:to-pink-600/5 transition-all duration-500 pointer-events-none"></div>
  </div>
);

export default Projects;
