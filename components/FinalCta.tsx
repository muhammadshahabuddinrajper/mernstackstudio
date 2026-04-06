'use client';

import { motion } from 'framer-motion';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink section-cinematic" id="contact">
      {/* Aurora gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon-purple/15 blur-[140px] animate-aurora" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-neon-blue/15 blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-neon-cyan/8 blur-[100px] animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="relative mx-auto max-w-[900px] text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
        >
          Ready to start?
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
        >
          Your next product deserves to feel{' '}
          <span className="text-gradient">extraordinary</span>.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/40"
        >
          Fast replies, expert strategy, and delivery that keeps it premium without slowing your timeline.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="mailto:hello@mernstackstudio.com"
            data-cursor="pointer"
            className="magnetic-btn group relative inline-flex items-center justify-center rounded-full bg-neon-blue px-10 py-5 text-base font-semibold text-ink shadow-glow transition-all hover:shadow-glow-lg"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start the conversation
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Bottom glow ring */}
        <div className="mx-auto mt-20 h-[1px] w-48 bg-gradient-to-r from-transparent via-neon-blue/40 to-transparent" />
      </div>
    </section>
  );
}
