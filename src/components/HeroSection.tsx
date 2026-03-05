import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-violet/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/20 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8"
        >
          Building <span className="text-gradient">Intelligent AI</span> Systems for Modern Businesses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-silver-white/60 mb-12 leading-relaxed"
        >
          Vishverse designs and deploys AI agents, automation systems, and intelligent workflows that help companies operate smarter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-neon-violet to-accent-blue font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book AI Consultation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          <a
            href="#projects"
            className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md font-bold text-lg hover:bg-white/10 transition-all"
          >
            View Projects
          </a>
        </motion.div>

        {/* Stats / Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
        >
          {[
            { label: 'AI Solutions', value: '50+' },
            { label: 'Efficiency Gain', value: '40%' },
            { label: 'Client Satisfaction', value: '100%' },
            { label: 'Team Expertise', value: 'Expert' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-display font-bold text-silver-white mb-1">{stat.value}</div>
              <div className="text-xs font-mono uppercase text-white/40 tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
