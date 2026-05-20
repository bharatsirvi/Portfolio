import { Briefcase, MapPin, Calendar, ArrowRight } from "lucide-react";
import { experience } from "../../utils/constants";
import TechBackground from "../common/TechBackground.jsx";

// Parses **bold** markers and renders them as highlighted spans
const HighlightedText = ({ text }) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            className="font-semibold text-purple-300 bg-purple-500/10 px-1 py-0.5 rounded"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="pt-32 pb-16 px-4 relative overflow-hidden">
      <TechBackground variant="about" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ exp }) => (
  <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-400/50 transition-all duration-300">
    {/* Hover gradient overlay */}
    <div
      className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
    />

    <div className="relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div
            className={`w-14 h-14 bg-gradient-to-br ${exp.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
          >
            <Briefcase className="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <p className="text-purple-400 font-semibold text-lg">{exp.company}</p>
            <span className="inline-block mt-1.5 text-xs font-medium px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full border border-purple-400/20">
              {exp.type}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-row md:flex-col gap-3 md:items-end text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span>{exp.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-purple-400 flex-shrink-0" />
            <span>{exp.location}</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-purple-500/30 via-pink-500/20 to-transparent mb-6" />

      {/* Highlights — styled bullet list */}
      <ul className="space-y-4 mb-7">
        {exp.highlights.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            {/* Custom bullet */}
            <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              <HighlightedText text={point} />
            </p>
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 text-gray-300 text-xs font-medium rounded-xl hover:border-purple-400/40 hover:text-white transition-all duration-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Experience;
