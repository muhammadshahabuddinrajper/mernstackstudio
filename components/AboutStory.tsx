'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const stats = [
  { value: '50+', label: 'Products Shipped' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Average ROI' },
];

const storyLines = [
  'We don\'t just ship features.',
  'We design premium product architecture',
  'for modern brands — then build it with',
  'clean MERN systems, motion-rich interfaces,',
  'and the kind of polish that creates trust',
  'from the very first interaction.',
];

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 40%'],
  });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-ink section-cinematic"
      id="about"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[160px]" />

      <div className="mx-auto max-w-[1180px]">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
        >
          Our story
        </motion.span>

        <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          {/* LEFT — Manifesto with line-by-line reveal */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
            >
              A product-first studio built for{' '}
              <span className="text-gradient">speed, quality</span> and high-end ambitions.
            </motion.h2>

            <div className="mt-12 space-y-1">
              {storyLines.map((line, i) => {
                const start = i / storyLines.length;
                const end = (i + 1) / storyLines.length;

                return (
                  <StoryLine
                    key={i}
                    line={line}
                    scrollYProgress={scrollYProgress}
                    start={start}
                    end={end}
                  />
                );
              })}
            </div>
          </div>

          {/* RIGHT — Stats */}
          <div className="space-y-6 lg:mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass group rounded-[24px] p-6 transition-all hover:border-neon-blue/20"
              >
                <p className="font-display text-4xl font-bold text-gradient sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-white/40">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Sub-component — animates opacity based on scroll position */
function StoryLine({
  line,
  scrollYProgress,
  start,
  end,
}: {
  line: string;
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
  start: number;
  end: number;
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 0.9]);

  return (
    <motion.p
      style={{ opacity }}
      className="text-xl leading-loose text-white sm:text-2xl lg:text-3xl"
    >
      {line}
    </motion.p>
  );
}
