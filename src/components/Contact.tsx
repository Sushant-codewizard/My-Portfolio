import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, Mail, Phone, Linkedin, Github, Send, Star, ShieldCheck, Loader, Sparkles } from 'lucide-react';
import { CONTACT_LINKS, ACHIEVEMENTS, PERSONAL_INFO } from '../data';
import ThreeDBlock from './ThreeDBlock';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const getAchievementIcon = (title: string) => {
    if (title.includes('HackerRank')) return <Star className="w-5 h-5 text-purple-400" />;
    if (title.includes('LeetCode')) return <Award className="w-5 h-5 text-cyan-400" />;
    if (title.includes('Ambassador')) return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    return <Sparkles className="w-5 h-5 text-pink-400" />;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setResponseMessage('Please fill out all mandatory fields.');
      return;
    }

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
        setResponseMessage(data.message || 'Your message has been decrypted and dispatched successfully!');
      } else {
        setStatus('error');
        setResponseMessage(data.error || 'Failed to dispatch transmission frame. Please check your system logs.');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setResponseMessage('Failed to establish contact with backend routing channels.');
    }
  };

  return (
    <section 
      id="contact-section"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 ambient-grid"
    >
      {/* Visual glowing particles */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Achievements, Credentials & Contact List */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Header info */}
            <div className="flex flex-col items-start space-y-2">
              <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">// SECURE LINK_COMMS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Credentials &amp; Get In Touch</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-purple rounded" />
            </div>

            {/* Achievements list stack */}
            <div className="space-y-4 pt-2">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Distinguished Accolades:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel p-4.5 rounded-xl border-white/5 bg-white/[0.01] hover:border-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-white/[0.03] border border-white/5 rounded-lg">
                        {getAchievementIcon(ach.title)}
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-[9px] text-gray-400 border border-white/5 px-1.5 py-0.5 rounded uppercase">
                          {ach.badge || 'Verified'}
                        </span>
                        <h4 className="text-sm font-bold text-white tracking-tight pt-1 leading-snug">
                          {ach.title}
                        </h4>
                        <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Crucial Links Component - Visually distinct contact grid */}
            <div className="space-y-4 pt-4 border-t border-white/5">
              <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Verified Connection Relays:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* LinkedIn Link */}
                <motion.a
                  href={CONTACT_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(34,211,238,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-panel p-4 rounded-xl border border-white/5 hover:border-brand-cyan/25 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 bg-brand-cyan/10 border border-brand-cyan/20 rounded-lg text-brand-cyan">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="text-left font-mono">
                      <span className="block text-[9px] text-gray-400 uppercase tracking-widest">LinkedIn Profile</span>
                      <span className="block text-[11px] text-white">Sushant Tiwari</span>
                    </div>
                  </div>
                </motion.a>

                {/* GitHub Link */}
                <motion.a
                  href={CONTACT_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(34,211,238,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-panel p-4 rounded-xl border border-white/5 hover:border-brand-cyan/25 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 bg-white/5 border border-white/10 rounded-lg text-white">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="text-left font-mono">
                      <span className="block text-[9px] text-gray-400 uppercase tracking-widest">Github Codebase</span>
                      <span className="block text-[11px] text-white">Sushant-codewizard</span>
                    </div>
                  </div>
                </motion.a>

                {/* Email Link */}
                <motion.a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(168,85,247,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-panel p-4 rounded-xl border border-white/5 hover:border-brand-purple/25 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 bg-brand-purple/10 border border-brand-purple/20 rounded-lg text-brand-purple">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="text-left font-mono">
                      <span className="block text-[9px] text-gray-400 uppercase tracking-widest">Email Address</span>
                      <span className="block text-[11px] text-white break-all leading-tight">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                </motion.a>

                {/* Phone Link */}
                <motion.a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^+\d]/g, '')}`}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(16,185,129,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  className="glass-panel p-4 rounded-xl border border-white/5 hover:border-brand-emerald/25 flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2 bg-brand-emerald/10 border border-brand-emerald/20 rounded-lg text-brand-emerald">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="text-left font-mono">
                      <span className="block text-[9px] text-gray-400 uppercase tracking-widest">Mobile Contact</span>
                      <span className="block text-[11px] text-white font-mono">{PERSONAL_INFO.phone}</span>
                    </div>
                  </div>
                </motion.a>

              </div>
            </div>

          </div>

          {/* Right Column: Secure Email Form Portal (Express Backend Proxy) */}
          <div className="lg:col-span-6 w-full text-left">
            <span className="font-mono text-xs font-bold text-brand-purple tracking-widest block uppercase mb-4">// MESSAGE DISPATCH COMPARTMENT</span>
            
            <ThreeDBlock intensity={8} glowColor="rgba(34,211,238,0.15)" className="w-full">
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 w-full relative">
                
                {/* Visual frame grids */}
                <div className="absolute top-2 right-2 flex items-center space-x-1.5 font-mono text-[9px] text-gray-500">
                  <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full animate-pulse" />
                  <span>ROUTE: API_SECURE</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wide">Sender Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-200 font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wide">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-200 font-sans"
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wide">Transit Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      placeholder="Collaboration opportunity / General inquiry"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-200 font-sans"
                    />
                  </div>

                  {/* Message content textarea */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wide">Message Payload *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      placeholder="Hi Sushant, I would like to consult you regarding..."
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan/20 transition-all duration-200 font-sans resize-none"
                    />
                  </div>

                  {/* Form response error/success boundaries */}
                  {status === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-brand-emerald/10 border border-brand-emerald/25 text-brand-emerald text-xs font-mono flex items-start space-x-2.5"
                    >
                      <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{responseMessage}</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 5 }} 
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-xs font-mono flex items-start space-x-2.5"
                    >
                      <Award className="w-4 h-4 mt-0.5 shrink-0 rotate-180" />
                      <span>{responseMessage}</span>
                    </motion.div>
                  )}

                  {/* Submission dispatch action */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                    className={`w-full py-3.5 rounded-xl text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center space-x-2.5 transition-all duration-300 relative cursor-pointer ${
                      status === 'loading'
                        ? 'bg-white/10 text-gray-400 cursor-not-allowed border border-white/5'
                        : 'bg-gradient-to-r from-brand-cyan to-brand-purple text-slate-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:brightness-110'
                    }`}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        <span>DISPATCHING TRANSMISSION GATEWAY...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH SECURE TRANSMISSION</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ThreeDBlock>

          </div>

        </div>

        {/* Footer legalities and design signatures */}
        <div className="pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500 text-left w-full pl-1">
          <span>&copy; {new Date().getFullYear()} SUSHANT TIWARI. REGISTERED TRIPLE-CERTIFIED MOE AMBASSADOR. AP-2.0.</span>
          <span>CURR_TIME (UTC): 2026-05-25 // SECURE SCHEMAS INSTANTIATED</span>
        </div>
      </div>
    </section>
  );
}
