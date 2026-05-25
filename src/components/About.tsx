import { motion } from 'motion/react';
import { Award, BookOpen, Users, Key, Terminal, Network, Landmark } from 'lucide-react';
import { EDUCATION_HISTORY, PERSONAL_INFO } from '../data';
import ThreeDBlock from './ThreeDBlock';

export default function About() {
  return (
    <section 
      id="about-section"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 bg-zinc-950/20"
    >
      {/* Background shapes */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Page title */}
        <div className="flex flex-col items-start space-y-2 mb-12 text-left">
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">// ARCHITECTURE OF MIND</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-purple rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Narrative / Main Bio text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-brand-cyan" />
                <span>The "Build-First" Methodology</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                I believe theory is empty without actual concrete deployments. As an engineer specializing in full stack software development and artificial intelligence systems, my core philosophy is focused on building functional, production-ready prototypes. Every lines of code I write is optimized for scalability, throughput, and system security.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                My research interests are strongly oriented toward <span className="text-brand-purple font-semibold">Post-Quantum Cryptography</span>. In an era where quantum computing approaches viability, I am dedicated to constructing decentralized blocks, keys, and message flows that utilize quantum-resistant signature schemas (such as <span className="text-brand-cyan font-mono">Falcon Signatures</span>) to secure future digital assets.
              </p>
            </div>

            {/* Leadership and Conclave highlight block */}
            <ThreeDBlock intensity={6} glowColor="rgba(168,85,247,0.15)">
              <div className="glass-panel rounded-2xl p-6 border-white/5 space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-purple/5 rounded-full blur-2xl" />
                <div className="flex items-center space-x-3 text-brand-purple">
                  <Landmark className="w-6 h-6" />
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider">Leadership & Community</h4>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                  President of the Entrepreneurship Cell (PSIT) & Innovation Ally
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  Upholding executive duties, I direct a cross-functional squad of 30+ members. Our major triumph was organising the <span className="text-brand-purple font-semibold">"Elevate '26"</span> conclave, which brought together over 250+ tech startups, ecosystem pioneers, and VC directors.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 font-mono text-[9px]">
                  <span className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-full border border-brand-purple/20">30+ TEAM SQUAD</span>
                  <span className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-full border border-brand-purple/20">250+ STARTUPS</span>
                  <span className="bg-brand-purple/10 text-brand-purple px-2 py-0.5 rounded-full border border-brand-purple/20">E-CELL PSIT PRESIDENT</span>
                </div>
              </div>
            </ThreeDBlock>
          </motion.div>

          {/* Education timeline and timeline events */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-brand-cyan" />
              <span>Academic Foundation</span>
            </h3>

            <div className="space-y-6">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                    <div>
                      <h4 className="text-sm font-mono text-brand-cyan tracking-wider">{edu.period}</h4>
                      <h3 className="text-lg font-extrabold text-white tracking-tight pt-0.5">{edu.degree}</h3>
                    </div>
                    {/* Grade Badge */}
                    <div className="bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald px-3 py-1 rounded-xl text-center flex flex-col justify-center h-fit w-fit">
                      <span className="text-[8px] font-mono uppercase tracking-wider text-gray-400">Score</span>
                      <span className="text-xs font-bold leading-none font-mono pt-0.5">{edu.gradeValue}</span>
                    </div>
                  </div>

                  <div className="pt-3.5 space-y-2">
                    <p className="text-xs sm:text-sm font-semibold text-slate-300 font-sans tracking-wide">
                      {edu.institution}
                    </p>
                    {edu.highlights && (
                      <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-400 pt-1 leading-relaxed">
                        {edu.highlights.map((highlight, j) => (
                          <li key={j}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Micro details badge */}
            <div className="flex items-center space-x-4 bg-white/[0.01] p-4 rounded-xl border border-white/5 font-mono text-xs text-gray-400">
              <Network className="w-5 h-5 text-brand-purple" />
              <span>MoE Triple-Certified Ambassador (Govt. India) scored an exceptional 9.0 Grade.</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
