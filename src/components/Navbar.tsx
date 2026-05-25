import { motion } from 'motion/react';
import { Menu, X, Code, Terminal, Award, Briefcase, User, Home, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import AnimatedProfessionalAvatar from './AnimatedProfessionalAvatar';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

export default function Navbar({
  activeTab,
  setActiveTab,
  menuOpen,
  setMenuOpen
}: NavbarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Terminal },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <nav 
      id="portfolio-navbar"
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full glass-panel border-white/5 shadow-2xl">
        {/* Full Name Branded Logo */}
        <motion.div 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setActiveTab('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedProfessionalAvatar size="small" />
          <span className="font-sans font-bold text-sm tracking-wider uppercase text-white hidden sm:inline-block">
            {PERSONAL_INFO.name}
          </span>
        </motion.div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-colors duration-300 flex items-center space-x-1.5 cursor-pointer ${
                  isActive ? 'text-brand-cyan font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-white/5 rounded-full border border-brand-cyan/20 -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Action Button Links to Resume */}
        <div className="hidden sm:block">
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('contact');
            }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-1.5 rounded-full h-fit flex items-center justify-center text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-emerald cursor-pointer"
          >
            Hire Sushant
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-400 hover:text-white p-1 rounded-md cursor-pointer"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-4 right-4 bg-slate-950/95 backdrop-blur-xl border border-white/5 rounded-2xl py-4 px-6 flex flex-col space-y-3 z-40 md:hidden"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMenuOpen(false);
                }}
                className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium uppercase tracking-wider flex items-center space-x-3.5 transition-colors duration-200 cursor-pointer ${
                  isActive ? 'bg-gradient-to-r from-brand-cyan/15 to-transparent border-l-2 border-brand-cyan text-brand-cyan font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon className="w-4.5 h-4.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('contact');
              setMenuOpen(false);
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-2 py-3 rounded-xl flex items-center justify-center text-center text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-brand-cyan to-brand-purple cursor-pointer"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      )}
    </nav>
  );
}
