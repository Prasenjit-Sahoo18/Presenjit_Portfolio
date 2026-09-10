import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import GitHubSection from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-deep text-slate-200 antialiased">
      {/* Animated background particles */}
      <ParticleCanvas />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Education />
        <GitHubSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
