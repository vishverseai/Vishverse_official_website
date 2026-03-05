import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { AboutSection } from './components/AboutSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative min-h-screen bg-cosmic-blue selection:bg-neon-violet/30 selection:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatedBackground />
        <Navbar />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <ProjectsSection />
          <ProcessTimeline />
          <AboutSection />
          <FAQSection />
          <ContactSection />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}
