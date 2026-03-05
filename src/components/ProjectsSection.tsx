import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "RAG AI System",
    description: "Knowledge assistant trained on company documentation to provide intelligent answers.",
    outcome: "Reduced support tickets by 65% through instant internal knowledge retrieval."
  },
  {
    title: "AI Documentation Automation",
    description: "System that automatically generates, organizes, and updates technical documentation.",
    outcome: "Automated 90% of documentation maintenance for a large engineering team."
  },
  {
    title: "AI Automation Platform",
    description: "AI-powered automation tools that streamline business workflows and reporting.",
    outcome: "Saved over 40 hours per week in manual data entry and report generation."
  },
  {
    title: "AI Healthcare App",
    description: "AI system designed to assist healthcare workflows and patient scheduling.",
    outcome: "Optimized clinic scheduling, reducing patient wait times by 30%."
  }
];

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold mb-4"
            >
              Recent <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-silver-white/60 max-w-xl"
            >
              A showcase of intelligent systems we've built for industry leaders.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="#contact" className="text-neon-violet font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Start your project <ExternalLink size={18} />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                rotateX: 2,
                rotateY: 2,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative flex flex-col h-full p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent hover:from-neon-violet/30 transition-all duration-500"
            >
              <div className="flex-1 p-8 rounded-[22px] bg-cosmic-blue/90 backdrop-blur-xl flex flex-col">
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-neon-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-silver-white/60 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="p-4 rounded-xl bg-neon-violet/5 border border-neon-violet/10">
                  <div className="text-[10px] uppercase tracking-widest text-neon-violet mb-1 font-mono">Outcome</div>
                  <p className="text-sm text-silver-white/80 italic">
                    "{project.outcome}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
