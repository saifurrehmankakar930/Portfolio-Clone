import { useState } from "react";
import { GraduationCap, Briefcase, BookOpen, UserCheck, Flame } from "lucide-react";
import avatarImg from "../assets/images/saif_avatar_1779735604631.png";

export default function About() {
  const [activeTab, setActiveTab] = useState<"education" | "courses" | "experience" | "details">("education");

  const skills = [
    { name: "HTML", percent: 95 },
    { name: "Tailwind CSS", percent: 90 },
    { name: "JavaScript", percent: 85 },
    { name: "React", percent: 88 },
    { name: "TypeScript", percent: 80 },
    { name: "Next.js", percent: 85 },
  ];

  const education = [
    {
      title: "Diploma In Computer Technology",
      institution: "Saylani mas it program",
      session: "2025–26",
      details: "Comprehensive full-stack development curriculum focusing on modern web technologies, UI/UX, and software architecture."
    },
    {
      title: "BS in Geography",
      institution: "Balochistan University",
      session: "2019/23",
      result: "CGPA 3.19/4.00",
      details: "Specialized in Geographic Information Systems (GIS) and remote sensing, laying a strong foundation for data analytics."
    },
    {
      title: "Secondary School Certificate (SSC)",
      institution: "Science college Quetta",
      session: "2017–18",
      result: "60% Marks",
      details: "In-depth study of mathematics, computer science, and physics."
    }
  ];

  const shortCourses = [
    {
      title: "Full Stack Web Development Professional Certificate",
      provider: "SMIT Academy",
      session: "2024 (6 Months)",
      desc: "Node.js, Express, MongoDB, React, state management, and production-ready deployments."
    },
    {
      title: "Data Analytics & Geographic Data Science",
      provider: "Balochistan GIS Training Center",
      session: "2023 (3 Months)",
      desc: "Analyzing geospatial structures, SQL databases, Python scripts, and data rendering."
    },
    {
      title: "Advanced Tailwind Utility Framework Mastery",
      provider: "Online Certification",
      session: "2023",
      desc: "Responsive web layouts, utility-first styling patterns, and dynamic UI themes."
    }
  ];

  const details = [
    { label: "Full Name", value: "Saif Ur Rehman Kakar" },
    { label: "Direct Email", value: "saifurrehmankakar930@gmail.com" },
    { label: "Phone & WhatsApp", value: "+92 300 1234567 (Available)" },
    { label: "Nationality", value: "Pakistani" },
    { label: "Primary Language", value: "English, Urdu, Pashto" },
    { label: "Core Fields", value: "React SPAs, Next.js Apps, Tailwind CSS layouts, Geospatial Data & GIS Analytics" },
    { label: "Experience Level", value: "3 Years of Active Freelancing & Contract Working" },
    { label: "Satisfaction Rate", value: "100% Client Satisfaction Guarantee" }
  ];

  return (
    <section
      id="about"
      className="py-24 bg-brand-darker relative overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" id="about-heading-container">
          <h2 className="font-orbitron font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase">
            About <span className="text-cyan-accent text-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto mt-4 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Main Grid: Left Card & Right Tab System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="about-content-grid">
          {/* Left Column: Cyan Background Card */}
          <div className="lg:col-span-4 flex" id="about-left-card-parent">
            <div className="w-full bg-cyan-accent text-brand-darker rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_4px_30px_rgba(0,212,255,0.15)] relative overflow-hidden group">
              {/* Subtle background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              {/* Profile Image with dual borders */}
              <div className="relative w-40 h-40 mb-6 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 bg-brand-darker rounded-full transform rotate-6 scale-[1.03] shadow-md group-hover:rotate-12 transition-transform duration-300" />
                <div className="relative w-full h-full rounded-full border-4 border-brand-darker bg-brand-darker overflow-hidden">
                  <img
                    src={avatarImg}
                    alt="Saif Ur Rehman Avatar"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Identity & Roles */}
              <h3 className="font-orbitron font-extrabold text-2xl mb-4 text-brand-darker tracking-wide">
                Saif Ur Rehman
              </h3>
              
              <div className="w-12 h-1 bg-brand-darker/60 mb-6 rounded-full" />

              <div className="flex flex-col gap-3 w-full" id="about-roles-list">
                <div className="bg-brand-darker/10 px-4 py-2 rounded-lg font-orbitron font-bold text-xs uppercase tracking-widest text-brand-darker flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-darker" />
                  Frontend Developer
                </div>
                <div className="bg-brand-darker/10 px-4 py-2 rounded-lg font-orbitron font-bold text-xs uppercase tracking-widest text-brand-darker flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-darker" />
                  Backend Developer
                </div>
                <div className="bg-brand-darker/10 px-4 py-2 rounded-lg font-orbitron font-bold text-xs uppercase tracking-widest text-brand-darker flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-darker" />
                  Data Analytic Expert
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tab System */}
          <div className="lg:col-span-8 flex flex-col" id="about-tab-system-parent">
            {/* Tab Links Row */}
            <div className="flex flex-wrap gap-6 md:gap-8 border-b border-gray-700/50 pb-4 mb-8" id="about-tabs-header">
              {(
                [
                  { id: "education", label: "Education Qualification" },
                  { id: "courses", label: "Short Course" },
                  { id: "experience", label: "Experience" },
                  { id: "details", label: "Details" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-sm md:text-base font-sans font-bold tracking-wide transition-all duration-300 relative pb-4 cursor-pointer ${
                    activeTab === tab.id
                      ? "text-cyan-accent"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-cyan-accent rounded-full shadow-[0_0_8px_#00d4ff]" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Main Content Container */}
            <div className="flex-1 min-h-[300px]" id="about-tabs-body">
              {/* Tab 1: Education Qualification */}
              {activeTab === "education" && (
                <div className="space-y-8 animate-fade-in" id="education-tab-pane">
                  {education.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h4 className="font-sans font-bold text-cyan-accent text-lg md:text-xl mb-2">
                        {item.title}
                      </h4>
                      <div className="space-y-1 text-gray-300 text-sm sm:text-base font-sans font-normal">
                        <p>
                          <span className="text-gray-400 font-medium">Institute :</span> {item.institution}
                        </p>
                        <p>
                          <span className="text-gray-400 font-medium">Session :</span> {item.session}
                        </p>
                        {item.result && (
                          <p>
                            <span className="text-gray-400 font-medium mr-1 font-sans">Result :</span> {item.result}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 2: Short Courses */}
              {activeTab === "courses" && (
                <div className="space-y-8 animate-fade-in" id="courses-tab-pane">
                  {shortCourses.map((item, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h4 className="font-sans font-bold text-cyan-accent text-lg md:text-xl mb-2">
                        {item.title}
                      </h4>
                      <div className="space-y-1 text-gray-300 text-sm sm:text-base font-sans font-normal">
                        <p>
                          <span className="text-gray-400 font-medium">Institute :</span> {item.provider}
                        </p>
                        <p>
                          <span className="text-gray-400 font-medium">Session :</span> {item.session}
                        </p>
                        <p>
                          <span className="text-gray-400 font-medium">Description :</span> {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab 3: Experience (Skill Progress Bars) */}
              {activeTab === "experience" && (
                <div className="space-y-6 animate-fade-in" id="experience-tab-pane">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {skills.map((skill, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-sans font-medium text-xs sm:text-sm text-gray-300 tracking-wider">
                            {skill.name}
                          </span>
                          <span className="font-mono text-xs sm:text-sm text-cyan-accent font-bold">
                            {skill.percent}%
                          </span>
                        </div>
                        {/* Progress Bar Track */}
                        <div className="w-full h-2.5 bg-brand-dark rounded-full overflow-hidden border border-brand-dark">
                          {/* Animated Progress Filled Area */}
                          <div 
                            className="bg-cyan-accent h-full rounded-full shadow-[0_0_8px_#00d4ff] transition-all duration-1000 ease-out"
                            style={{ width: `${skill.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Details */}
              {activeTab === "details" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in" id="details-tab-pane">
                  {details.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1a1f2e] p-5 rounded-xl border border-gray-700/30 flex flex-col justify-center"
                    >
                      <span className="text-xs text-cyan-accent font-sans uppercase tracking-wider mb-1 font-bold">
                        {item.label}
                      </span>
                      <span className="text-sm sm:text-base text-white font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
