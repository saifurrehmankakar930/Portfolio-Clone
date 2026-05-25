import { useState, useEffect } from "react";
import { Menu, X, Award } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple active link detection based on scrolling
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-darker/95 shadow-md py-4 backdrop-blur-md" : "bg-brand-darker/80 py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center gap-2 cursor-pointer group"
          id="nav-logo-container"
        >
          <svg className="w-9 h-9 shrink-0 transform group-hover:scale-105 transition-transform duration-300" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Top red half-loop of S */}
            <path d="M85 30 C85 15 70 10 50 10 H20 L15 35 H50 C58 35 62 38 60 46 C58 54 50 58 40 58 H15 L10 82 H45 C75 82 88 68 92 50 C94 42 92 35 85 30 Z" fill="#ef4444" />
            {/* Bottom white half-loop of S overlapping */}
            <path d="M35 90 C35 105 50 110 70 110 H100 L105 85 H70 C62 85 58 82 60 74 C62 66 70 62 80 62 H105 L110 38 H75 C45 38 32 52 28 70 C26 78 28 85 35 90 Z" fill="#ffffff" />
          </svg>
          <span className="font-orbitron font-extrabold text-white text-xl tracking-wider uppercase group-hover:text-cyan-accent transition-colors duration-300">
            SAIF
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8" id="desktop-nav-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-orbitron font-medium text-sm tracking-wide transition-colors duration-300 relative py-2 ${
                activeSection === link.id
                  ? "text-cyan-accent"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-accent rounded-full shadow-[0_0_8px_#00d4ff]" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden flex items-center" id="mobile-nav-toggle-parent">
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-cyan-accent focus:outline-none transition-colors duration-300 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        id="mobile-drawer"
        className={`md:hidden absolute top-full left-0 right-0 bg-brand-darker border-t border-brand-dark/50 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`font-orbitron font-semibold text-left tracking-wider py-2 transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-cyan-accent border-l-2 border-cyan-accent pl-3"
                  : "text-gray-400 hover:text-white pl-3"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
