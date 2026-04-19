import { ExternalLink, Link2, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1.5">
          Built with <Heart size={13} className="text-pink-500" fill="currentColor" /> by{" "}
          <span className="text-white font-semibold">{personalInfo.name}</span> &copy; {year}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Link2 size={18} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
