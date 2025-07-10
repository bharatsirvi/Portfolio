import {
  Code,
  Database,
  Globe,
  Cpu,
  Zap,
  BookOpen,
  Heart,
} from "lucide-react";
import { skills } from "../../utils/constants";
import TechBackground from "../common/TechBackground.jsx";

const Skills = () => {
  return (
    <section id="skills" className="pt-32 pb-16 px-4 relative overflow-hidden">
      <TechBackground variant="skills" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} category={category} skills={skillList} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ category, skills }) => {
  const getIcon = () => {
    switch (category) {
      case "frontend":
        return <Globe className="w-6 h-6 text-purple-400" />;
      case "backend":
        return <Database className="w-6 h-6 text-blue-400" />;
      case "languages":
        return <Code className="w-6 h-6 text-green-400" />;
      case "tools":
        return <Cpu className="w-6 h-6 text-yellow-400" />;
      case "libraries":
        return <Zap className="w-6 h-6 text-pink-400" />;
      case "coursework":
        return <BookOpen className="w-6 h-6 text-orange-400" />;
      case "hobbies":
        return <Heart className="w-6 h-6 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-purple-400/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-purple-600/20 rounded-lg">{getIcon()}</div>
        <h3 className="text-xl font-bold text-white capitalize">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="group relative px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-400/20 text-gray-300 text-sm font-medium rounded-xl hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 cursor-default"
          >
            <div className="flex items-center space-x-2 relative z-10">
              <span>{skill}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 rounded-xl transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
