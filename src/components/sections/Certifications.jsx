import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "../../utils/constants";
import TechBackground from "../common/TechBackground.jsx";

const Certifications = () => {
  return (
    <section id="certifications" className="pt-32 pb-16 px-4 relative overflow-hidden">
      <TechBackground variant="achievements" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {certifications.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationCard = ({ cert }) => (
  <div className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-8 hover:border-purple-400/50 transition-all duration-300">
    <div
      className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
    />

    <div className="relative">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 bg-gradient-to-br ${cert.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
        >
          <Award className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{cert.title}</h3>
          <p className="text-orange-400 font-medium">{cert.issuer}</p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-orange-500/30 via-red-500/20 to-transparent mb-6" />

      {/* Course grid — each is a clickable verify link */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {cert.courses.map((course, i) => (
          <a
            key={i}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/card flex items-start gap-2.5 p-3.5 bg-gradient-to-r from-purple-500/5 to-pink-500/5 border border-purple-400/15 rounded-xl hover:border-orange-400/50 hover:from-orange-500/10 hover:to-red-500/10 transition-all duration-200 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5 group-hover/card:text-orange-300 transition-colors" />
            <span className="text-gray-300 text-sm leading-snug group-hover/card:text-white transition-colors flex-1">
              {course.name}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-gray-600 flex-shrink-0 mt-0.5 group-hover/card:text-orange-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Certifications;
