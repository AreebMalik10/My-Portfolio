import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp, MapPin, Calendar } from "lucide-react";
import { experiences } from "../data/portfolioData";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="bg-gray-800/40 border border-gray-700/50 rounded-xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-700/30 transition-colors"
      >
        <div>
          <span className="text-white font-medium text-sm">{project.name}</span>
          <span className="ml-3 text-xs text-purple-400 font-medium bg-purple-500/10 border border-purple-500/20 rounded-full px-2 py-0.5">
            {project.role}
          </span>
        </div>
        {expanded ? (
          <ChevronUp size={16} className="text-gray-500 shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-gray-500 shrink-0" />
        )}
      </button>
      {expanded && (
        <ul className="px-5 pb-4 space-y-2 border-t border-gray-700/40">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed pt-3">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperienceCard({ exp, index }) {
  const [showProjects, setShowProjects] = useState(false);
  const colors = [
    "from-indigo-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-orange-400",
  ];
  const badgeColors = [
    "bg-indigo-500/10 border-indigo-500/30 text-indigo-400",
    "bg-purple-500/10 border-purple-500/30 text-purple-400",
    "bg-pink-500/10 border-pink-500/30 text-pink-400",
  ];

  return (
    <div className="relative flex gap-6">
      {/* Timeline dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[index % 3]} flex items-center justify-center shrink-0 shadow-lg`}
        >
          <Briefcase size={20} className="text-white" />
        </div>
        {index < experiences.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gray-600 to-transparent mt-3" />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-1">
              <span className="text-purple-400 font-semibold">{exp.company}</span>
              <span
                className={`text-xs font-medium border rounded-full px-2 py-0.5 ${badgeColors[index % 3]}`}
              >
                {exp.type}
              </span>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <div className="flex items-center gap-1.5 justify-end">
              <Calendar size={13} />
              {exp.period}
            </div>
            <div className="flex items-center gap-1.5 justify-end mt-1">
              <MapPin size={13} />
              {exp.location}
            </div>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>

        {exp.projects.length > 0 && (
          <div>
            <button
              onClick={() => setShowProjects(!showProjects)}
              className="flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors mb-3"
            >
              {showProjects ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
              {showProjects ? "Hide" : "Show"} Projects ({exp.projects.length})
            </button>
            {showProjects && (
              <div className="space-y-3">
                {exp.projects.map((p, i) => (
                  <ProjectCard key={i} project={p} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Career
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
