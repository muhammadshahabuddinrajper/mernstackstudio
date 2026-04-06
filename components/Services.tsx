'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'MERN Product Systems',
    description: 'From SaaS MVPs to viable product ecosystems — digital products that scale without compromise. Built natively on robust, high-availability architecture.',
    image: '/screens/mern-product.png',
    accent: 'bg-neon-blue',
  },
  {
    title: 'UI/UX Strategy',
    description: 'Interfaces designed to feel effortless and relentlessly clear. We craft interactive experiences that command attention and drive conversion.',
    image: '/screens/uiux-strategy.png',
    accent: 'bg-neon-purple',
  },
  {
    title: 'E-commerce Growth',
    description: 'High-conversion storefronts engineered for speed. Seamless integrations, headless commerce, and cinematic product storytelling.',
    image: '/screens/ecommerce.png',
    accent: 'bg-[#FDCB74]', // amber
  },
  {
    title: 'SaaS Launch Engine',
    description: 'Lean product systems built for enterprise launches. Real-time data, complex dashboards, and scalable infrastructure.',
    image: '/screens/saas-launch.png',
    accent: 'bg-neon-cyan',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup the cinematic reveal for each scene
      const scenes = gsap.utils.toArray<HTMLElement>('.service-scene');
      
      scenes.forEach((scene) => {
        const textElements = scene.querySelectorAll('.service-text-reveal');
        const visualContent = scene.querySelector('.service-visual');
        const device = scene.querySelector('.device-mockup');
        const screenImage = scene.querySelector('.screen-image');
        const line = scene.querySelector('.service-line');

        // Text reveal (staggered fade up)
        gsap.fromTo(textElements, 
          { autoAlpha: 0, y: 50 },
          { 
            autoAlpha: 1, 
            y: 0, 
            duration: 1.2, 
            stagger: 0.15,
            ease: "power4.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 70%",
            }
          }
        );

        if (line) {
          gsap.fromTo(line,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.5, ease: "power4.inOut", transformOrigin: "left center", scrollTrigger: { trigger: scene, start: "top 70%" } }
          );
        }

        // Extreme 3D Device Reveal (Otherlife style)
        gsap.fromTo(visualContent,
          { autoAlpha: 0, y: 250, rotateX: 30, rotateY: -20, rotateZ: 5, scale: 0.8 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            duration: 1.8,
            ease: "expo.out",
            scrollTrigger: {
              trigger: scene,
              start: "top 80%",
            }
          }
        );

        // Slow cinematic float
        if (device) {
          gsap.to(device, {
            y: -30,
            rotateY: 2,
            rotateX: -2,
            duration: 5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: Math.random() * 2 
          });
        }

        // Intense Image Parallax
        if (screenImage) {
          gsap.to(screenImage, {
            yPercent: -20, // Pan the image inside the device
            ease: "none",
            scrollTrigger: {
              trigger: scene,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-ink py-32 md:py-48" id="services" ref={containerRef}>
      
      {/* Background ambient noise/gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,var(--ink)_100%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 sm:px-12 lg:px-20">
        
        {/* Cinematic Header */}
        <div className="mb-40 md:mb-64">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="mb-12 h-[2px] w-24 origin-left bg-neon-blue"
          />
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: "power4.out" }}
            className="font-display text-[12vw] leading-[0.85] font-black tracking-[-0.06em] text-white md:text-[8vw]"
          >
            Capabilities<br/>
            <span className="text-white/20">Deconstructed.</span>
          </motion.h2>
        </div>

        {/* Services Stack */}
        <div className="flex flex-col gap-40 md:gap-56">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={service.title} 
                className={`service-scene grid items-center gap-12 lg:grid-cols-12 lg:gap-8`}
              >
                
                {/* Text Content */}
                <div className={`relative z-20 ${isEven ? 'lg:col-span-5 lg:col-start-1' : 'lg:col-span-5 lg:col-start-8'}`}>
                  
                  <div className="service-text-reveal mb-8 flex items-center gap-6 text-sm font-black uppercase tracking-[0.3em] text-white/30">
                    <span>0{index + 1} // 05</span>
                    <div className="service-line h-[1px] w-12 bg-white/30"></div>
                  </div>
                  
                  <h3 className="service-text-reveal mb-8 font-display text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-6xl xl:text-7xl">
                    {service.title}
                  </h3>
                  
                  <p className="service-text-reveal !text-white/50 max-w-lg text-lg leading-[1.6] md:text-xl">
                    {service.description}
                  </p>
                  
                </div>

                {/* Visual Content (Floating Device) */}
                <div className={`service-visual relative aspect-[4/3] w-full ${isEven ? 'lg:col-span-7 lg:col-start-6' : 'lg:col-span-7 lg:col-start-1 lg:row-start-1'}`}>
                  
                  {/* Extreme Ambient Bloom - characteristic of high-end WebGL sites */}
                  <div className={`absolute top-1/2 left-1/2 -mt-10 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full ${service.accent} blur-[140px] opacity-20`} />
                  
                  <div className="relative h-full w-full" style={{ perspective: '2000px' }}>
                    
                    {/* The "Device" - Sleek, borderless glass slate */}
                    <div className="device-mockup group relative h-[110%] w-[110%] -left-[5%] -top-[5%] overflow-hidden rounded-[20px] bg-black/40 ring-1 ring-white/10 backdrop-blur-3xl shadow-[0_0_80px_rgba(0,0,0,0.8),_inset_0_1px_1px_rgba(255,255,255,0.2)] md:rounded-[40px]">
                      
                      {/* Image Mask */}
                      <div className="absolute inset-1 overflow-hidden rounded-[16px] bg-[#020202] md:rounded-[36px]">
                        <img 
                          src={service.image} 
                          alt={`${service.title} Interface`}
                          className="screen-image absolute inset-x-0 -top-[10%] w-full h-[120%] object-cover object-top opacity-80 mix-blend-screen transition-all duration-700 group-hover:opacity-100 group-hover:scale-105"
                          loading="lazy"
                        />
                        
                        {/* Film Grain / Noise Inner Overlay for cinematic realism */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%221.5%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]"></div>
                      </div>
                      
                      {/* Edge Reflection Highlight */}
                      <div className="pointer-events-none absolute inset-0 rounded-[20px] bg-gradient-to-tr from-white/0 via-white/5 to-white/20 md:rounded-[40px]"></div>

                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
