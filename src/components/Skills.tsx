import React from "react";

interface SkillItem {
  name: string;
  percent: number;
  logo: React.ReactNode;
}

export default function Skills() {
  const brandSkills: SkillItem[] = [
    {
      name: "HTML - 5",
      percent: 90,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#e34f26" />
          <path d="M6 5h12l-1.1 11.23L12 19l-4.9-2.77L6 5z" fill="#f06529" />
          <path d="M12 7v4.52h3.35l-.32 3.25L12 16.51v-4.99H8.72l-.17-1.74H12V7H8.38l-.16-1.74H12z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "CSS - 3",
      percent: 80,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#1572b6" />
          <path d="M6 5h12l-1.1 11.23L12 19l-4.9-2.77L6 5z" fill="#29abe2" />
          <path d="M12 7v4.52h3.35l-.32 3.25L12 16.51v-4.99H8.72l-.17-1.74H12V7H8.38l-.16-1.74H12z" fill="#ffffff" />
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      percent: 80,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#0f172a" />
          <path d="M12 8.5c-1.35 0-2.2.67-2.55 2 .5-.67 1.1-.9 1.8-.7.4.1.72.4.98.71C12.65 11 13.13 11.5 14 11.5c1.35 0 2.2-.67 2.55-2-.5.67-1.1.9-1.8.7-.4-.1-.72-.4-.98-.71-.43-.46-.91-.96-1.77-.96zm-4 4c-1.35 0-2.2.67-2.55 2 .5-.67 1.1-.9 1.8-.7.4.1.72.4.98.71.42.45.91.96 1.77.96 1.35 0 2.2-.67 2.55-2-.5.67-1.1.9-1.8.7-.4-.1-.72-.4-.98-.71-.43-.46-.91-.96-1.77-.96z" fill="#38bdf8" />
        </svg>
      )
    },
    {
      name: "Java Script",
      percent: 60,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#f7df1e" />
          <path d="M14 11.5v3.5c0 .8-.5 1.3-1.3 1.3-.7 0-1.1-.3-1.3-.8l1-.6c.1.3.2.4.4.4.2 0 .3-.1.3-.3v-3.5h.9zm3.3 1.3c0 .8-.5 1.4-1.3 1.4-.7 0-1.2-.4-1.4-1l.9-.5c.1.3.3.5.5.5.2 0 .4-.1.4-.3 0-.2-.1-.3-.4-.4l-.4-.2c-.6-.2-.9-.5-.9-1.1 0-.6.5-1.2 1.3-1.2.6 0 1.1.3 1.3.8l-.9.5c-.1-.2-.2-.3-.4-.3-.2 0-.3.1-.3.3 0 .2.1.2.4.3l.4.2c.6.2.9.5.9 1.1z" fill="#000000" />
        </svg>
      )
    },
    {
      name: "React",
      percent: 60,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#20232a" />
          <ellipse rx="6.5" ry="2.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="0.8" fill="none" transform="rotate(0, 12, 12)" />
          <ellipse rx="6.5" ry="2.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="0.8" fill="none" transform="rotate(60, 12, 12)" />
          <ellipse rx="6.5" ry="2.5" cx="12" cy="12" stroke="#61dafb" strokeWidth="0.8" fill="none" transform="rotate(120, 12, 12)" />
          <circle cx="12" cy="12" r="0.9" fill="#61dafb" />
        </svg>
      )
    },
    {
      name: "Figma",
      percent: 90,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#1e1e1e" />
          <path d="M9 7.5a1.5 1.5 0 011.5-1.5H12v3H10.5A1.5 1.5 0 019 7.5z" fill="#f24e1e" />
          <path d="M12 6h1.5a1.5 1.5 0 010 3H12V6z" fill="#ff7262" />
          <path d="M9 10.5a1.5 1.5 0 011.5-1.5H12v3H10.5A1.5 1.5 0 019 10.5z" fill="#a259ff" />
          <path d="M12 9h1.5A1.5 1.5 0 0115 10.5v0a1.5 1.5 0 01-1.5 1.5H12V9z" fill="#1abc9c" />
          <path d="M9 13.5a1.5 1.5 0 011.5-1.5H12v1.5a1.5 1.5 0 01-1.5 1.5H10.5A1.5 1.5 0 019 13.5z" fill="#19bc9b" />
          <circle cx="13.5" cy="13.5" r="1.5" fill="#1abc9c" />
        </svg>
      )
    },
    {
      name: "Adobe Photoshop",
      percent: 65,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#001e36" />
          <rect x="5.5" y="5.5" width="13" height="13" rx="1" stroke="#00c8ff" strokeWidth="1" fill="#001c32" />
          <text x="7" y="14.5" fill="#00c8ff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">P</text>
          <text x="12" y="14.5" fill="#00c8ff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">s</text>
        </svg>
      )
    },
    {
      name: "Adobe Illustrator",
      percent: 70,
      logo: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="12" fill="#261300" />
          <rect x="5.5" y="5.5" width="13" height="13" rx="1" stroke="#ff9a00" strokeWidth="1" fill="#221000" />
          <text x="7.5" y="14.5" fill="#ff9a00" fontSize="8" fontWeight="bold" fontFamily="sans-serif">A</text>
          <text x="13.2" y="14.5" fill="#ff9a00" fontSize="8" fontWeight="bold" fontFamily="sans-serif">i</text>
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Ambient Accents */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-cyan-accent/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-cyan-accent/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase">
            My <span className="text-cyan-accent text-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Skills</span>
          </h2>
        </div>

        {/* 2-Column Grid Layout matching picture perfectly */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto" id="skills-grid-parent">
          {brandSkills.map((skill, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4"
              id={`skill-item-${index}`}
            >
              {/* Badge Circular Container with thick white border outline */}
              <div className="w-14 h-14 rounded-full bg-brand-darker border-[2.5px] border-white flex items-center justify-center shrink-0 shadow-lg transform hover:scale-105 transition-transform duration-300">
                {skill.logo}
              </div>

              {/* Progress & Label horizontal alignment stack next to badge */}
              <div className="flex-1 flex items-center gap-4">
                {/* Skill Title Label next to icon with a standard text box size to align */}
                <span className="font-sans font-bold text-base text-white tracking-wide w-28 sm:w-36 shrink-0 truncate">
                  {skill.name}
                </span>

                {/* Cyber Style thicker cyan progress bar */}
                <div className="flex-1 h-3.5 bg-brand-darker/60 rounded-full overflow-hidden p-[1px] border border-gray-800/40 shadow-inner">
                  <div 
                    className="h-full bg-cyan-accent rounded-full shadow-[0_0_10px_#00d4ff] transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  />
                </div>

                {/* Percentage value at the right end */}
                <span className="font-sans text-sm font-bold text-gray-400 w-10 text-right shrink-0">
                  {skill.percent}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
