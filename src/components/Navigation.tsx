import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollTo('hero')}
            className="group relative flex items-center space-x-2"
          >
            {/* Logo Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Icon Container */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-slate-900 p-2 rounded-full border border-cyan-500/50 transform group-hover:scale-110 transition-transform duration-300">
                <BrainCircuit className="w-5 h-5 text-cyan-400 animate-pulse" />
              </div>
            </div>
            
            {/* Text Container */}
            <div className="relative">
              <span className="text-2xl font-logo text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                Rabih Rizk
              </span>
              
              {/* Animated Underline */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Tools', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="relative group text-gray-300 hover:text-white transition-colors"
              >
                <span>{item}</span>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden relative group p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative text-white">
              {isMenuOpen ? <X /> : <Menu />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4 px-4">
              {['About', 'Tools', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="relative group text-left text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span>{item}</span>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}