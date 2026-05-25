import React from "react";

interface SkillItem {
  id: string;
  name: string;
  percent: number;
  badgeBg: string;
  badgeTextColor: string;
  badgeChar: string;
  barColor: string;
  exp: string;
}

export default function Skills() {
  const skillsData: SkillItem[] = [
    {
      id: "html",
      name: "HTML",
      percent: 95,
      badgeBg: "bg-[#fff0eb]",
      badgeTextColor: "text-[#e24c25]",
      badgeChar: "H",
      barColor: "bg-[#e24c25]",
      exp: "~3 years",
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      percent: 90,
      badgeBg: "bg-[#e0f7fa]",
      badgeTextColor: "text-[#00838f]",
      badgeChar: "T",
      barColor: "bg-[#38bdf8]",
      exp: "~2.5 years",
    },
    {
      id: "javascript",
      name: "JavaScript",
      percent: 85,
      badgeBg: "bg-[#fffde7]",
      badgeTextColor: "text-[#c29800]",
      badgeChar: "JS",
      barColor: "bg-[#eab308]",
      exp: "~2.5 years",
    },
    {
      id: "react",
      name: "React",
      percent: 88,
      badgeBg: "bg-[#e0f2f1]",
      badgeTextColor: "text-[#00796b]",
      badgeChar: "R",
      barColor: "bg-[#22d3ee]",
      exp: "~2 years",
    },
    {
      id: "typescript",
      name: "TypeScript",
      percent: 80,
      badgeBg: "bg-[#e8eaf6]",
      badgeTextColor: "text-[#1a237e]",
      badgeChar: "TS",
      barColor: "bg-[#3178c6]",
      exp: "~1.5 years",
    },
    {
      id: "nextjs",
      name: "Next.js",
      percent: 85,
      badgeBg: "bg-[#f1f5f9]",
      badgeTextColor: "text-[#0f172a]",
      badgeChar: "N",
      barColor: "bg-[#334155]",
      exp: "~1.5 years",
    },
  ];

  return (
    <section id="skills" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading matching the screenshot structure */}
        <div className="mb-14 text-left">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl tracking-tight mb-2">
            Technical skills
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base font-medium">
            3+ years of hands-on experience
          </p>
        </div>

        {/* List layout matching precisely the screenshot layout */}
        <div className="space-y-8" id="skills-stack-parent">
          {skillsData.map((skill) => (
            <div key={skill.id} className="group flex flex-col" id={`skill-row-${skill.id}`}>
              {/* Row Header element */}
              <div className="flex items-center justify-between mb-2">
                {/* Square rounded emblem + label name */}
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-sans font-bold text-base shadow-sm ${skill.badgeBg} ${skill.badgeTextColor} shrink-0`}>
                    {skill.badgeChar}
                  </div>
                  <span className="font-sans font-bold text-white text-base md:text-lg tracking-wide">
                    {skill.name}
                  </span>
                </div>

                {/* Percentage value */}
                <span className="font-sans text-sm md:text-base font-bold text-gray-300">
                  {skill.percent}%
                </span>
              </div>

              {/* Precise progress track matching screenshot */}
              <div className="w-full h-2.5 bg-brand-darker rounded-full overflow-hidden p-[1px] border border-gray-800/60">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ease-out ${skill.barColor}`}
                  style={{ width: `${skill.percent}%` }}
                />
              </div>

              {/* Sub-label Experience years directly underneath the bar starting from text start */}
              <div className="mt-1.5 pl-14 text-left">
                <span className="text-gray-400 font-sans text-xs">
                  {skill.exp}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
