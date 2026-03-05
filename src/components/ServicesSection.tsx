import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Zap, 
  Database, 
  Cpu, 
  Lightbulb 
} from 'lucide-react';

const services = [
  {
    icon: <MessageSquare className="text-neon-violet" />,
    title: "AI Voice & Chat Agents",
    description: "Intelligent AI agents that can talk with customers and automate communication.",
    examples: ["AI receptionists", "AI booking assistants", "AI customer support", "Voice assistants"]
  },
  {
    icon: <Zap className="text-accent-blue" />,
    title: "AI Workflow Automation",
    description: "Automation systems that reduce repetitive work and improve operational efficiency.",
    examples: ["Automated data processing", "Workflow automation", "AI reporting systems", "Email automation"]
  },
  {
    icon: <Database className="text-emerald-400" />,
    title: "Knowledge AI Systems",
    description: "AI systems trained on company data that can answer questions and retrieve information instantly.",
    examples: ["RAG powered chatbots", "Internal AI assistants", "Document search AI", "Enterprise knowledge"]
  },
  {
    icon: <Cpu className="text-orange-400" />,
    title: "Custom Generative AI Tools",
    description: "Custom AI products designed for specific business needs and internal dashboards.",
    examples: ["Custom GPT tools", "AI content systems", "AI productivity tools", "Internal dashboards"]
  },
  {
    icon: <Lightbulb className="text-yellow-400" />,
    title: "AI Consulting & Strategy",
    description: "Helping companies successfully integrate AI into their business operations.",
    examples: ["AI strategy roadmap", "Architecture planning", "Implementation guidance", "Team training"]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">AI Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-silver-white/60"
          >
            We provide end-to-end AI engineering services to transform how your business operates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl glass-morphism overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-neon-violet transition-colors">
                  {service.title}
                </h3>
                <p className="text-silver-white/60 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.examples.map((example, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-mono px-2 py-1 rounded bg-white/5 text-white/40">
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-neon-violet/5 blur-2xl rounded-full group-hover:bg-neon-violet/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
