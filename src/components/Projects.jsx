import { ExternalLink, Smartphone, Globe, Shield, Building2, Cpu } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "CDA Web Applications Suite",
    type: "Web Application",
    icon: <Building2 size={22} className="text-indigo-400" />,
    color: "border-indigo-500/30 bg-indigo-500/5",
    tagColor: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    description:
      "A suite of large-scale civic systems for the Capital Development Authority — Balloting System, One Window Operation, Complaint Management, and Billing System — providing essential services to citizens of Islamabad.",
    techStack: ["React.js", "Redux", "Tailwind CSS", "PHP Laravel", "WebSockets", "RESTful APIs"],
    highlights: [
      "Developed multiple responsive modules with consistent UX across the suite",
      "Real-time data sync via WebSockets",
      "Full-stack contribution including PHP Laravel backend",
    ],
  },
  {
    id: 2,
    name: "My Islamabad App",
    type: "Mobile Application",
    icon: <Smartphone size={22} className="text-purple-400" />,
    color: "border-purple-500/30 bg-purple-500/5",
    tagColor: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    description:
      "A React Native mobile app providing citizens of Islamabad with access to multiple civic services. Part of the CDA's digital transformation initiative.",
    techStack: ["React Native", "RESTful APIs", "Redux"],
    highlights: [
      "Built and customized multiple screens with native-like UX",
      "Seamless API integration for real-time data",
      "Bug fixes and performance optimizations",
    ],
  },
  {
    id: 3,
    name: "SentriAuth App",
    type: "Mobile Application",
    icon: <Shield size={22} className="text-pink-400" />,
    color: "border-pink-500/30 bg-pink-500/5",
    tagColor: "bg-pink-500/10 border-pink-500/20 text-pink-300",
    description:
      "A secure authentication mobile application built with React Native and Redux, featuring OTP generation with SHA-1 algorithm and device discovery with admin approval workflow.",
    techStack: ["React Native", "Redux", "SHA-1 OTP", "RESTful APIs", "Figma"],
    highlights: [
      "SHA-1 based OTP generation for secure authentication",
      "Device discovery with admin approval workflow",
      "Pixel-perfect Figma-to-code UI implementation",
    ],
  },
  {
    id: 4,
    name: "NADRA MFA Web App",
    type: "Web Application",
    icon: <Shield size={22} className="text-blue-400" />,
    color: "border-blue-500/30 bg-blue-500/5",
    tagColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    description:
      "A modern, responsive Multi-Factor Authentication web application for NADRA, built with React.js and Material-UI with clean, fully functional UI from Figma designs.",
    techStack: ["React.js", "Material-UI", "Redux", "RESTful APIs"],
    highlights: [
      "Modern responsive MFA interface",
      "Redux state management for smooth data flow",
      "Multiple API integrations",
    ],
  },
  {
    id: 5,
    name: "WA Construct",
    type: "Full Stack",
    icon: <Cpu size={22} className="text-teal-400" />,
    color: "border-teal-500/30 bg-teal-500/5",
    tagColor: "bg-teal-500/10 border-teal-500/20 text-teal-300",
    description:
      "A full-stack construction management application with AI-powered vector-based semantic search using Weaviate, built with React, Material-UI on the frontend and Python FastAPI on the backend.",
    techStack: ["React.js", "Material-UI", "Redux", "Python", "FastAPI", "Weaviate"],
    highlights: [
      "Vector-based semantic search with Weaviate",
      "FastAPI backend with data vectorization and ingestion",
      "Advanced semantic search queries for contextual data retrieval",
    ],
  },
  {
    id: 6,
    name: "Learning Management System",
    type: "Full Stack",
    icon: <Globe size={22} className="text-orange-400" />,
    color: "border-orange-500/30 bg-orange-500/5",
    tagColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    description:
      "A comprehensive LMS with interactive React frontend and FastAPI backend, featuring custom Moodle plugins built with PHP Laravel to extend LMS functionality.",
    techStack: ["React.js", "Redux", "Material-UI", "FastAPI", "PHP Laravel", "Moodle"],
    highlights: [
      "Custom Moodle plugins using PHP Laravel",
      "FastAPI microservices for LMS backend",
      "Rich interactive React components",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Key Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A selection of impactful projects delivered across web, mobile, and full-stack domains.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border p-6 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30 ${project.color}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gray-800/60 border border-gray-700 flex items-center justify-center">
                  {project.icon}
                </div>
                <span
                  className={`text-xs font-medium border rounded-full px-3 py-1 ${project.tagColor}`}
                >
                  {project.type}
                </span>
              </div>

              {/* Name & Description */}
              <h3 className="text-white font-bold text-lg mb-1 leading-snug">{project.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex gap-2.5 text-xs text-gray-400">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-700/50">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-800/60 border border-gray-700 text-gray-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
