import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Leadership', path: '/leadership' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-[0_4px_25px_rgba(7,26,65,0.06)] py-3'
            : 'bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo - Using the uploaded Aptaic circular logo directly */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
              aria-label="APTAIC - Think Digital. Think APTAIC."
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-40 blur transition-opacity duration-300" />
                <img
                  src={COMPANY_INFO.logoUrl}
                  alt="APTAIC Logo"
                  className="relative h-10 sm:h-12 w-10 sm:w-12 rounded-full object-contain shadow-sm border border-gray-100 bg-white group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider text-[#071A41] leading-none group-hover:text-blue-600 transition-colors">
                  APTAIC
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-gray-500 tracking-tight mt-0.5">
                  Think Digital. Think APTAIC.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      active
                        ? 'text-blue-600 font-bold bg-blue-50/80'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${COMPANY_INFO.phones.primary}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-blue-600 transition-colors"
                title="Direct Phone Support"
              >
                <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>{COMPANY_INFO.phones.primary}</span>
              </a>

              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn-primary px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 group cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenContactModal}
                className="btn-primary px-3 py-1.5 rounded-lg text-xs font-bold"
              >
                Get Started
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-panel border-b border-gray-200/80 px-4 pt-4 pb-6 mt-2 animate-in slide-in-from-top-4 duration-250 shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                      active
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-gray-800 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Shortcuts */}
            <div className="mt-5 pt-4 border-t border-gray-200/60 space-y-3">
              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>Call Us Direct:</span>
                <div className="flex gap-2">
                  <a
                    href={`tel:${COMPANY_INFO.phones.primary}`}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    {COMPANY_INFO.phones.primary}
                  </a>
                  <span>/</span>
                  <a
                    href={`tel:${COMPANY_INFO.phones.alternate}`}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    {COMPANY_INFO.phones.alternate}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full py-3 rounded-xl btn-primary text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-cyan-300" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
