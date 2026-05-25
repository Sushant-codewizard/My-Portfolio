import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface ThreeDBlockProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // e.g. 'rgba(34,211,238,0.15)'
  intensity?: number;
  key?: React.Key;
}

export default function ThreeDBlock({
  children,
  className = "",
  glowColor = "rgba(168,85,247,0.25)", // purple gradient by default
  intensity = 15
}: ThreeDBlockProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for x/y mouse rotation coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to avoid jerky movements
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { damping: 20, stiffness: 200 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Normalize coordinates to [-0.5, 0.5] range
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 select-none ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="w-full h-full rounded-2xl transition-all duration-300 preserve-3d"
      >
        {/* Glow Background Filter */}
        <div
          className="absolute -inset-0.5 rounded-2xl blur-xl opacity-0 transition-opacity duration-500 -z-10 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent)`,
            opacity: isHovered ? 0.7 : 0,
          }}
        />
        <div className="w-full h-full preserve-3d">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
