import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { handleDonateClick } from '../../utils/payment';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const menuRef = useRef(null);
  
  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Programs', id: 'programs' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact Us', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll Spy Logic
      const current = navItems.find(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current.id);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle smooth scrolling to section
  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-md py-3 md:py-4' : 'bg-white/80 backdrop-blur-md border-b border-white/20 py-2 md:py-3'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group relative z-10" onClick={(e) => handleNavClick(e, 'home')}>
          <motion.img 
            src="/psr_logo.png" 
            alt="PSR Memorial Foundation" 
            className={`object-contain transition-all duration-300 drop-shadow-sm ${
              isScrolled ? 'h-16 md:h-20 w-auto' : 'h-24 md:h-28 w-auto -mt-2 md:-mt-4'
            }`}
          />
        </a>

        {/* Centered Desktop Nav */}
        <nav className="hidden md:flex items-center justify-center gap-10 flex-1" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`font-heading font-bold text-sm tracking-wide uppercase transition-colors relative group ${
                  isActive ? 'text-secondary' : 'text-primary/80 hover:text-secondary'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center justify-end z-10">
          <a href="#donate" onClick={handleDonateClick}>
            <Button variant="accent" size="sm" className="bg-secondary hover:bg-amber-500 border-none text-primary font-bold shadow-md shadow-secondary/20">
              Donate Now
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary hover:text-secondary transition-colors z-20 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay & Content */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-black/10 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Dropdown Menu */}
            <motion.div 
              ref={menuRef}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 flex flex-col py-4 px-4 gap-4 z-50"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`font-heading font-semibold text-lg transition-colors ${
                      isActive ? 'text-secondary' : 'text-primary hover:text-secondary'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a href="#donate" onClick={(e) => { setIsMobileMenuOpen(false); handleDonateClick(e); }} className="mt-4">
                <Button variant="accent" className="w-full bg-secondary hover:bg-amber-500 border-none text-primary font-bold shadow-md">
                  Donate Now
                </Button>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
