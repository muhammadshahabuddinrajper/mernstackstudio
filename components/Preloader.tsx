'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.random() * 12 + 3;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 400);
        setTimeout(() => setHidden(true), 1200);
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  if (hidden) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="preloader"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="preloader"
        >
          {/* Gradient orb backdrop */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-blue/10 blur-[120px] animate-glow-pulse" />

          {/* Brand name — letter by letter */}
          <div className="flex items-center gap-[2px] font-display text-3xl font-bold tracking-wide sm:text-5xl">
            {'MERNSTACKSTUDIO'.split('').map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: 'easeOut' }}
                className={i < 4 ? 'text-gradient' : 'text-white'}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="preloader-bar mt-10">
            <div
              className="preloader-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>

          {/* Percentage */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.3 }}
            className="mt-4 font-body text-xs tracking-[0.3em] text-white/40"
          >
            {Math.round(Math.min(progress, 100))}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
