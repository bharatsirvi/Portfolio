import { Code, Database, Globe, Cpu, Zap } from 'lucide-react';
import { skills } from '../../utils/constants';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard
              key={category}
              category={category}
              skills={skillList}
            />
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
      default:
        return null;
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-purple-400/50 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-purple-600/20 rounded-lg">
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold text-white capitalize">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-purple-600/20 text-purple-400 text-sm rounded-full hover:bg-purple-600/30 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
