import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Database, Zap, Shield, Key } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data';
import ThreeDBlock from './ThreeDBlock';

export default function Experience() {
  return (
    <section 
      id="experience-section"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 bg-zinc-950/25"
    >
      {/* Visual background ornaments */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-brand-emerald/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Header Title Block */}
        <div className="flex flex-col items-start space-y-2 mb-12 text-left">
          <span className="font-mono text-xs text-brand-emerald uppercase tracking-widest">// RECENT ENGAGEMENTS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Professional Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-emerald to-brand-cyan rounded" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Main Professional timeline */}
          <div className="lg:col-span-8 space-y-8">
            {WORK_EXPERIENCE.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border-white/5 relative hover:border-white/10 transition-colors duration-300"
              >
                {/* Visual marker */}
                <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center hidden md:flex">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/5 pb-5">
                  <div>
                    <span className="font-mono text-xs text-brand-emerald uppercase tracking-wider font-semibold">INTERNSHIP ROLE</span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight pt-1">{exp.role}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 pt-2 font-mono">
                      <span className="flex items-center space-x-1.5">
                        <Briefcase className="w-4 h-4 text-brand-emerald" />
                        <span>{exp.company}</span>
                      </span>
                      {exp.location && (
                        <span className="flex items-center space-x-1.5">
                          <MapPin className="w-4 h-4 text-brand-emerald" />
                          <span>{exp.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 bg-white/[0.04] border border-white/5 px-4 py-2 rounded-xl text-xs text-gray-300 font-mono h-fit w-fit">
                    <Calendar className="w-3.5 h-3.5 text-brand-emerald" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Highlights paragraph bullets */}
                <div className="space-y-4 pt-5">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Core Accomplishments:</span>
                  <ul className="space-y-3 font-sans text-sm text-gray-300 leading-relaxed pl-1">
                    {exp.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start space-x-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-emerald shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical technologies tag pool */}
                <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                  <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest block">Deployment Stack:</span>
                  <div className="flex flex-wrap gap-2 pt-1 font-mono">
                    {exp.tech.map((tech, j) => (
                      <span 
                        key={j}
                        className="bg-brand-emerald/5 text-brand-emerald border border-brand-emerald/25 px-2.5 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Visual Metrics and optimizations summaries */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-mono text-xs font-bold uppercase text-brand-cyan tracking-widest mb-2">// METRIC IMPACT SHIELD</h3>

            {/* Metric 1 */}
            <ThreeDBlock intensity={10} glowColor="rgba(16,185,129,0.2)" className="w-full">
              <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col justify-between space-y-4 text-left group">
                <div className="flex items-center justify-between">
                  <Database className="w-8 h-8 text-brand-emerald bg-brand-emerald/10 p-1.5 rounded-lg border border-brand-emerald/20" />
                  <span className="text-[10px] font-mono text-gray-500">OPTIMIZATION: POSTGRESQL</span>
                </div>
                <div>
                  <div className="text-4xl font-extrabold font-mono text-white tracking-tight">50,000+</div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wide pt-1">Active DB Records Optimized</div>
                </div>
                <p className="text-xs text-gray-400 leading-normal font-sans">
                  Redesigned schema normalizations, indexing, and transactional partitions to avoid indexing lock delays.
                </p>
              </div>
            </ThreeDBlock>

            {/* Metric 2 */}
            <ThreeDBlock intensity={10} glowColor="rgba(34,211,238,0.2)" className="w-full">
              <div className="glass-panel p-6 rounded-2xl border-white/5 flex flex-col justify-between space-y-4 text-left group">
                <div className="flex items-center justify-between">
                  <Zap className="w-8 h-8 text-brand-cyan bg-brand-cyan/10 p-1.5 rounded-lg border border-brand-cyan/20" />
                  <span className="text-[10px] font-mono text-gray-500">LATENCY REDUCTION</span>
                </div>
                <div>
                  <div className="text-4xl font-extrabold font-mono text-brand-cyan tracking-tight">40% Speedup</div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-wide pt-1">Information Retrieval Reduced</div>
                </div>
                <p className="text-xs text-gray-400 leading-normal font-sans">
                  Slashed backend model querying response time, supporting extreme workloads and immediate rendering.
                </p>
              </div>
            </ThreeDBlock>

            {/* Metric 3 */}
            <div className="glass-panel p-5 rounded-xl border-white/5 space-y-2.5 font-mono text-xs text-gray-400 bg-white/[0.01]">
              <div className="flex items-center space-x-2 text-brand-emerald">
                <Shield className="w-4 h-4" />
                <span className="font-bold">Zero-Downtime Pipeline</span>
              </div>
              <p className="text-[11px] leading-relaxed font-sans text-gray-500">
                Created server failover processes with customized API request retry logic, ensuring constant operation across external API outages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
