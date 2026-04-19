import { Mail, Phone, MapPin, ExternalLink, Link2, ChevronDown } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import profileImg from "../assets/My Image.jpeg";

export default function Hero() {
  const scrollDown = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950"
    >
      {/* Background glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Text column */}
          <div className="w-full md:w-2/3 text-center md:text-left">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for Work
        </span>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
          {personalInfo.title}
        </h2>

        {/* Summary */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Contact chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-gray-400">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700 hover:border-purple-500/50 hover:text-purple-400 transition-colors"
          >
            <Mail size={14} />
            {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700 hover:border-purple-500/50 hover:text-purple-400 transition-colors"
          >
            <Phone size={14} />
            {personalInfo.phone}
          </a>
          {/* <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/60 border border-gray-700">
            <MapPin size={14} />
            {personalInfo.location}
          </span> */}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-7 py-3 rounded-xl border border-gray-700 text-gray-300 font-semibold hover:border-purple-500/50 hover:text-white transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>

        </div>

          {/* Image column */}
         
            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-full p-1 bg-transparent ring-2 ring-white/5 shadow-2xl overflow-hidden md:-translate-y-8">
                <div className="w-full h-full rounded-full overflow-hidden bg-transparent flex items-center justify-center">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </div>
            </div>
        </div>
      </div>

      {/* Scroll down arrow */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-purple-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
