import { motion } from 'motion/react';
import { Github, ExternalLink, Award, ShieldAlert, Cpu, Heart, Code2 } from 'lucide-react';
import { PROJECTS_LIST } from '../data';
import ThreeDBlock from './ThreeDBlock';

export default function Projects() {
  
  // Custom styling elements based on project identifier
  const getProjectStyle = (id: string) => {
    switch (id) {
      case 'qrypton':
        return {
          glow: 'rgba(168,85,247,0.22)', // Purple for Crypto/Security
          border: 'border-purple-500/20 hover:border-purple-500/50',
          icon: <Cpu className="w-5 h-5 text-purple-400" />
        };
      case 'innoconnect':
        return {
          glow: 'rgba(34,211,238,0.22)', // Cyan for AI/Client
          border: 'border-cyan-500/20 hover:border-cyan-400/50',
          icon: <Code2 className="w-5 h-5 text-cyan-400" />
        };
      case 'viksit-kanpur':
        return {
          glow: 'rgba(16,185,129,0.25)', // Emerald for prize winning Civic platform
          border: 'border-emerald-500/20 hover:border-emerald-400/50',
          icon: <Award className="w-5 h-5 text-emerald-400" />
        };
      default:
        return {
          glow: 'rgba(255,255,255,0.1)',
          border: 'border-white/10 hover:border-white/30',
          icon: <Cpu className="w-5 h-5 text-gray-400" />
        };
    }
  };

  return (
    <section 
      id="projects-section"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 bg-zinc-950/20"
    >
      {/* Decorative Ornaments */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto z-10 relative">
        {/* Page Header */}
        <div className="flex flex-col items-start space-y-2 mb-12 text-left">
          <span className="font-mono text-xs text-brand-purple uppercase tracking-widest">// DEPLOYED REPOSITORIES</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Interactive Case Studies</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-sans pt-1 leading-relaxed">
            Move your cursor or finger over the cards to engage the custom 3D perspective tilt calculations.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple via-brand-cyan to-brand-emerald rounded mt-2" />
        </div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          {PROJECTS_LIST.map((project) => {
            const styles = getProjectStyle(project.id);
            return (
              <ThreeDBlock
                key={project.id}
                intensity={12}
                glowColor={styles.glow}
                className="w-full h-full"
              >
                <div className={`glass-panel p-6 sm:p-7 rounded-2xl ${styles.border} flex flex-col justify-between h-full relative overflow-hidden transition-all duration-300 group`}>
                  {/* Outer edge decorative lines */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-white/[0.01] rounded-bl-3xl border-b border-l border-white/5" />

                  <div className="space-y-5 text-left">
                    {/* Card subtitle/tag row */}
                    <div className="flex items-center justify-between">
                      {/* Left icon category */}
                      <div className="p-2 bg-white/[0.04] border border-white/5 rounded-xl">
                        {styles.icon}
                      </div>

                      {/* Prize/Status Ribbon badges */}
                      {project.id === 'viksit-kanpur' ? (
                        <span className="inline-flex items-center space-x-1.5 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider">
                          <Award className="w-3 h-3 animate-bounce" />
                          <span>1ST PRIZE TECHEXPO</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono text-gray-400">
                          {project.period}
                        </span>
                      )}
                    </div>

                    {/* Project Title and short summary */}
                    <div className="space-y-1.5">
                      <h3 className="text-xl font-extrabold text-white tracking-tight leading-none">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-normal font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Bullet Accomplishments */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest block">Implementation parameters:</span>
                      <ul className="space-y-1.5 font-sans text-xs text-gray-300 leading-relaxed">
                        {project.highlights.map((highlight, j) => (
                          <li key={j} className="flex items-start space-x-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-cyan shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stacks bubbles */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((lang, l) => (
                          <span
                            key={l}
                            className="bg-white/[0.03] border border-white/5 px-2 py-0.5 rounded text-[10px] font-mono text-gray-400"
                          >
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Code links */}
                  <div className="flex items-center justify-between pt-6 mt-6 border-t border-white/5">
                    <span className="font-mono text-[9px] text-gray-500">
                      ID: {project.id.toUpperCase()}
                    </span>

                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-wider text-slate-950 bg-white flex items-center space-x-1.5 cursor-pointer hover:bg-brand-cyan hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all duration-300"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>SOURCE CODE</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </ThreeDBlock>
            );
          })}
        </div>

        {/* Github Repository reference footnote */}
        <div className="mt-12 p-5 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-left">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white tracking-tight flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-brand-purple" />
              <span>Full Open-Source Compliance</span>
            </h4>
            <p className="text-xs text-gray-400 font-sans leading-relaxed">
              All backend schemas, Go cryptography nodes, and React microservices are version-tracked on active Git trees.
            </p>
          </div>
          <motion.a
            href="https://github.com/Sushant-codewizard"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-brand-cyan border border-brand-cyan/20 hover:bg-brand-cyan/10 cursor-pointer flex items-center space-x-2 shrink-0 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
            <span>Discover Github Registry</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
