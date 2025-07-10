import { Phone, Mail, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I have completed my B.Tech in Computer Science and Engineering from Rajasthan Technical University with a CGPA of 9.15. I am strong in Data Structures and Algorithms using Java, having solved over 700 coding problems across various platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm skilled in full-stack development using React, JavaScript, and Node.js, and have hands-on experience in mobile development with Flutter. I enjoy building user-friendly applications that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">+91 8949885630</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">
                  bharatsirvi855@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">
                  Rajasthan, India
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <EducationItem
                  title="B.Tech Computer Science Engineering"
                  institution="Rajasthan Technical University, Kota"
                  year="2021 - 2025"
                  score="CGPA: 9.15"
                  borderColor="purple"
                />
                <EducationItem
                  title="Senior Secondary (12th)"
                  institution="Shri Bangur Govt. Senior Secondary School"
                  year="2019"
                  score="78.40%"
                  borderColor="blue"
                />
                <EducationItem
                  title="Secondary (10th)"
                  institution="Govt. Senior Secondary School"
                  year="2017"
                  score="86.83%"
                  borderColor="green"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationItem = ({ title, institution, year, score, borderColor }) => (
  <div className={`border-l-4 border-${borderColor}-400 pl-4`}>
    <h4 className={`font-semibold text-${borderColor}-400`}>
      {title}
    </h4>
    <p className="text-gray-300">
      {institution}
    </p>
    <p className="text-sm text-gray-400">
      {year} | {score}
    </p>
  </div>
);

export default About;
