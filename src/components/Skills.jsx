import { skills } from "../data/portfolioData";

const categoryIcons = {
  "Languages": "🌐",
  "Frameworks & Libraries": "⚛️",
  "CSS Frameworks": "🎨",
  "Databases": "🗄️",
  "Tools & Technologies": "🛠️",
  "Project Management": "📋",
};

const categoryColors = [
  "border-indigo-500/30 bg-indigo-500/5",
  "border-purple-500/30 bg-purple-500/5",
  "border-pink-500/30 bg-pink-500/5",
  "border-blue-500/30 bg-blue-500/5",
  "border-teal-500/30 bg-teal-500/5",
  "border-orange-500/30 bg-orange-500/5",
];

const tagColors = [
  "bg-indigo-500/10 border border-indigo-500/20 text-indigo-300",
  "bg-purple-500/10 border border-purple-500/20 text-purple-300",
  "bg-pink-500/10 border border-pink-500/20 text-pink-300",
  "bg-blue-500/10 border border-blue-500/20 text-blue-300",
  "bg-teal-500/10 border border-teal-500/20 text-teal-300",
  "bg-orange-500/10 border border-orange-500/20 text-orange-300",
];

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-purple-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full mx-auto" />
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(([category, items], idx) => (
            <div
              key={category}
              className={`rounded-2xl border p-6 transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 ${categoryColors[idx % categoryColors.length]}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{categoryIcons[category] || "💡"}</span>
                <h3 className="text-white font-bold text-base">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[idx % tagColors.length]}`}
                  >
                    {skill}
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
