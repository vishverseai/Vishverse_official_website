import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does an AI Engineering Studio do?",
    answer: "We design and build custom intelligent systems tailored to your business. This includes everything from AI-powered customer support agents and automated documentation systems to complex RAG (Retrieval-Augmented Generation) platforms that chat with your internal data."
  },
  {
    question: "How long does a typical AI project take?",
    answer: "A standard MVP (Minimum Viable Product) usually takes 2-4 weeks. Full-scale enterprise integrations can take 2-3 months depending on the complexity of the data and the required workflows."
  },
  {
    question: "Do I need to be tech-savvy to work with you?",
    answer: "Not at all. We handle the entire technical lifecycle—from architecture and coding to deployment and maintenance. We explain everything in plain English and focus on the business value rather than technical jargon."
  },
  {
    question: "How do you ensure our data remains secure?",
    answer: "Security is our top priority. We implement enterprise-grade encryption, follow HIPAA/GDPR guidelines where applicable, and can build solutions that run entirely within your own private cloud environment so your data never leaves your control."
  },
  {
    question: "What is the typical cost of an AI implementation?",
    answer: "Costs vary based on scope. We offer everything from fixed-price pilot projects for startups to monthly retainer models for ongoing AI optimization. During our initial consultation, we provide a transparent breakdown based on your specific needs."
  }
];

const FAQItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ 
  question, 
  answer, 
  isOpen, 
  onClick 
}) => {
  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-display font-medium transition-colors ${isOpen ? 'text-neon-violet' : 'text-silver-white/80 group-hover:text-white'}`}>
          {question}
        </span>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-neon-violet border-neon-violet text-white rotate-180' : 'text-white/40 group-hover:border-white/30'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-silver-white/60 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 relative bg-white/[0.01]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-silver-white/60">Everything you need to know about partnering with Vishverse.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-morphism rounded-[32px] p-8 md:p-12 border-white/5"
        >
          <div className="divide-y divide-white/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-silver-white/40 text-sm">
            Still have questions? <a href="#contact" className="text-neon-violet font-bold hover:underline">Contact our team directly.</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
