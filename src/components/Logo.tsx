import React from 'react';
import { motion } from 'motion/react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizes = {
    sm: { box: 'w-8 h-8', text: 'text-lg', orbit: '-inset-2' },
    md: { box: 'w-10 h-10', text: 'text-xl', orbit: '-inset-3' },
    lg: { box: 'w-20 h-20', text: 'text-4xl', orbit: '-inset-6' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`relative ${currentSize.box} ${className}`}>
      {/* Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`absolute ${currentSize.orbit} border border-accent-blue/30 rounded-full border-t-accent-blue/60 border-l-transparent border-r-transparent border-b-transparent rotate-[30deg]`}
      />
      
      {/* Orbiting Sphere */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className={`absolute ${currentSize.orbit} rounded-full`}
      >
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* The V Logo */}
      <div className="w-full h-full rounded-xl bg-gradient-to-br from-accent-blue via-neon-violet to-purple-600 flex items-center justify-center font-display font-bold text-white shadow-lg overflow-hidden relative">
        <img 
          src="/logo.png" 
          alt="Vishverse" 
          className="w-full h-full object-contain p-1.5"
          onError={(e) => {
            // Fallback if image doesn't exist yet
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const span = target.nextElementSibling as HTMLElement;
            if (span) span.style.display = 'block';
          }}
          referrerPolicy="no-referrer"
        />
        <span className={`${currentSize.text} hidden`}>V</span>
        {/* Subtle shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>
      
      {/* Glow */}
      <div className="absolute inset-0 bg-neon-violet/20 blur-xl -z-10 rounded-full" />
    </div>
  );
};
