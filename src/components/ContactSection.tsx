import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    project: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct email body
    const subject = `AI Consultation Request: ${formData.name} from ${formData.company}`;
    const body = `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nProject Description:\n${formData.project}`;
    
    // Create mailto link
    const mailtoUrl = `mailto:vishverse123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open mail client
    window.location.href = mailtoUrl;

    // Show success state in UI
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', company: '', email: '', project: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Ready to <span className="text-gradient">Automate</span> Your Future?
            </h2>
            <p className="text-lg text-silver-white/70 mb-12">
              Book a free 30-minute AI consultation call to explore how we can build custom intelligent systems for your business.
            </p>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl glass-morphism border-neon-violet/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-violet/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-neon-violet" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Technical Expertise</h4>
                  <p className="text-sm text-silver-white/60">Direct access to AI engineers, not sales reps.</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl glass-morphism border-accent-blue/20 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Custom Roadmap</h4>
                  <p className="text-sm text-silver-white/60">Get a clear plan for AI integration in your workflow.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[32px] glass-morphism relative"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} className="text-emerald-500" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Message Received!</h3>
                <p className="text-silver-white/60">
                  Vishwatej or Pratik will get back to you within 24 hours to schedule your consultation.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-neon-violet font-bold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-neon-violet focus:outline-none transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Company</label>
                    <input
                      required
                      type="text"
                      placeholder="Acme Corp"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-neon-violet focus:outline-none transition-colors"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-neon-violet focus:outline-none transition-colors"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-white/40 ml-1">Project Description</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the AI system you want to build..."
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-neon-violet focus:outline-none transition-colors resize-none"
                    value={formData.project}
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 rounded-xl bg-gradient-to-r from-neon-violet to-accent-blue font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                >
                  Book AI Consultation <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
