'use client';

import { motion } from 'framer-motion';
import { caseStudies } from '@/data/caseStudies';

export default function WorkShowcase() {
  return (
    <section className="relative overflow-hidden bg-ink section-cinematic" id="work">
      {/* Background glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-neon-purple/5 blur-[160px]" />

      <div className="mx-auto max-w-[1180px]">
        {/* Section header */}
        <div className="mb-20 max-w-3xl gsap-fade">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.35em] text-white/50"
          >
            Featured work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
          >
            Case studies built to feel like{' '}
            <span className="text-gradient">real premium launches</span>.
          </motion.h2>
        </div>

        {/* Project cards */}
        <div className="space-y-8">
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-cursor="pointer"
              className="group relative overflow-hidden rounded-[32px] border border-white/8 bg-surface-elevated/80 backdrop-blur-sm transition-all duration-500 hover:border-white/15 hover:shadow-glow-lg"
            >
              {/* Gradient background unique per project */}
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />

              <div className="relative grid gap-8 p-8 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
                {/* Left — Main content */}
                <div>
                  {/* Meta row */}
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/40">
                      {project.industry}
                    </span>
                    <span
                      className="rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.3em]"
                      style={{
                        backgroundColor: `${project.accentColor}15`,
                        color: project.accentColor,
                        border: `1px solid ${project.accentColor}30`,
                      }}
                    >
                      {project.visualConcept.split('—')[0].trim()}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {project.name}
                  </h3>

                  {/* Visual concept */}
                  <p className="mt-3 text-sm italic text-white/30">
                    {project.visualConcept}
                  </p>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[11px] tracking-wide text-white/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right — Problem / Solution / Outcome */}
                <div className="space-y-6 text-sm leading-7">
                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Problem
                    </span>
                    <p className="text-white/50">{project.problem}</p>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-[0.3em] text-white/30">
                      Solution
                    </span>
                    <p className="text-white/50">{project.solution}</p>
                  </div>
                  <div>
                    <span className="mb-1.5 block text-[10px] uppercase tracking-[0.3em]" style={{ color: project.accentColor }}>
                      Outcome
                    </span>
                    <p className="font-semibold text-white/70">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Bottom hover glow line */}
              <div
                className="h-[2px] w-full origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
                style={{ background: `linear-gradient(90deg, ${project.accentColor}, transparent)` }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
