import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'Produtos', target: 'products' },
    { label: 'Sobre', target: 'about' },
    { label: 'Contato', target: 'contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#000000]/80 backdrop-blur-md border-b border-white/[0.05] py-4'
            : 'bg-transparent py-6'
        }`}
        id="app-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo link / Home scroll */}
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo size={36} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleScrollTo(link.target)}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-emerald-600 hover:bg-emerald-500 rounded-md transition-all duration-200 shadow-sm border border-emerald-500/30 cursor-pointer"
            >
              Começar
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#000000] border-t border-white/[0.05] p-6 md:hidden flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4 mt-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleScrollTo(link.target)}
                  className="text-left py-3 text-lg font-medium text-slate-300 hover:text-white border-b border-white/[0.03] focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full py-3.5 text-center text-sm font-semibold tracking-wide uppercase text-white bg-emerald-600 rounded-md hover:bg-emerald-500 transition-colors"
            >
              Começar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
