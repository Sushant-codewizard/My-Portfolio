import { motion } from 'motion/react';
import { Terminal, Laptop, Code } from 'lucide-react';

interface AnimatedProfessionalAvatarProps {
  size?: 'small' | 'large';
}

export default function AnimatedProfessionalAvatar({ size = 'large' }: AnimatedProfessionalAvatarProps) {
  const isSmall = size === 'small';

  // Floating variants for background binary elements
  const floatVariant = (delay: number) => ({
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }
    }
  });

  // Typing effect letters
  const textWords = "hello world".split("");

  return (
    <div className={`relative flex flex-col items-center select-none ${isSmall ? 'w-10 h-10' : 'w-full max-w-[280px]'}`}>
      
      {/* 1. Speech Dialog Conversation Box above the professional */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', delay: 0.4, stiffness: 200, damping: 15 }}
        className={`absolute z-20 ${
          isSmall 
            ? '-top-8 left-1/2 -translate-x-1/2 bg-slate-900 border border-brand-cyan/30 px-2 py-0.5 rounded-md shadow-lg scale-90' 
            : '-top-16 bg-slate-950/90 border border-brand-purple/40 px-4 py-2 rounded-xl shadow-2xl glass-panel shadow-brand-purple/5'
        }`}
      >
        <div className="flex items-center space-x-1">
          {/* Coder Mini Terminal Indicator */}
          {!isSmall && <Terminal className="w-3.5 h-3.5 text-brand-cyan animate-pulse mr-1" />}
          
          <span className={`font-mono text-brand-cyan font-semibold tracking-tight ${isSmall ? 'text-[9px]' : 'text-xs'}`}>
            {/* Animated letters */}
            {textWords.map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1] }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 5,
                  duration: 0.2,
                  delay: index * 0.12,
                }}
              >
                {char}
              </motion.span>
            ))}
            
            {/* Blinking block terminal cursor */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-1.5 h-3 bg-brand-cyan ml-0.5 align-middle"
            />
          </span>
        </div>

        {/* Conversation Box Tail */}
        <div 
          className={`absolute bottom-[-5px] left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-inherit border-r border-b rotate-45 ${
            isSmall ? 'border-brand-cyan/30' : 'border-brand-purple/40'
          }`} 
        />
      </motion.div>

      {/* 2. Main Professional Avatar Canvas Container */}
      <motion.div
        whileHover={{ scale: isSmall ? 1.05 : 1.02 }}
        className={`relative rounded-full flex items-center justify-center overflow-visible ${
          isSmall 
            ? 'w-10 h-10 bg-slate-950/80 border border-brand-cyan/30 shadow-inner' 
            : 'w-40 h-40 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950/40 border border-white/10 shadow-inner'
        }`}
      >
        {/* Glow halo behind Avatar */}
        {!isSmall && (
          <div className="absolute inset-2 bg-gradient-to-tr from-brand-cyan/20 to-brand-purple/10 rounded-full blur-xl opacity-80 -z-10 animate-pulse" />
        )}

        {/* Vector SVG Avatar customized accurately to match the user's uploaded photo */}
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full overflow-visible"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid pattern inside background */}
          {!isSmall && (
            <defs>
              <pattern id="avatar-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="0.5" />
              </pattern>
            </defs>
          )}
          {!isSmall && (
            <circle cx="50" cy="50" r="45" fill="url(#avatar-grid)" className="opacity-70" />
          )}

          {/* Floating digital/code sparks context */}
          {!isSmall && (
            <g className="opacity-85">
              <motion.circle cx="18" cy="28" r="1.2" fill="#3b82f6" {...floatVariant(0)} />
              <motion.circle cx="82" cy="35" r="1.5" fill="#a855f7" {...floatVariant(1)} />
              <motion.circle cx="22" cy="62" r="1" fill="#10b981" {...floatVariant(0.5)} />
              <motion.path 
                d="M 80 58 L 84 62 M 84 58 L 80 62" 
                stroke="rgba(59, 130, 246, 0.3)" 
                strokeWidth="0.75" 
                {...floatVariant(1.5)} 
              />
              <motion.path 
                d="M 12 42 L 17 42" 
                stroke="rgba(168, 85, 247, 0.4)" 
                strokeWidth="0.75" 
                {...floatVariant(0.8)} 
              />
            </g>
          )}

          {/* Core Professional Avatar Body (with gentle breathing transition) */}
          <motion.g
            animate={{ y: [0.8, -0.8, 0.8] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            {/* 1. Tailored Torso: Navy blue shirt with custom red chest band/stripe */}
            <g>
              {/* Torso Base Body (Dark Navy Color matching his shirt in photo) */}
              <path 
                d="M 20 84 C 20 73 30 68 50 68 C 70 68 80 73 80 84 L 80 100 L 20 100 Z" 
                fill="#1f3254" 
              />
              
              {/* Red Chest Band/Stripe spanning across upper shoulders/chest */}
              <path 
                d="M 21.5 76.5 C 23.5 73.5 32 71.5 50 71.5 C 68 71.5 76.5 73.5 78.5 76.5 L 79.2 82.5 C 70 82 50 82 20.8 82.5 Z" 
                fill="#b82433" 
              />
              
              {/* White Collar underlay and navy shirt collar flaps */}
              {/* White Inner Collar */}
              <path 
                d="M 41 68 L 50 76 L 59 68 C 55 64 45 64 41 68" 
                fill="#f8fafc" 
              />
              
              {/* Navy Collar flaps overlying */}
              <path 
                d="M 40 68 L 47 77 L 50 68" 
                fill="#1f3254" 
                stroke="#2a426e" 
                strokeWidth="0.5" 
              />
              <path 
                d="M 60 68 L 53 77 L 50 68" 
                fill="#1f3254" 
                stroke="#2a426e" 
                strokeWidth="0.5" 
              />
            </g>

            {/* Neck (Warming skin tone matching picture) */}
            <rect x="45" y="58" width="10" height="12" rx="2" fill="#ca8d6d" />
            
            {/* Neck shadow boundary underneath jaw */}
            <path d="M 45 64 C 45 64 50 66.5 55 64" stroke="#a2654a" strokeWidth="1" />

            {/* 2. Head / Face (Warm tan profile aligned with photo details) */}
            <rect x="35" y="38" width="30" height="26" rx="10.5" fill="#ca8d6d" />

            {/* Professional's groomed dark brown beard stubble & mustache contours */}
            {/* Beard Shadow along bottom jaw and sides */}
            <path 
              d="M 35 48 C 35 58 40 64 50 64 C 60 64 65 58 65 48 C 61 55 57 58 50 58 C 43 58 39 55 35 48 Z" 
              fill="#18181c" 
              fillOpacity="0.45" 
            />
            {/* Crisp dark beard outlines on chin/jaw */}
            <path 
              d="M 35 49 C 35 59 41 64 50 64 C 59 64 65 59 65 49 C 62 55 58 57 50 57 C 42 57 38 55 35 49 Z" 
              fill="#121214" 
              fillOpacity="0.4" 
            />
            {/* Groomed mustache */}
            <path 
              d="M 44.5 55.5 C 47.5 54 49 55 50 55.5 C 51 55 52.5 54 55.5 55.5 C 55 57 51 57.5 50 57 C 49 57.5 45 57 44.5 55.5 Z" 
              fill="#121214" 
            />

            {/* Thick stylized matching dark hair: high-volume side-part sweep from photo */}
            <path 
              d="M 33 42 C 31 32 35 24 50 22 C 65 23 68 31 67 42 C 69 39 67 29 57 28 C 50 28 46 27 41 29 C 35 31 33 36 33 42 Z" 
              fill="#121215" 
            />
            {/* Rich hair texture highlights to match the photo styling */}
            <path d="M 41 26 Q 48 23 54 28" stroke="#222" strokeWidth="1" fill="none" />
            <path d="M 37 32 Q 45 28 52 33" stroke="#222" strokeWidth="1.2" fill="none" />
            <path d="M 47 24 Q 56 24 62 29" stroke="#222" strokeWidth="1.2" fill="none" />

            {/* Expressive friendly eyes & dark professional eyebrows (replaced old nerdy glasses) */}
            {/* Left Eyebrow */}
            <path d="M 39 45.2 C 41 43.5 44 43.5 46.5 45" stroke="#121215" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            {/* Right Eyebrow */}
            <path d="M 61 45.2 C 59 43.5 56 43.5 53.5 45" stroke="#121215" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            
            {/* Left Eye */}
            <circle cx="43" cy="48.5" r="1.5" fill="#121215" />
            <circle cx="43.5" cy="48" r="0.40" fill="#ffffff" /> {/* Eye reflection */}
            {/* Right Eye */}
            <circle cx="57" cy="48.5" r="1.5" fill="#121215" />
            <circle cx="57.5" cy="48" r="0.40" fill="#ffffff" /> {/* Eye reflection */}

            {/* Professional nose contour */}
            <path d="M 50 48 L 48.5 52 L 51.5 52" stroke="#a2654a" strokeWidth="0.8" strokeLinecap="round" fill="none" />

            {/* Confident smiling mouth to match friendly photo expression */}
            <path d="M 46.5 54.5 Q 50 57.5 53.5 54.5" stroke="#7f1d1d" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            
            {/* Authentic side cheeks blush dots */}
            <circle cx="39" cy="53" r="1.2" fill="#e11d48" opacity="0.18" />
            <circle cx="61" cy="53" r="1.2" fill="#e11d48" opacity="0.18" />

            {/* 3. Signature crossed arms posture from photo (integrated beautifully into layout) */}
            {!isSmall && (
              <g className="opacity-100">
                {/* Arm cuffs matching the navy shirt with folding crease highlights */}
                {/* Right Arm sleeve folded across */}
                <path 
                  d="M 21.5 84 C 28 89 42 90 48 90 L 46 95 C 40 95 28 94 21.5 89 Z" 
                  fill="#1b2a47" 
                  stroke="rgba(255, 255, 255, 0.08)" 
                  strokeWidth="0.5" 
                />
                
                {/* Left Arm sleeve folded across overlying */}
                <path 
                  d="M 78.5 84 C 72 89 58 90 52 90 L 54 95 C 60 95 72 94 78.5 89 Z" 
                  fill="#1b2a47" 
                  stroke="rgba(255, 255, 255, 0.08)" 
                  strokeWidth="0.5" 
                />
                
                {/* Horizontal folded forearms skin and wrist elements */}
                <rect x="42" y="87" width="16" height="5" rx="2.5" fill="#ca8d6d" stroke="#a2654a" strokeWidth="0.5" />
                
                {/* Signature Metallic watch visible on his right wrist (photo detail) */}
                <rect x="38" y="87.5" width="4" height="4.5" rx="1" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
                <rect x="39" y="88.5" width="2" height="2.5" fill="#1e293b" />
                
                {/* Signature Red thread/ bracelet on his left wrist near arm overlay (photo detail) */}
                <rect x="58" y="88.5" width="3" height="1.5" rx="0.5" fill="#e11d48" />
              </g>
            )}

            {/* For small icon sizes/navigation bar, we keep details light so it renders cleanly */}
            {isSmall && (
              <g className="opacity-90">
                {/* Flat crossed forearm silhouette simplified to keep icon highly legible */}
                <path d="M 33 88 L 67 88 L 64 96 L 36 96 Z" fill="#1b2a47" />
              </g>
            )}
          </motion.g>

          {/* Color Gradients definitions */}
          <defs>
            {/* Glowing laptop reflection gradient to capture creative developers' workspace */}
            <linearGradient id="lightBeamGrad" x1="50" y1="80" x2="50" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.45)" />   {/* Blue shine */}
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0)" />   {/* Fades to transparent purple */}
            </linearGradient>
          </defs>
        </svg>

        {/* Ambient Orbiting Coder Accessories */}
        {!isSmall && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Tech tag floating */}
            <motion.div 
              animate={{ y: [-10, 10, -10], rotate: [2, -2, 2] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute top-4 left-[-16px] text-[8px] bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-mono px-2 py-0.5 rounded shadow-lg flex items-center gap-1 backdrop-blur-sm"
            >
              <Code className="w-2.5 h-2.5" />
              <span>Go/Cosmos</span>
            </motion.div>

            {/* Tech tag 2 floating */}
            <motion.div 
              animate={{ y: [10, -10, 10], rotate: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 right-[-16px] text-[8px] bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono px-2 py-0.5 rounded shadow-lg flex items-center gap-1 backdrop-blur-sm"
            >
              <Laptop className="w-2.5 h-2.5" />
              <span>MoE SDE</span>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
