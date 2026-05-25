import { Globe, Code, Paintbrush, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceItems = [
    {
      id: "web-design",
      title: "Web Design",
      icon: <Globe className="w-12 h-12 text-cyan-accent" />,
      description:
        "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      highlighted: false,
      buttonStyle:
        "bg-white text-black hover:bg-neutral-200 hover:border-neutral-200 shadow-md",
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: <Code className="w-12 h-12 text-cyan-accent" />,
      description:
        "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      highlighted: true,
      buttonStyle:
        "bg-cyan-accent text-brand-darker hover:bg-[#00b8dd] hover:border-[#00b8dd] shadow-[0_0_15px_rgba(0,212,255,0.4)]",
    },
    {
      id: "data-analytics",
      title: "data analytics",
      icon: <Paintbrush className="w-12 h-12 text-cyan-accent" />,
      description:
        "I am professional Web Developer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfaction",
      highlighted: false,
      buttonStyle:
        "bg-white text-black hover:bg-neutral-200 hover:border-neutral-200 shadow-md",
    },
  ];

  const handleHireMeClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" id="services-heading-container">
          <h2 className="font-orbitron font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase">
            My <span className="text-cyan-accent text-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Services</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto mt-4 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Services Cards Responsive Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch" id="services-row-grid">
          {serviceItems.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-8 flex flex-col justify-between items-center text-center transition-all duration-300 relative group overflow-hidden ${
                service.highlighted
                  ? "bg-[#1e2536] border-[2.5px] border-cyan-accent shadow-[0_4px_30px_rgba(0,212,255,0.25)] scale-[1.02] md:scale-[1.03]"
                  : "bg-[#181d2a] border border-gray-800/60 hover:border-cyan-accent/30 hover:-translate-y-1"
              }`}
              id={`service-card-${service.id}`}
            >
              {/* Subtle visual lighting accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-tr from-transparent to-cyan-accent/5 rounded-bl-full pointer-events-none group-hover:to-cyan-accent/10 transition-all duration-300" />

              <div className="flex flex-col items-center">
                {/* Custom Icon Container */}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 text-cyan-accent">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="font-sans font-bold text-2xl mb-4 text-cyan-accent transition-colors duration-300 capitalize">
                  {service.title}
                </h3>

                {/* Service Description text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={handleHireMeClick}
                className={`w-full max-w-[200px] py-2.5 px-6 rounded-full font-sans font-bold tracking-wide text-sm flex items-center justify-center gap-2 group cursor-pointer transition-all duration-300 ${service.buttonStyle}`}
              >
                Hire Me
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
