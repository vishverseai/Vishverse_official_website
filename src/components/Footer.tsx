import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/vishverseai/posts/?feedView=all" },
    { icon: Instagram, href: "https://www.instagram.com/vishverse.ai?igsh=b2U1cHg0eGJiNzls" },
    { icon: Mail, href: "mailto:vishverse123@gmail.com" }
  ];

  return (
    <footer className="py-12 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <img 
                src="/logo.png" 
                alt="Vishverse" 
                className="w-10 h-10 rounded-lg object-contain bg-gradient-to-br from-neon-violet to-accent-blue p-1"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
                referrerPolicy="no-referrer"
              />
              <div className="hidden w-10 h-10 rounded-lg bg-gradient-to-br from-neon-violet to-accent-blue items-center justify-center font-display font-bold text-lg">
                V
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                Vish<span className="text-neon-violet">verse</span>
              </span>
            </a>
            <p className="text-sm text-silver-white/40 leading-relaxed mb-6">
              Bristol-based AI engineering studio building custom intelligent systems for modern businesses.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-silver-white/40">
              <li><a href="#services" className="hover:text-neon-violet transition-colors">AI Voice & Chat Agents</a></li>
              <li><a href="#services" className="hover:text-neon-violet transition-colors">Workflow Automation</a></li>
              <li><a href="#services" className="hover:text-neon-violet transition-colors">Knowledge AI Systems</a></li>
              <li><a href="#services" className="hover:text-neon-violet transition-colors">Custom AI Tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-silver-white/40">
              <li><a href="#about" className="hover:text-neon-violet transition-colors">About Us</a></li>
              <li><a href="#projects" className="hover:text-neon-violet transition-colors">Our Projects</a></li>
              <li><a href="#process" className="hover:text-neon-violet transition-colors">Our Process</a></li>
              <li><a href="#faq" className="hover:text-neon-violet transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-neon-violet transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-silver-white/40">
              <li className="flex items-center gap-2">
                <Mail size={14} /> vishverse123@gmail.com
              </li>
              <li>Bristol, United Kingdom</li>
              <li className="pt-4">
                <button 
                  onClick={scrollToTop}
                  className="flex items-center gap-2 text-neon-violet font-bold group"
                >
                  Back to top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} Vishverse AI Studio. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
