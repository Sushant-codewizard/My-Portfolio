import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Terminal, Network, Archive, HelpCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';
import DoodleCanvas from './DoodleCanvas';

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<'neural' | 'api' | 'crypto' | 'database' | null>(null);

  // Map category icons
  const getIcon = (id: string) => {
    switch (id) {
      case 'languages': return <Terminal className="w-5 h-5 text-purple-400 font-bold" />;
      case 'frameworks': return <Code className="w-5 h-5 text-emerald-400 font-bold" />;
      case 'ai-backend': return <Network className="w-5 h-5 text-cyan-400 font-bold" />;
      case 'databases-tools': return <Archive className="w-5 h-5 text-pink-400 font-bold" />;
      default: return <HelpCircle className="w-5 h-5 text-gray-400 font-bold" />;
    }
  };

  // Border glow mapping
  const getGlowBorder = (type: string) => {
    switch (type) {
      case 'neural': return 'hover:border-cyan-400/50 hover:shadow-cyan-400/10 shadow-lg';
      case 'api': return 'hover:border-emerald-400/50 hover:shadow-emerald-400/10 shadow-lg';
      case 'crypto': return 'hover:border-purple-400/50 hover:shadow-purple-400/10 shadow-lg';
      case 'database': return 'hover:border-pink-400/50 hover:shadow-pink-400/10 shadow-lg';
      default: return 'hover:border-white/20';
    }
  };

  return (
    <section 
      id="skills-section"
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Interactive Doodle Canvas */}
      <DoodleCanvas activeType={hoveredCategory} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10 relative pointer-events-auto">
        {/* Header Block */}
        <div className="flex flex-col items-start space-y-2 mb-10 text-left">
          <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">// COGNITIVE TECH STACK</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">Skills &amp; Capabilities</h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl font-sans pt-1 leading-relaxed">
            Hover over any category to project its interactive system architecture and routing pathways onto the background canvas.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan via-purple-500 to-brand-emerald rounded mt-2" />
        </div>

        {/* Categories Cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 relative">
          {SKILL_CATEGORIES.map((category) => {
            const isHovered = hoveredCategory === category.doodleType;
            return (
              <motion.div
                id={`skill-card-${category.id}`}
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.doodleType)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`glass-panel p-6 rounded-2xl border-white/5 transition-all duration-300 flex flex-col justify-between text-left h-full relative cursor-crosshair group ${getGlowBorder(category.doodleType)}`}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Visual subtle flare in card background when card is hovered */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                    category.doodleType === 'neural' ? 'bg-cyan-500/5' :
                    category.doodleType === 'api' ? 'bg-emerald-500/5' :
                    category.doodleType === 'crypto' ? 'bg-purple-500/5' :
                    'bg-pink-500/5'
                  }`}
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center space-x-3.5">
                    <div className={`p-2.5 rounded-xl border ${
                      category.doodleType === 'neural' ? 'bg-cyan-950/20 border-cyan-500/20' :
                      category.doodleType === 'api' ? 'bg-emerald-950/20 border-emerald-500/20' :
                      category.doodleType === 'crypto' ? 'bg-purple-950/20 border-purple-500/20' :
                      'bg-pink-950/20 border-pink-500/20'
                    }`}>
                      {getIcon(category.id)}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                  </div>

                  {/* List of sub-skills in pill layout */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {category.skills.map((skill, j) => (
                      <span
                        key={j}
                        className={`text-xs font-mono font-medium px-3.5 py-1.5 rounded-lg border flex items-center transition-all duration-300 ${
                          isHovered 
                            ? category.doodleType === 'neural' ? 'bg-cyan-500/10 border-cyan-400/30 text-cyan-300 font-bold' :
                              category.doodleType === 'api' ? 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300 font-bold' :
                              category.doodleType === 'crypto' ? 'bg-purple-500/10 border-purple-400/30 text-purple-300 font-bold' :
                              'bg-pink-500/10 border-pink-400/30 text-pink-300 font-bold'
                            : 'bg-white/[0.02] border-white/5 text-gray-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Directive footer indicator */}
                <div className="mt-8 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 relative z-10">
                  <span>Category Code: {category.id.toUpperCase()}</span>
                  <span className={`transition-all duration-300 ${isHovered ? 'text-white opacity-100' : 'opacity-0'}`}>
                    Active projection vector: {category.doodleType.toUpperCase()}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer info box explaining user interactiveness */}
        <div className="mt-10 p-5 rounded-xl border border-white/5 bg-white/[0.01] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-left font-mono text-xs text-gray-400">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
            <span>Interactive Projection nodes represent actual logical components of Sushant's core knowledge base.</span>
          </div>
          <span className="text-[10px] text-gray-500 uppercase h-fit md:border border-white/5 px-2 py-1 rounded">
            GPU acceleration: Standard Canvas2D
          </span>
        </div>
      </div>
    </section>
  );
}
