'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Características', href: '#caracteristicas' },
  { name: 'Beneficios', href: '#beneficios' },
  { name: 'Testimonios', href: '#testimonios' },
];

export function Header() {
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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-midnight-navy/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="D'Pary"
              width={120}
              height={40}
              className="h-10 w-auto object-contain dark:hidden"
              style={{
                filter: 'brightness(0) saturate(100%) invert(10%) sepia(100%) saturate(5000%) hue-rotate(220deg)',
              }}
              priority
            />
            <Image
              src="/logo.svg"
              alt="D'Pary"
              width={120}
              height={40}
              className="h-10 w-auto object-contain hidden dark:block"
              style={{
                filter: 'brightness(0) saturate(100%) invert(76%) sepia(50%) saturate(500%) hue-rotate(5deg) brightness(95%)',
              }}
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="text-neutral-gray dark:text-silver-mist hover:text-navy-primary dark:hover:text-rich-gold transition-colors font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="primary" size="sm">
              Descargar App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-navy-primary dark:text-rich-gold"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-midnight-navy border-t border-cream-beige dark:border-soft-charcoal"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-neutral-gray dark:text-silver-mist hover:text-navy-primary dark:hover:text-rich-gold transition-colors font-medium"
                >
                  {link.name}
                </a>
              ))}
              <Button variant="primary" size="md" className="w-full">
                Descargar App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
