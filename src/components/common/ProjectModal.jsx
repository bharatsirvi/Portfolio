import React, { useState } from "react";
import {
  X,
  ChevronDown,
  Star,
  ExternalLink,
  Github,
  Download,
} from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllDesktopImages, setShowAllDesktopImages] = useState(false);
  const [showAllMobileImages, setShowAllMobileImages] = useState(false);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-gradient-to-br from-slate-900/95 to-gray-900/95 backdrop-blur-sm rounded-2xl border border-purple-400/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <ModalHeader project={project} onClose={onClose} />
          <ModalContent
            project={project}
            showAllImages={showAllImages}
            showAllDesktopImages={showAllDesktopImages}
            showAllMobileImages={showAllMobileImages}
            setShowAllImages={setShowAllImages}
            setShowAllDesktopImages={setShowAllDesktopImages}
            setShowAllMobileImages={setShowAllMobileImages}
          />
        </div>
      </div>
    </div>
  );
};

const ModalHeader = ({ project, onClose }) => (
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {project.name}
    </h2>
    <button
      onClick={onClose}
      className="text-gray-400 hover:text-purple-400 transition-colors"
    >
      <X className="w-6 h-6" />
    </button>
  </div>
);

const ModalContent = ({
  project,
  showAllImages,
  showAllDesktopImages,
  showAllMobileImages,
  setShowAllImages,
  setShowAllDesktopImages,
  setShowAllMobileImages,
}) => {
  return (
    <>
      <div className="mb-6">
        <MainImage project={project} />
        <ProjectDescription project={project} />
      </div>

      <KeyFeatures features={project.features} />
      <Technologies technologies={project.technologies} />

      <div className="mb-6">
        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          More Screenshots
        </h3>
        {project.name === "DevTinder" ? (
          <DevTinderGallery
            project={project}
            showAllDesktopImages={showAllDesktopImages}
            showAllMobileImages={showAllMobileImages}
            setShowAllDesktopImages={setShowAllDesktopImages}
            setShowAllMobileImages={setShowAllMobileImages}
          />
        ) : (
          <StandardGallery
            project={project}
            showAllImages={showAllImages}
            setShowAllImages={setShowAllImages}
          />
        )}
      </div>
    </>
  );
};

const MainImage = ({ project }) => (
  <div className="mb-6">
    {project.name === "Vaultix" ? (
      <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
        {project.images.slice(0, 3).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`${project.name} screenshot ${index + 1}`}
              className="w-full h-auto object-contain rounded-lg shadow-lg bg-gray-800"
            />
          </div>
        ))}
      </div>
    ) : project.name === "DevTinder" ? (
      <div className="max-w-4xl mx-auto">
        <img
          src={project.desktopImages[0]}
          alt={`${project.name} main screenshot`}
          className="w-full h-auto object-contain rounded-lg shadow-lg bg-gray-800"
        />
      </div>
    ) : (
      <img
        src={project.images[0]}
        alt={project.name}
        className="w-full object-contain rounded-lg shadow-lg bg-gray-800"
      />
    )}
  </div>
);

const ProjectDescription = ({ project }) => (
  <div>
    <p className="text-gray-300 mb-4">{project.description}</p>
    <div className="flex space-x-4 mb-4">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        {project.name === "Vaultix" ? (
          <>
            <Download className="w-4 h-4" />
            <span>Download APK</span>
          </>
        ) : (
          <>
            <ExternalLink className="w-4 h-4" />
            <span>Live Demo</span>
          </>
        )}
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-700 to-gray-700 hover:from-slate-600 hover:to-gray-600 rounded-lg transition-all duration-300 transform hover:scale-105"
      >
        <Github className="w-4 h-4" />
        <span>GitHub</span>
      </a>
    </div>
  </div>
);

const KeyFeatures = ({ features }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
      Key Features
    </h3>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2 text-gray-300">
          <Star className="w-4 h-4 text-purple-400" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Technologies = ({ technologies }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
      Technologies Used
    </h3>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 rounded-full border border-purple-400/30"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const ShowMoreButton = ({ onClick, isShowingAll, count, variant }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${variant} text-white rounded-lg transition-all duration-300 transform hover:scale-105`}
  >
    <span>{isShowingAll ? "Show Less" : `Show More (${count} more)`}</span>
    <ChevronDown
      className={`w-4 h-4 transition-transform duration-300 ${
        isShowingAll ? "rotate-180" : ""
      }`}
    />
  </button>
);

const DevTinderGallery = ({
  project,
  showAllDesktopImages,
  showAllMobileImages,
  setShowAllDesktopImages,
  setShowAllMobileImages,
}) => (
  <div className="space-y-8">
    {/* Desktop Section */}
    <div>
      <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 flex items-center">
        🖥️ Desktop View
      </h4>
      <div className="space-y-4">
        {(showAllDesktopImages
          ? project.desktopImages.slice(1)
          : project.desktopImages.slice(1, 4)
        ).map((image, index) => (
          <div key={`desktop-${index}`} className="max-w-4xl mx-auto">
            <img
              src={image}
              alt={`Desktop screenshot ${index + 2}`}
              className="w-full h-auto object-contain rounded-lg shadow-lg bg-gray-800 hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {project.desktopImages.length > 4 && (
        <div className="mt-4 text-center">
          <ShowMoreButton
            onClick={() => setShowAllDesktopImages(!showAllDesktopImages)}
            isShowingAll={showAllDesktopImages}
            count={project.desktopImages.length - 4}
            variant="from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          />
        </div>
      )}
    </div>

    {/* Mobile Section */}
    <div>
      <h4 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 flex items-center">
        📱 Mobile View
      </h4>
      <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
        {(showAllMobileImages
          ? project.mobileImages
          : project.mobileImages.slice(0, 4)
        ).map((image, index) => (
          <div
            key={`mobile-${index}`}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <img
              src={image}
              alt={`Mobile screenshot ${index + 1}`}
              className="w-full h-auto object-contain bg-gray-800 group-hover:scale-105 transition-transform duration-300 min-h-[300px]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
      {project.mobileImages.length > 4 && (
        <div className="mt-4 text-center">
          <ShowMoreButton
            onClick={() => setShowAllMobileImages(!showAllMobileImages)}
            isShowingAll={showAllMobileImages}
            count={project.mobileImages.length - 4}
            variant="from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700"
          />
        </div>
      )}
    </div>
  </div>
);

const StandardGallery = ({ project, showAllImages, setShowAllImages }) => (
  <div>
    <div
      className={`gap-4 ${
        project.name === "Vaultix" ? "grid grid-cols-3" : "grid grid-cols-2"
      }`}
    >
      {(showAllImages
        ? project.images.slice(project.name === "Vaultix" ? 3 : 1)
        : project.images.slice(
            project.name === "Vaultix" ? 3 : 1,
            project.name === "Vaultix" ? 9 : 5
          )
      ).map((image, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <img
            src={image}
            alt={`${project.name} screenshot ${
              project.name === "Vaultix" ? index + 4 : index + 2
            }`}
            className="w-full h-auto object-contain bg-gray-800 group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
        </div>
      ))}
    </div>
    
    {/* Show More Button for Standard Gallery */}
    {project.images && 
     project.images.length > (project.name === "Vaultix" ? 9 : 5) && (
      <div className="mt-6 text-center">
        <ShowMoreButton
          onClick={() => setShowAllImages(!showAllImages)}
          isShowingAll={showAllImages}
          count={
            project.images.length - (project.name === "Vaultix" ? 9 : 5)
          }
          variant={
            project.name === "Vaultix" 
              ? "from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
              : "from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
          }
        />
      </div>
    )}
  </div>
);

export default ProjectModal;
