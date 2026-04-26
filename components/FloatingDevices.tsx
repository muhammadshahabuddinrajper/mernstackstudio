'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LaptopMockup() {
  return (
    <div className="relative w-full max-w-[480px]" style={{ filter: 'drop-shadow(0 40px 80px rgba(93,178,255,0.2))' }}>
      {/* Screen */}
      <div className="relative rounded-t-2xl overflow-hidden" style={{ background: '#0a0c14', border: '8px solid #1a1d2e', borderBottom: 'none', aspectRatio: '16/10' }}>
        {/* Top bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          {['#f87171','#fdcb74','#34d399'].map(c => <div key={c} className="h-2 w-2 rounded-full" style={{ background: c }} />)}
          <div className="mx-auto h-1.5 w-32 rounded-full bg-white/10" />
        </div>
        {/* App UI */}
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="h-2 w-24 rounded-full bg-neon-blue/60" />
            <div className="h-5 w-16 rounded-md bg-neon-blue/20 border border-neon-blue/30" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {['#5db2ff22','#a855f722','#22d3ee22'].map((bg,i) => (
              <div key={i} className="rounded-xl p-3 space-y-2" style={{ background: bg, border: `1px solid ${bg.slice(0,-2)}55` }}>
                <div className="h-1.5 w-8 rounded-full" style={{ background: bg.slice(0,-2) }} />
                <div className="text-lg font-black" style={{ color: bg.slice(0,-2) }}>{['$42k','98%','3.2x'][i]}</div>
                <div className="h-1 w-full rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: ['75%','92%','65%'][i], background: bg.slice(0,-2) }} /></div>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex gap-2 items-end h-20 px-4 pt-2 pb-3">
              {[6,9,5,11,7,13,9,11,8,14,10,12].map((h,i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h * 7}%`, background: `linear-gradient(to top, #5db2ff, #5db2ff44)`, opacity: 0.5 + i * 0.04 }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Hinge */}
      <div className="h-2 w-full rounded-b-sm" style={{ background: 'linear-gradient(to bottom, #1a1d2e, #0d0f18)' }} />
      {/* Base */}
      <div className="mx-auto h-2 w-[70%] rounded-b-xl" style={{ background: '#0d0f18' }} />
    </div>
  );
}

function MobileMockup() {
  return (
    <div className="relative w-[160px]" style={{ filter: 'drop-shadow(0 30px 60px rgba(168,85,247,0.25))' }}>
      <div className="rounded-[28px] overflow-hidden" style={{ background: '#0a0c14', border: '6px solid #1a1d2e', aspectRatio: '9/19' }}>
        {/* Notch */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="h-2 w-16 rounded-full bg-black" />
        </div>
        {/* Status */}
        <div className="flex justify-between px-3 mb-2">
          <div className="text-[6px] text-white/30">9:41</div>
          <div className="flex gap-1">
            {[3,2,3].map((h,i) => <div key={i} className="w-0.5 rounded-full bg-white/40" style={{ height: `${h * 2}px` }} />)}
          </div>
        </div>
        {/* App content */}
        <div className="px-2 space-y-2">
          <div className="rounded-xl p-2.5" style={{ background: 'linear-gradient(135deg, #a855f722, #5db2ff11)', border: '1px solid rgba(168,85,247,0.2)' }}>
            <div className="text-[7px] text-white/40">Portfolio Value</div>
            <div className="text-sm font-black text-white">$48,291</div>
            <div className="text-[7px] text-green-400">↑ +12.4%</div>
          </div>
          {[['BTC','$29,400','#fdcb74'],['ETH','$1,842','#818cf8'],['SOL','$98.5','#34d399']].map(([l,v,c]) => (
            <div key={l} className="flex items-center justify-between rounded-lg px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full" style={{ background: c + '44', border: `1px solid ${c}` }} />
                <div className="text-[7px] font-bold text-white">{l}</div>
              </div>
              <div className="text-[7px] font-bold" style={{ color: c }}>{v}</div>
            </div>
          ))}
          <div className="rounded-lg py-2 text-center text-[8px] font-bold" style={{ background: '#a855f7', color: '#050507' }}>Trade Now →</div>
        </div>
      </div>
    </div>
  );
}

export default function FloatingDevices() {
  const sectionRef = useRef<HTMLElement>(null);
  const laptopRef  = useRef<HTMLDivElement>(null);
  const mobileRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      gsap.fromTo(laptopRef.current,
        { y: 120, rotateX: 25, rotateY: -15, opacity: 0 },
        { y: 0, rotateX: 0, rotateY: 0, opacity: 1, duration: 1.8, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      gsap.fromTo(mobileRef.current,
        { y: 150, rotateX: 20, rotateY: 20, opacity: 0 },
        { y: 0, rotateX: 0, rotateY: 0, opacity: 1, duration: 1.8, delay: 0.2, ease: 'expo.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      );
      // Float loops
      gsap.to(laptopRef.current, { y: -18, rotateX: 3, rotateY: -2, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      gsap.to(mobileRef.current, { y: -22, rotateX: 2, rotateY: 4,  duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8 });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-ink py-32 md:py-48" id="devices">
      {/* Ambient bloom */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-neon-blue/6 blur-[160px]" />
        <div className="absolute right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-neon-purple/6 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 sm:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-neon-purple"
          >
            ✦ Live in Production
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-4xl font-black tracking-[-0.04em] text-white md:text-6xl"
          >
            Products that look<br />
            <span className="text-gradient">extraordinary</span> on every device.
          </motion.h2>
        </div>

        {/* Devices row */}
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-end md:justify-center md:gap-16" style={{ perspective: '1200px' }}>
          <div ref={laptopRef} className="device-laptop" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
            <LaptopMockup />
          </div>
          <div ref={mobileRef} className="device-mobile md:mb-8" style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}>
            <MobileMockup />
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[['50+','Products Shipped'],['98%','Client Retention'],['< 2s','Load Time'],['3x','Avg. ROI']].map(([v,l],i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:border-neon-blue/20 transition-all duration-300"
            >
              <div className="font-display text-3xl font-black text-gradient">{v}</div>
              <div className="mt-1.5 text-sm text-white/40">{l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
