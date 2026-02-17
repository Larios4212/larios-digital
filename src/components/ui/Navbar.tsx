import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { WHATSAPP_URL } from '@/utils/constants';

const navLinks = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#06080f]/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {l.label}
              </a>
            ))}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5">
              Cotizar <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-[#06080f]/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="space-y-2">
              {navLinks.map(l => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-slate-300 hover:text-white transition-colors border-b border-white/[0.06]"
                >
                  {l.label}
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                className="btn-primary w-full text-center mt-6">
                Cotizar por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
