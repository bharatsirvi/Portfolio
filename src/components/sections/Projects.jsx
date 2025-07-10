import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../../utils/constants';

const Projects = ({ setSelectedProject }) => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-400/30 rounded-full px-6 py-3 shadow-lg">
            <span className="text-purple-400 font-medium">
              💡 Click on any project for more details
            </span>
            <ExternalLink className="w-4 h-4 text-purple-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, onClick }) => (
  <div
    className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
    onClick={onClick}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
    ></div>
    <div className="relative p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{project.icon}</span>
        <div className="flex space-x-2">
          <a
            href={project.github}
            className="text-gray-400 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={project.link}
            className="text-gray-400 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
      <p className="text-purple-400 text-sm mb-3">{project.subtitle}</p>
      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 3).map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 bg-purple-600/20 text-purple-400 text-xs rounded-full"
          >
            {tech}
          </span>
        ))}
        {project.technologies.length > 3 && (
          <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
            +{project.technologies.length - 3} more
          </span>
        )}
      </div>
    </div>
  </div>
);

export default Projects;
