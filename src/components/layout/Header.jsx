import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3 md:py-4' : 'bg-white/80 backdrop-blur-md border-b border-white/20 py-2 md:py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group relative z-10">
          <motion.img 
            src="/psr_logo.png" 
            alt="PSR Memorial Foundation" 
            className={`object-contain transition-all duration-300 drop-shadow-sm ${
              isScrolled ? 'h-16 md:h-20 w-auto' : 'h-24 md:h-28 w-auto -mt-2 md:-mt-4'
            }`}
          />
        </a>

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-10 flex-1">
          {['About', 'Programs', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-heading font-bold text-[13px] tracking-wide text-primary/80 hover:text-secondary uppercase transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center justify-end z-10">
          <a href="#donate">
            <Button variant="accent" size="sm" className="bg-secondary hover:bg-amber-500 border-none text-primary font-bold shadow-md shadow-secondary/20">
              Donate Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary hover:text-secondary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-4 gap-4">
          {['About', 'Programs', 'Gallery', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-primary font-heading font-semibold text-lg hover:text-secondary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#donate" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
            <Button variant="accent" className="w-full bg-secondary hover:bg-amber-500 border-none text-primary font-bold">
              Donate Now
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
