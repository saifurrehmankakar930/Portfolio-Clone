import { Facebook, Linkedin, Mail, Github } from "lucide-react";
import avatarImg from "../assets/images/saif_avatar_1779735604631.png";

export default function Hero() {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:saifurrehmankakar930@gmail.com", label: "Email" },
    { icon: <Github className="w-5 h-5" />, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-darker via-brand-darker to-brand-dark"
    >
      {/* Mountain Silhouette Background (Layered Vector Peaks) */}
      <div className="absolute inset-x-0 bottom-0 z-0 h-64 opacity-25 pointer-events-none select-none">
        <svg
          className="w-full h-full absolute bottom-0"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back Mountain Range */}
          <path
            d="M0,224 L120,180 L240,240 L360,160 L480,260 L600,200 L720,280 L840,160 L960,240 L1080,140 L1200,220 L1320,180 L1440,240 L1440,320 L0,320 Z"
            fill="url(#mountainGradBack)"
          />
          {/* Front Mountain Range */}
          <path
            d="M0,260 L180,210 L360,280 L540,190 L720,270 L900,210 L1080,290 L1260,220 L1440,275 L1440,320 L0,320 Z"
            fill="url(#mountainGradFront)"
          />
          <defs>
            <linearGradient id="mountainGradBack" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="mountainGradFront" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#0d1117" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Grid Pattern Background Overlay for Tech Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-1" id="hero-left-content">
          <h1 className="font-sans font-extrabold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-4" id="hero-fullname-heading">
            Saif Ur Rehman Kakar
          </h1>
          <h2 className="font-sans font-semibold text-white text-xl sm:text-2xl md:text-3xl mb-6">
            And I'm a <span className="text-cyan-accent">Full-stack Developer</span>
          </h2>
          <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8" id="hero-description-text">
            I'm professional web developer with strong skill in HTML, CSS, JavaScript, Tailwind, react, TypeScript an next js etc. I have working in this field almost 3 years and all projects are complited successfully with 100% client satisfaction.
          </p>

          {/* Social Icons Row */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8" id="hero-social-row">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="w-11 h-11 rounded-full border border-cyan-accent/50 text-cyan-accent hover:text-white hover:bg-cyan-accent flex items-center justify-center transition-all duration-300 shadow-[0_0_8px_rgba(0,212,255,0.1)] hover:shadow-[0_0_15px_#00d4ff]"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Buttons Row */}
          <div className="flex flex-row items-center justify-center lg:justify-start gap-4" id="hero-buttons-row">
            <button
              onClick={() => handleScrollToSection("contact")}
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-cyan-accent text-brand-darker font-sans font-extrabold tracking-wide hover:bg-transparent hover:text-cyan-accent border border-cyan-accent transition-all duration-300 cursor-pointer text-sm"
            >
              Download CV
            </button>
            <button
              onClick={() => handleScrollToSection("portfolio")}
              className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-cyan-accent text-brand-darker font-sans font-extrabold tracking-wide hover:bg-transparent hover:text-cyan-accent border border-cyan-accent transition-all duration-300 cursor-pointer text-sm"
            >
              Portfolio
            </button>
          </div>
        </div>

        {/* Right Side: Hexagon Photo */}
        <div className="lg:col-span-5 flex justify-center items-center order-2 z-10" id="hero-right-photo-parent">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Ambient Cyan Glow Ring behind Hexagon */}
            <div className="absolute inset-0 bg-cyan-accent rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-300 animate-pulse pointer-events-none" />

            {/* Glowing Hexagonal Frame */}
            <div className="absolute inset-0 bg-cyan-accent clip-hexagon p-[3px] shadow-[0_0_30px_rgba(0,212,255,0.5)] transform hover:scale-[1.02] transition-transform duration-500">
              {/* Inner Dark Mask */}
              <div className="w-full h-full bg-[#1a1f2e] clip-hexagon flex items-center justify-center overflow-hidden">
                <img
                  src={avatarImg}
                  alt="Saif Ur Rehman Kakar Profile"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
