'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink section-cinematic" id="contact">
      {/* Aurora gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon-purple/12 blur-[140px] animate-aurora" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-neon-blue/12 blur-[120px] animate-aurora" style={{ animationDelay: '-5s' }} />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-neon-cyan/6 blur-[100px] animate-aurora" style={{ animationDelay: '-10s' }} />
      </div>

      <div className="relative mx-auto max-w-[900px] px-6 text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
        >
          ✦ &nbsp;Ready to start?
        </motion.span>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
        >
          Your next product deserves to feel{' '}
          <span className="text-gradient">extraordinary</span>.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/40 md:text-lg"
        >
          Fast replies, expert strategy, and delivery that keeps it premium without slowing your timeline.
        </motion.p>

        {/* Divider */}
        <div className="mx-auto my-14 h-px w-32 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Contact Form */}
        <ContactForm />

        {/* Bottom glow ring */}
        <div className="mx-auto mt-20 h-px w-48 bg-gradient-to-r from-transparent via-neon-blue/30 to-transparent" />
      </div>
    </section>
  );
}
