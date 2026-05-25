import React, { useState, useEffect } from "react";
import { Phone, Mail, Linkedin, MapPin, Facebook, ArrowUp, Send } from "lucide-react";

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({
        firstName: "",
        lastName: "",
        phone: "",
        subject: "",
        email: "",
        message: "",
      });
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, href: "tel:+923000000000", label: "Phone" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:saifurrehmankakar930@gmail.com", label: "Email" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <MapPin className="w-5 h-5" />, href: "#", label: "Location" },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com", label: "Facebook" },
  ];

  return (
    <section id="contact" className="pt-24 pb-8 bg-brand-dark relative overflow-hidden">
      {/* Visual lighting source */}
      <div className="absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-cyan-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16" id="contact-heading-container">
          <h2 className="font-sans font-extrabold text-white text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase">
            Contact <span className="text-cyan-accent text-shadow-[0_0_15px_rgba(0,212,255,0.4)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-accent mx-auto mt-4 rounded-full shadow-[0_0_8px_#00d4ff]" />
        </div>

        {/* Contact Content Grid (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20" id="contact-grid">
          {/* Left Side: Brand & Social Outlines */}
          <div className="lg:col-span-5 flex flex-col" id="contact-left-details">
            {/* Elegant Circular Branding Logo matching navbar */}
            <div className="flex items-center gap-2 mb-6" id="contact-footer-logo-container">
              <svg className="w-9 h-9 shrink-0" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Top red half-loop of S */}
                <path d="M85 30 C85 15 70 10 50 10 H20 L15 35 H50 C58 35 62 38 60 46 C58 54 50 58 40 58 H15 L10 82 H45 C75 82 88 68 92 50 C94 42 92 35 85 30 Z" fill="#ef4444" />
                {/* Bottom white half-loop of S overlapping */}
                <path d="M35 90 C35 105 50 110 70 110 H100 L105 85 H70 C62 85 58 82 60 74 C62 66 70 62 80 62 H105 L110 38 H75 C45 38 32 52 28 70 C26 78 28 85 35 90 Z" fill="#ffffff" />
              </svg>
              <span className="font-orbitron font-extrabold text-white text-2xl tracking-wider uppercase">
                SAIF
              </span>
            </div>

            {/* Description Text */}
            <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              I am professional Web designer. I have designed more than 50 web template for my client. You can hire me for design your personal, business or other website template. You can trust me. I complied your work with your full satisfiction.
            </p>

            {/* List of Contact Options (horizontal row of white outline circles matching Screenshot 5) */}
            <div className="flex items-center gap-4 flex-wrap" id="contact-links-stack">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.href}
                  className="w-12 h-12 rounded-full border border-gray-400 text-white hover:border-cyan-accent hover:text-cyan-accent hover:shadow-[0_0_8px_#00d4ff] flex items-center justify-center transition-all duration-300 shrink-0"
                  aria-label={info.label}
                >
                  {info.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Inputs Column (dark bg #1a202c/charcoal, no text labels above inputs) */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="bg-[#181d2a]/60 rounded-2xl p-6 sm:p-8 border border-gray-800/30 shadow-xl">
              {isSubmitted ? (
                <div className="bg-cyan-accent/15 border border-cyan-accent rounded-xl p-6 text-center animate-fade-in">
                  <span className="text-3xl mb-3 block">✉️</span>
                  <h4 className="font-sans font-extrabold text-cyan-accent text-lg mb-1">
                    Thank You!
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Your message has been sent successfully. I will get back to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="portfolio-contact-form">
                  {/* Row 1: First Name | Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formState.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="First Name"
                      className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formState.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Last Name"
                      className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm"
                    />
                  </div>

                  {/* Row 2: Phone | Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder="Phone"
                      className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm"
                    />
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Subject"
                      className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm"
                    />
                  </div>

                  {/* Row 3: Email (Full Width) */}
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email"
                    className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm"
                  />

                  {/* Row 4: Message (Full Width Textarea) */}
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="Message"
                    className="bg-[#212836] text-white rounded-lg py-3.5 px-5 w-full border-none focus:outline-none focus:ring-1 focus:ring-cyan-accent text-sm resize-none"
                  />

                  {/* Submit Button (Full Width, Charcoal Background with White Text) */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 bg-[#212836] hover:bg-cyan-accent hover:text-brand-darker text-white font-sans font-bold tracking-wide py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 text-sm"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Line Divider */}
        <div className="border-t border-gray-800/80 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright text */}
          <p className="text-gray-500 text-sm text-center sm:text-left font-sans">
            Copywrite 2024 All Rights Reserved By SAIF.
          </p>
        </div>
      </div>

      {/* Floating Scroll To Top Button (Cyan outline, Arrow icon, bottom right - squared outline border matching Screenshot 5) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-10 h-10 border-2 border-cyan-accent text-cyan-accent flex items-center justify-center cursor-pointer shadow-md bg-brand-darker transition-all duration-300 hover:bg-cyan-accent hover:text-brand-darker ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        title="Scroll back to top"
        id="scroll-to-top-button"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </section>
  );
}
