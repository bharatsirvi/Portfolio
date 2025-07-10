import { Phone, Mail, MapPin, Calendar, GraduationCap } from "lucide-react";
import TechBackground from "../common/TechBackground.jsx";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-4 relative overflow-hidden">
      <TechBackground variant="about" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I have completed my B.Tech in Computer Science and Engineering
              from Rajasthan Technical University with a CGPA of 9.15. I am
              strong in Data Structures and Algorithms using Java, having solved
              over 700 coding problems across various platforms.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm skilled in full-stack development using React, JavaScript, and
              Node.js, and have hands-on experience in mobile development with
              Flutter. I enjoy building user-friendly applications that solve
              real-world problems.
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
                  Pali, Rajasthan, India
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <EducationItem
                  title="B.Tech Computer Science Engineering"
                  institution="Rajasthan Technical University"
                  location="Kota, Rajasthan"
                  year="2021 - 2025"
                  score="CGPA: 9.15"
                  borderColor="purple"
                />
                <EducationItem
                  title="Senior Secondary (12th)"
                  institution="Shri Bangur Govt. Senior Secondary School"
                  location="Pali, Rajasthan"
                  year="2019"
                  score="78.40%"
                  borderColor="blue"
                />
                <EducationItem
                  title="Secondary (10th)"
                  institution="Govt. Senior Secondary School"
                  location="Gundoj, Pali, Rajasthan"
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

const EducationItem = ({
  title,
  institution,
  location,
  year,
  score,
  borderColor,
}) => {
  const getBorderClass = () => {
    switch (borderColor) {
      case "purple":
        return "border-purple-400";
      case "blue":
        return "border-blue-400";
      case "green":
        return "border-green-400";
      default:
        return "border-purple-400";
    }
  };

  const getTextClass = () => {
    switch (borderColor) {
      case "purple":
        return "text-purple-400";
      case "blue":
        return "text-blue-400";
      case "green":
        return "text-green-400";
      default:
        return "text-purple-400";
    }
  };

  const getGradientClass = () => {
    switch (borderColor) {
      case "purple":
        return "from-purple-500 to-purple-600";
      case "blue":
        return "from-blue-500 to-blue-600";
      case "green":
        return "from-green-500 to-green-600";
      default:
        return "from-purple-500 to-purple-600";
    }
  };

  const getScorePercentage = () => {
    if (score.includes("CGPA")) {
      // Convert CGPA to percentage (9.15 CGPA = 91.5%)
      const cgpa = parseFloat(score.replace("CGPA: ", ""));
      return cgpa * 10; // Remove Math.round() to show exact percentage
    } else {
      // Extract percentage
      return parseFloat(score.replace("%", ""));
    }
  };

  const percentage = getScorePercentage();

  return (
    <div className={`border-l-4 ${getBorderClass()} pl-4 pb-4 relative`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h1 className={`font-semibold ${getTextClass()} mb-1 text-lg`}>
            {title}
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap
              className={`${getTextClass()} flex-shrink-0`}
              size={14}
            />
            <p className="text-gray-300 text-md font-medium">{institution}</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className={`${getTextClass()} flex-shrink-0`} size={14} />
            <p className="text-sm text-gray-400">{location}</p>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className={`${getTextClass()} flex-shrink-0`} size={14} />
            <p className="text-sm text-gray-400">{year}</p>
          </div>
        </div>

        {/* Attractive Score Display */}
        <div className="flex flex-col items-center ml-4">
          {/* Circular Progress */}
          <div className="relative w-16 h-16">
            <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
              {/* Background circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-gray-700"
              />
              {/* Progress circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${(percentage / 100) * 175.929} 175.929`}
                className={getTextClass()}
                strokeLinecap="round"
              />
            </svg>
            {/* Percentage text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-xs font-bold ${getTextClass()}`}>
                {percentage}%
              </span>
            </div>
          </div>

          {/* Score Badge */}
          <div
            className={`mt-2 px-2 py-1 bg-gradient-to-r ${getGradientClass()} rounded-full`}
          >
            <span className="text-xs font-medium text-white">{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
