import { achievements } from '../../utils/constants';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
    <div className="relative">
      <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
        {achievement.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-2">
        {achievement.title}
      </h3>
      <p className="text-gray-300">{achievement.description}</p>
    </div>
  </div>
);

export default Achievements;
