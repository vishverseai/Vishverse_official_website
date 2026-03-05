import React from 'react';
import { motion } from 'motion/react';
import { Linkedin, Mail, MapPin } from 'lucide-react';

const founders = [
  {
    name: "Vishwatej Khot",
    role: "Founder & AI Engineer",
    image: "/vishwatej.jpg",
    bio: "Expert in RAG systems and custom AI architecture with a passion for building scalable intelligent products.",
    linkedin: "https://www.linkedin.com/in/vishwatej-k-575911234/",
    email: "khotvishwatej@gmail.com"
  },
  {
    name: "Pratik Dake",
    role: "Co-Founder & AI Engineer",
    image: "/pratik.jpg",
    bio: "Specializes in workflow automation and generative AI tools, focused on operational efficiency for businesses.",
    linkedin: "https://www.linkedin.com/in/pratik-dake-47b554218/",
    email: "pratikdake47@gmail.com"
  }
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              The Minds Behind <span className="text-gradient">Vishverse</span>
            </h2>
            <p className="text-lg text-silver-white/70 mb-8 leading-relaxed">
              Vishverse is a Bristol-based AI engineering studio focused on designing intelligent systems for businesses. We believe AI shouldn't be a gimmick—it should be a real business advantage.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-silver-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin size={20} className="text-neon-violet" />
                </div>
                <span>Bristol, United Kingdom</span>
              </div>
              <div className="flex items-center gap-4 text-silver-white/60">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={20} className="text-accent-blue" />
                </div>
                <a href="mailto:vishverse123@gmail.com" className="hover:text-white transition-colors">vishverse123@gmail.com</a>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl glass-morphism border-neon-violet/20">
              <h4 className="text-xl font-display font-bold mb-4">Our Ideal Clients</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Education & Training",
                  "Healthcare & Wellness",
                  "Startups & SaaS",
                  "E-commerce Businesses",
                  "Creative Agencies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-silver-white/60 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon-violet" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative p-6 rounded-3xl glass-morphism text-center"
              >
                <div className="relative mb-6 mx-auto w-32 h-32 rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-bold mb-1">{founder.name}</h3>
                <div className="text-xs font-mono text-neon-violet uppercase tracking-widest mb-4">{founder.role}</div>
                <p className="text-sm text-silver-white/60 leading-relaxed mb-6">
                  {founder.bio}
                </p>
                <div className="flex justify-center gap-4">
                  <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${founder.email}`} className="text-white/40 hover:text-white transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
