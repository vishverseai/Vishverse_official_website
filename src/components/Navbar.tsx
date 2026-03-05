import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-cosmic-blue/80 backdrop-blur-lg border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group">
          <Logo size="md" className="group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-display font-bold tracking-tight">
            Vish<span className="text-neon-violet">verse</span>
          </span>
        </a>

        {/* Desktop Menu - Increased gap for more space between brand and home */}
        <div className="hidden md:flex items-center gap-12 ml-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-silver-white/70 hover:text-silver-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-violet transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-white text-cosmic-blue text-sm font-bold hover:bg-neon-violet hover:text-white transition-all ml-4"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-silver-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-cosmic-blue/95 backdrop-blur-xl border-b border-white/10 py-8 px-6 md:hidden flex flex-col gap-6"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xl font-display font-medium text-silver-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-violet to-accent-blue text-center font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book AI Consultation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
