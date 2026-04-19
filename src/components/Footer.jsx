import { ExternalLink, Link2, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-950 border-t border-gray-800/60 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-gray-500 text-sm flex items-center gap-1.5">
         © 2026 Muhammad Areeb. All Rights Reserved.
        </p>
      
      </div>
    </footer>
  );
}
