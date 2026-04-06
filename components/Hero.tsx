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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.85]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, -120]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink pt-32"
    >
      <ParticleCanvas />

      {/* Radial vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[at_50%_50%] from-transparent to-ink/60" />

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 w-full px-6 text-center lg:px-12"
      >
        <div className="mb-8 overflow-hidden">
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-sm font-bold uppercase tracking-[0.4em] text-neon-blue"
          >
            MERNSTACKSTUDIO
          </motion.p>
        </div>

        <h1 className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-4 gap-y-2 font-display text-5xl font-black leading-[0.9] tracking-[-0.03em] sm:text-7xl md:gap-x-6 lg:text-8xl xl:text-[9rem]">
          {headlineWords.map((word, i) => (
            <div key={i} className="overflow-hidden pb-4">
              <motion.span
                initial={{ y: 120, rotateZ: 5 }}
                animate={{ y: 0, rotateZ: 0 }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`inline-block ${
                  word === 'gravity.' ? 'text-transparent' : 'text-white'
                }`}
                style={
                  word === 'gravity.'
                    ? { WebkitTextStroke: '1.5px rgba(255,255,255,0.4)' }
                    : {}
                }
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "circOut" }}
          className="mx-auto mt-12 max-w-lg text-lg leading-[1.6] text-white/50 md:text-xl"
        >
          Cinematic engineering for ambitious brands. Strategy, design, and
          performance that earns trust from the first scroll.
        </motion.p>
      </motion.div>
    </section>
  );
}
