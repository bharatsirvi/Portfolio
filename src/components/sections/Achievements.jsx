import { ExternalLink } from "lucide-react";
import { achievements } from "../../utils/constants";
import TechBackground from "../common/TechBackground.jsx";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="pt-32 pb-16 px-4 relative overflow-hidden"
    >
      <TechBackground variant="achievements" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ achievement }) => (
  <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
    ></div>
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center text-white`}
        >
          {achievement.icon}
        </div>
        {achievement.link && (
          <a
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link relative px-3 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/30 text-purple-300 hover:text-white hover:border-purple-400/60 hover:from-purple-600/30 hover:to-pink-600/30 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-sm font-medium backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
            title="View LeetCode Profile"
          >
            <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
            <span>LeetCode</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </a>
        )}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
      <p className="text-gray-300">{achievement.description}</p>
    </div>
  </div>
);

export default Achievements;
