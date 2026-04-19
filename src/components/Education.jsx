import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { education } from "../data/portfolioData";

const colors = [
  { border: "border-indigo-500/30 bg-indigo-500/5", icon: "from-indigo-500 to-purple-500" },
  { border: "border-purple-500/30 bg-purple-500/5", icon: "from-purple-500 to-pink-500" },
];

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Academics
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${colors[i % 2].border}`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[i % 2].icon} flex items-center justify-center mb-5 shadow-lg`}
              >
                <GraduationCap size={22} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">{edu.degree}</h3>
              <p className="text-purple-400 font-semibold mb-3">{edu.institution}</p>
              <div className="flex flex-col gap-1.5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {edu.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
