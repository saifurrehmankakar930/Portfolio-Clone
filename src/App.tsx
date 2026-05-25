import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-darker selection:bg-cyan-accent selection:text-brand-darker overflow-x-hidden">
      {/* Decorative Cyan Lights in background */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-cyan-accent/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Main Sections */}
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}
