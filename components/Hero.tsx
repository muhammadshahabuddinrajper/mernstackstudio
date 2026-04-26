'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const headlineWords = ['We', 'build', 'digital', 'experiences', 'that', 'defy', 'gravity.'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale  = useTransform(scrollYProgress, [0, 0.7], [1, 0.88]);
  const heroY      = useTransform(scrollYProgress, [0, 0.7], [0, -100]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-28"
    >
      <ParticleCanvas />

      {/* Floating 3D ambient shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Large orb top-left */}
        <div
          className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(93,178,255,0.3) 0%, transparent 70%)',
            animation: 'float-device 8s ease-in-out infinite',
          }}
        />
        {/* Purple orb bottom-right */}
        <div
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
            animation: 'float-mobile 10s ease-in-out infinite',
          }}
        />
        {/* Floating geometric cube top-right */}
        <motion.div
          animate={{ y: [-12, 12, -12], rotateZ: [0, 10, 0], rotateX: [0, 15, 0] }}
          transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          className="absolute right-[12%] top-[15%] h-20 w-20 rounded-2xl border border-neon-blue/20 bg-neon-blue/5 backdrop-blur-sm"
          style={{ transform: 'perspective(600px) rotateX(20deg) rotateY(-15deg)' }}
        />
        {/* Floating ring bottom-left */}
        <motion.div
          animate={{ y: [8, -8, 8], rotateZ: [0, -8, 0] }}
          transition={{ duration: 9, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] left-[8%] h-16 w-16 rounded-full border-2 border-neon-purple/25"
        />
        {/* Small neon dot mid-right */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 4, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
          className="absolute right-[20%] top-[50%] h-3 w-3 rounded-full bg-neon-cyan"
        />
        {/* Grid dots decoration */}
        <div className="absolute left-0 top-0 h-full w-full opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Radial vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_40%,rgba(5,5,7,0.7)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 w-full px-6 text-center lg:px-12"
      >
        {/* Eyebrow */}
        <div className="mb-8 overflow-hidden">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-xs font-bold uppercase tracking-[0.45em] text-neon-blue sm:text-sm"
          >
            ✦ &nbsp;MERNSTACKSTUDIO &nbsp;✦
          </motion.p>
        </div>

        {/* Headline — word by word */}
        <h1 className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-4 gap-y-1 font-display text-5xl font-black leading-[0.88] tracking-[-0.03em] sm:text-7xl md:gap-x-6 lg:text-8xl xl:text-[8.5rem]">
          {headlineWords.map((word, i) => (
            <div key={i} className="overflow-hidden pb-3">
              <motion.span
                initial={{ y: 130, rotateZ: 6, opacity: 0 }}
                animate={{ y: 0, rotateZ: 0, opacity: 1 }}
                transition={{
                  duration: 1.1,
                  delay: 0.1 + i * 0.09,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  word === 'gravity.'
                    ? 'text-transparent'
                    : word === 'digital' || word === 'experiences'
                    ? 'text-gradient'
                    : 'text-white'
                }`}
                style={
                  word === 'gravity.'
                    ? { WebkitTextStroke: '1.5px rgba(255,255,255,0.35)' }
                    : {}
                }
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 1.0, ease: 'circOut' }}
          className="mx-auto mt-10 max-w-lg text-lg leading-[1.65] text-white/45 md:text-xl"
        >
          Cinematic engineering for ambitious brands. Strategy, design, and
          performance that earns trust from the first scroll.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            data-cursor="pointer"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-neon-blue px-8 py-4 text-sm font-bold text-ink transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(93,178,255,0.5)] sm:text-base animate-glow-pulse"
          >
            <span className="relative z-10">Start a Project</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            {/* Shimmer on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#showcase"
            data-cursor="pointer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-neon-blue/40 hover:bg-neon-blue/8 hover:text-white hover:scale-105 sm:text-base"
          >
            View Our Work
            <svg
              className="h-4 w-4 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/25">Scroll</span>
          <div className="h-8 w-[1px] overflow-hidden bg-white/10">
            <div className="h-full w-full animate-[scroll_2s_cubic-bezier(0.4,0,0.2,1)_infinite] bg-gradient-to-b from-transparent via-neon-blue to-transparent" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
