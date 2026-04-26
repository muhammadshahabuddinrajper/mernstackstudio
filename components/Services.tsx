'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const services = [
  {
    title: 'MERN Product Systems',
    description: 'From SaaS MVPs to viable product ecosystems — digital products that scale without compromise. Built natively on robust, high-availability architecture.',
    image: '/services/mern.png',
    accent: '#5db2ff',
    accentBg: 'rgba(93,178,255,0.1)',
  },
  {
    title: 'UI/UX Strategy',
    description: 'Interfaces designed to feel effortless and relentlessly clear. We craft interactive experiences that command attention and drive conversion.',
    image: '/services/uiux.png',
    accent: '#a855f7',
    accentBg: 'rgba(168,85,247,0.1)',
  },
  {
    title: 'E-commerce Growth',
    description: 'High-conversion storefronts engineered for speed. Seamless integrations, headless commerce, and cinematic product storytelling.',
    image: '/services/ecom.png',
    accent: '#fdcb74',
    accentBg: 'rgba(253,203,116,0.1)',
  },
  {
    title: 'SaaS Launch Engine',
    description: 'Lean product systems built for enterprise launches. Real-time data, complex dashboards, and scalable infrastructure.',
    image: '/services/saas.png',
    accent: '#22d3ee',
    accentBg: 'rgba(34,211,238,0.1)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Services() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative bg-[#050507] py-24 md:py-40 overflow-hidden" id="services">
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-20">
        <div className="w-[800px] h-[800px] bg-neon-blue rounded-full blur-[150px] opacity-20 transform -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-12 lg:px-20">
        <div className="mb-20 md:mb-28 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: 60 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1 bg-neon-blue mb-8 rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tight leading-[1.1]"
          >
            Digital capabilities <br />
            <span className="text-white/30">engineered for scale.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            const isOtherHovered = hoveredIdx !== null && hoveredIdx !== idx;

            return (
              <motion.div
                variants={cardVariants}
                key={service.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative h-full flex flex-col overflow-hidden rounded-[32px] cursor-pointer transition-all duration-500 ease-out"
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(20px)',
                  opacity: isOtherHovered ? 0.4 : 1,
                  transform: isHovered ? 'scale(1.02) translateY(-8px)' : 'scale(1) translateY(0)',
                  boxShadow: isHovered 
                    ? "0 40px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 40px " + service.accentBg
                    : 'inset 0 1px 0 rgba(255,255,255,0.02)',
                }}
              >
                {/* Image Section */}
                <div className="relative w-full h-[240px] sm:h-[300px] overflow-hidden rounded-t-[32px]">
                  <motion.div
                    animate={{ scale: isHovered ? 1.08 : 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  {/* Overlay to blend image with card background */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/40 to-transparent" />
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay"
                    style={{ background: "radial-gradient(circle at center, " + service.accentBg + ", transparent 70%)" }}
                  />
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col flex-grow p-8 md:p-10 -mt-12">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed text-base md:text-lg mb-10 flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-auto">
                    <a 
                      href="#contact" 
                      className="inline-flex items-center gap-3 text-sm font-bold tracking-wide uppercase transition-all duration-300"
                      style={{ color: isHovered ? service.accent : 'rgba(255,255,255,0.5)' }}
                    >
                      <span>Get Started</span>
                      <div 
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                        style={{ 
                          background: isHovered ? service.accent : 'rgba(255,255,255,0.05)',
                          color: isHovered ? '#050507' : 'inherit',
                          transform: isHovered ? 'translateX(8px)' : 'translateX(0)'
                        }}
                      >
                        <ArrowRight size={18} strokeWidth={2.5} />
                      </div>
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
