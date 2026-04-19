import { Mail, Phone, MapPin, ExternalLink, Link2, Send } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Let's Talk
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-6" />
          <p className="text-gray-400 max-w-lg mx-auto">
            Whether you have a project in mind, a job opportunity, or just want to say hello — my inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-white font-bold text-xl mb-6">Contact Details</h3>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-indigo-500/50 hover:bg-gray-800/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
                <Mail size={18} className="text-indigo-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Email</p>
                <p className="text-white font-medium">{personalInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-purple-500/50 hover:bg-gray-800/40 transition-all group"
            >
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <Phone size={18} className="text-purple-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Phone</p>
                <p className="text-white font-medium">{personalInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-900/60 border border-gray-800">
              <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center">
                <MapPin size={18} className="text-pink-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Location</p>
                <p className="text-white font-medium">{personalInfo.location}</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-colors font-medium text-sm"
              >
                <Link2 size={16} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} />
                GitHub
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-7">
            <h3 className="text-white font-bold text-xl mb-6">Send a Message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = `mailto:${personalInfo.email}`;
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-gray-400 font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 font-medium mb-1.5">Your Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 font-medium mb-1.5">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
