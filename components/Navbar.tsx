'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { label: 'Services',  href: '#services'  },
  { label: 'Showcase',  href: '#showcase'  },
  { label: 'About',     href: '#about'     },
  { label: 'Contact',   href: '#contact'   },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-500 sm:px-10 lg:px-14 ${
          scrolled
            ? 'bg-ink/75 shadow-lg shadow-black/30 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display text-lg font-bold tracking-[-0.02em] text-white sm:text-xl">
          <span className="text-gradient">MERN</span>STACKSTUDIO
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="pointer"
              className="group relative text-sm font-medium text-white/55 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden p-1"
          aria-label="Toggle menu"
        >
          <motion.span animate={mobileOpen ? { rotate: 45,  y: 6  } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-white" />
          <motion.span animate={mobileOpen ? { opacity: 0                                 } : { opacity: 1   }} className="block h-0.5 w-6 bg-white" />
          <motion.span animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 bg-white" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-x-0 top-16 z-40 flex flex-col gap-5 bg-ink/96 px-6 py-8 backdrop-blur-xl border-b border-white/5 md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-semibold text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
