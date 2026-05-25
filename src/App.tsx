import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Automatically scroll to the top when page changes (virtual pagination)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return <Hero onNavigate={setActiveTab} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setActiveTab} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-950 text-gray-100 flex flex-col font-sans select-none overflow-x-hidden antialiased">
      {/* Dynamic Grid Background overlay */}
      <div className="fixed inset-0 ambient-grid pointer-events-none opacity-40 z-0" />

      {/* Floating Header Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Main Content Router with Smooth Page Glide Animations */}
      <main className="flex-grow z-10 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full"
          >
            {renderActiveSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
