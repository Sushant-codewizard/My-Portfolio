import { motion } from 'motion/react';
import { Terminal, Cpu, Shield, ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO, CONTACT_LINKS } from '../data';
import ThreeDBlock from './ThreeDBlock';
import AnimatedProfessionalAvatar from './AnimatedProfessionalAvatar';

interface HeroProps {
  onNavigate: (tab: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 overflow-hidden ambient-grid"
    >
      {/* Dynamic light bursts in background */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-brand-cyan/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-brand-purple/5 blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 relative">
        {/* Left Column: Text Content and Action Hooks */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
        >
          {/* Active status flag */}
          <div className="inline-flex items-center space-x-2 bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20 px-3.5 py-1 rounded-full text-xs font-mono w-fit tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
            <span className="uppercase text-[10px] font-bold">STATUS: ACTIVE SDE INTERN @ SENSE ORIGINAL</span>
          </div>

          {/* Main Display Typography */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-purple-400 to-brand-emerald">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-slate-300 font-mono tracking-tight pt-1">
              {PERSONAL_INFO.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-gray-400 max-w-xl font-sans leading-relaxed">
            {PERSONAL_INFO.headline} SPECIALIZING IN SCALABLE BACKEND SYSTEMS, DISTRIBUTED API DESIGN, AND AI LLM AGENT ROUTERS.
          </p>

          {/* Quick Stats Grid to establish technical competence */}
          <div className="grid grid-cols-3 gap-4 border-t border-b border-white/5 py-4 max-w-lg">
            <div className="text-left font-mono">
              <span className="block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-white">40%</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none pt-1">Latency Reduced</span>
            </div>
            <div className="text-left font-mono">
              <span className="block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-white">Cosmos</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none pt-1">Go Blockchain</span>
            </div>
            <div className="text-left font-mono">
              <span className="block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-white">MoE</span>
              <span className="block text-[10px] text-gray-400 uppercase tracking-widest leading-none pt-1">Ambassador</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.button
              onClick={() => onNavigate('projects')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-cyan via-cyan-300 to-brand-emerald flex items-center justify-center space-x-2.5 cursor-pointer shadow-xl shadow-brand-cyan/10"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              onClick={() => onNavigate('contact')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white/10 hover:border-brand-purple/30 bg-white/5 hover:bg-white/10 flex items-center justify-center space-x-2.5 cursor-pointer transition-colors duration-200"
            >
              <span>View Resume & Contact</span>
              <Download className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Social Links Panel */}
          <div className="flex items-center space-x-4 pt-4 text-gray-400">
            <a href={CONTACT_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors duration-200">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={CONTACT_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors duration-200">
              <Github className="w-5 h-5" />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-brand-cyan transition-colors duration-200">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Holographic Profile Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center"
        >
          <ThreeDBlock intensity={18} glowColor="rgba(34,211,238,0.22)" className="w-72 h-96 sm:w-80 sm:h-[420px]">
            <div className="w-full h-full glass-panel rounded-2xl p-6 border-white/10 flex flex-col justify-between relative overflow-hidden group">
              
              {/* Outer Cybernetic Frames/Outlines */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-cyan/40" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-brand-cyan/40" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-brand-cyan/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-cyan/40" />

              {/* Running cyber code decoration (Left border) */}
              <div className="absolute left-3 top-10 bottom-10 w-[1px] bg-gradient-to-b from-brand-cyan/30 via-transparent to-brand-purple/30 hidden sm:block" />
              
              {/* Decorative Header Metrics */}
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-500">
                <span>PROJECT_REBUILD // SYS_GRID</span>
                <span className="text-brand-cyan tracking-wider">SECURE: GO</span>
              </div>

              {/* Main Avatar Circle with Interactive Rotating Orbit Loops */}
              <div className="my-auto flex flex-col items-center justify-center relative">
                {/* Rotating loop 1 */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
                  className="absolute w-44 h-44 rounded-full border border-dashed border-brand-cyan/30"
                />
                {/* Rotating loop 2 */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
                  className="absolute w-48 h-48 rounded-full border border-brand-purple/20"
                />
                
                {/* Animated Professional Working Avatar */}
                <AnimatedProfessionalAvatar size="large" />
                
                {/* Orbital holographic scanner line */}
                <motion.div 
                  animate={{ y: [-70, 70, -70] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                  className="absolute w-40 h-[1.5px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent shadow-[0_0_10px_#22d3ee] pointer-events-none"
                />
              </div>

              {/* Holographic Badge Card Info Footer */}
              <div className="space-y-1.5 font-mono text-left bg-black/40 p-3 rounded-lg border border-white/5">
                <div className="text-[10px] text-brand-purple flex items-center justify-between">
                  <span>SUBJECT_NAME:</span>
                  <span className="text-white">S. TIWARI</span>
                </div>
                <div className="text-[10px] text-brand-purple flex items-center justify-between">
                  <span>ENGINEER_LOC:</span>
                  <span className="text-white">KANPUR, IN</span>
                </div>
                <div className="text-[10px] text-brand-purple flex items-center justify-between">
                  <span>AUTH_SIGN:</span>
                  <span className="text-brand-emerald flex items-center space-x-1">
                    <Shield className="w-2.5 h-2.5" />
                    <span className="text-[9px]">PQC_BLOCKPASS</span>
                  </span>
                </div>
              </div>

            </div>
          </ThreeDBlock>
        </motion.div>
      </div>
    </section>
  );
}
