import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Web Design Project",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: true, // Specific requirement to show active/hovered state on load
    },
    {
      id: 2,
      title: "E-Commerce Integration",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: false,
    },
    {
      id: 3,
      title: "GIS & Statistical Dashboards",
      category: "Data Analytics",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: false,
    },
    {
      id: 4,
      title: "Interactive Admin Platform",
      category: "Web Development",
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: false,
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: "Web Design",
      imageUrl: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: false,
    },
    {
      id: 6,
      title: "SaaS Analytical Platform",
      category: "Data Analytics",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
      link: "#",
      forceActive: false,
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-darker relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" id="portfolio-heading-container">
          <h2 className="font-orbitron font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase">
            My <span className="text-cyan-accent text-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto mt-4 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Portfolio 2x3 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid-container">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-2xl overflow-hidden bg-brand-dark border border-brand-dark/80 shadow-lg cursor-pointer transform hover:scale-[1.01] transition-all duration-300"
              id={`portfolio-item-${item.id}`}
            >
              {/* Portfolio Image */}
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Cyan overlay showing default/hover states */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-brand-darker/95 via-cyan-accent/80 to-cyan-accent/60 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 ${
                  item.forceActive
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
                id={`portfolio-overlay-${item.id}`}
              >
                {/* Project Title */}
                <h3 className="font-sans font-extrabold text-white text-2xl sm:text-3xl leading-snug mb-4">
                  {item.category}
                </h3>

                {/* Interactive Anchor with Link Icon */}
                <div className="w-10 h-10 border-2 border-cyan-accent rounded-lg text-cyan-accent flex items-center justify-center shadow-lg bg-brand-darker/40 hover:bg-cyan-accent hover:text-brand-darker transition-all duration-300">
                  <ExternalLink className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
