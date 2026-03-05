import React from 'react';
import { motion } from 'motion/react';
import { Phone, FileText, Code, Rocket, BarChart } from 'lucide-react';

const steps = [
  {
    icon: <Phone size={24} />,
    title: "Discovery Call",
    description: "We discuss your business needs, challenges, and identify AI opportunities.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <FileText size={24} />,
    title: "Solution Proposal",
    description: "We design a custom AI strategy and architecture tailored to your goals.",
    color: "from-cyan-400 to-neon-violet"
  },
  {
    icon: <Code size={24} />,
    title: "Prototype Delivered",
    description: "A functional MVP is built to validate the core AI logic and user experience.",
    color: "from-neon-violet to-purple-500"
  },
  {
    icon: <Rocket size={24} />,
    title: "Full System Deployment",
    description: "We scale the solution and integrate it seamlessly into your operations.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <BarChart size={24} />,
    title: "Ongoing Optimization",
    description: "Continuous monitoring and fine-tuning to ensure peak AI performance.",
    color: "from-pink-500 to-orange-400"
  }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="process" className="py-24 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Our <span className="text-gradient">Client Process</span>
          </motion.h2>
          <p className="text-silver-white/60">From initial concept to intelligent reality.</p>
        </div>

        <div className="relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start px-4 lg:px-12">
                  <div className={`max-w-md p-8 rounded-3xl glass-morphism text-center lg:text-left ${
                    index % 2 === 0 ? 'lg:text-right' : ''
                  }`}>
                    <h3 className="text-2xl font-display font-bold mb-4">{step.title}</h3>
                    <p className="text-silver-white/60 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon Circle */}
                <div className="absolute left-1/2 top-0 lg:top-1/2 -translate-x-1/2 lg:-translate-y-1/2 z-10 hidden lg:flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-0.5 shadow-[0_0_20px_rgba(139,92,246,0.3)]`}>
                    <div className="w-full h-full rounded-full bg-cosmic-blue flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Mobile Icon */}
                <div className="lg:hidden flex items-center justify-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full rounded-full bg-cosmic-blue flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Spacer for Desktop */}
                <div className="hidden lg:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
