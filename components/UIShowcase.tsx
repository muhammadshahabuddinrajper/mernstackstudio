'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    id: 1, title: 'FinPulse Dashboard', tag: 'Fintech · SaaS',
    bg: 'from-[#0f1729] to-[#1a2040]', accent: '#5db2ff',
    preview: 'dashboard',
  },
  {
    id: 2, title: 'Lumé E-Commerce', tag: 'Luxury · D2C',
    bg: 'from-[#1a0f1f] to-[#2d1040]', accent: '#a855f7',
    preview: 'ecommerce',
  },
  {
    id: 3, title: 'PulseHealth App', tag: 'Health · Mobile',
    bg: 'from-[#0a1f1a] to-[#0d2e28]', accent: '#22d3ee',
    preview: 'health',
  },
  {
    id: 4, title: 'StellarCMS', tag: 'CMS · Web App',
    bg: 'from-[#1f1200] to-[#2d1f00]', accent: '#fdcb74',
    preview: 'cms',
  },
  {
    id: 5, title: 'TrackMind Analytics', tag: 'Analytics · B2B',
    bg: 'from-[#0d0f1f] to-[#15193a]', accent: '#818cf8',
    preview: 'analytics',
  },
  {
    id: 6, title: 'Wavify Music', tag: 'Audio · Consumer',
    bg: 'from-[#0f0a1f] to-[#1a0f2e]', accent: '#e879f9',
    preview: 'music',
  },
  {
    id: 7, title: 'NomadMap Travel', tag: 'Travel · Platform',
    bg: 'from-[#0a1a12] to-[#0f2418]', accent: '#34d399',
    preview: 'travel',
  },
  {
    id: 8, title: 'IronFit Trainer', tag: 'Fitness · Mobile',
    bg: 'from-[#1f0a0a] to-[#2e0f0f]', accent: '#f87171',
    preview: 'fitness',
  },
  {
    id: 9, title: 'Vaulted Banking', tag: 'Fintech · Security',
    bg: 'from-[#0a100f] to-[#0f1a18]', accent: '#2dd4bf',
    preview: 'banking',
  },
  {
    id: 10, title: 'PortfolioX Studio', tag: 'Creative · Agency',
    bg: 'from-[#1a1209] to-[#2d200f]', accent: '#fb923c',
    preview: 'portfolio',
  },
];

function CardPreview({ type, accent }: { type: string; accent: string }) {
  const bar = (w: string, op = '1') => (
    <div style={{ width: w, opacity: op, background: accent }} className="h-1.5 rounded-full" />
  );
  const dot = (color = accent) => (
    <div className="h-2 w-2 rounded-full flex-shrink-0" style={{ background: color }} />
  );
  const line = (w: string) => (
    <div style={{ width: w }} className="h-1.5 rounded-full bg-white/15" />
  );

  if (type === 'dashboard') return (
    <div className="p-3 space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">{dot()}{line('40%')}</div>
        <div className="rounded-md px-2 py-0.5 text-[7px] font-bold" style={{ background: accent + '30', color: accent }}>LIVE</div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {['38%','$12k','94%'].map((v, i) => (
          <div key={i} className="rounded-lg p-2 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-[10px] font-bold" style={{ color: accent }}>{v}</div>
            <div className="text-[6px] text-white/30 mt-0.5">metric</div>
          </div>
        ))}
      </div>
      <div className="space-y-1">
        {['85%','62%','90%'].map((w, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="text-[6px] text-white/30 w-6">0{i+1}</div>
            <div className="flex-1 h-1 rounded-full bg-white/10">
              <div className="h-full rounded-full" style={{ width: w, background: accent, opacity: 1 - i * 0.2 }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === 'ecommerce') return (
    <div className="p-3 space-y-2">
      <div className="aspect-video w-full rounded-lg flex items-center justify-center text-[8px] tracking-widest uppercase" style={{ background: accent + '15', color: accent }}>Product Image</div>
      <div className="space-y-1">
        <div className="text-[9px] font-bold text-white">Noir Collection</div>
        <div className="text-[8px] font-bold" style={{ color: accent }}>$349.00</div>
      </div>
      <div className="flex gap-1">
        {['XS','S','M','L'].map(s => (
          <div key={s} className="rounded px-1.5 py-0.5 text-[7px] border border-white/15 text-white/50">{s}</div>
        ))}
      </div>
      <div className="rounded-lg py-1.5 text-center text-[8px] font-bold" style={{ background: accent, color: '#050507' }}>Add to Cart</div>
    </div>
  );

  if (type === 'health') return (
    <div className="p-3 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full flex items-center justify-center text-[10px]" style={{ background: accent + '20', color: accent }}>❤</div>
        <div><div className="text-[8px] font-bold text-white">Heart Rate</div><div className="text-[10px] font-bold" style={{ color: accent }}>72 bpm</div></div>
      </div>
      <div className="flex gap-0.5 items-end h-10">
        {[6,8,5,9,7,10,8,6,9,7,8,10].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: `${h * 10}%`, background: accent, opacity: 0.4 + i * 0.05 }} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[['Steps','8,420'],['Calories','342 kcal']].map(([l,v]) => (
          <div key={l} className="rounded-lg p-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-[6px] text-white/30">{l}</div>
            <div className="text-[9px] font-bold text-white">{v}</div>
          </div>
        ))}
      </div>
    </div>
  );

  if (type === 'cms') return (
    <div className="p-3 space-y-2">
      <div className="flex gap-1.5 mb-2">
        {['Pages','Media','SEO'].map((t,i) => (
          <div key={t} className="rounded-md px-2 py-0.5 text-[7px]" style={i === 0 ? { background: accent, color: '#050507', fontWeight: 700 } : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.4)' }}>{t}</div>
        ))}
      </div>
      {['Homepage','About Us','Blog'].map((p,i) => (
        <div key={p} className="flex items-center justify-between rounded-lg px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="text-[8px] text-white/70">{p}</div>
          <div className="text-[7px] px-1.5 py-0.5 rounded-md" style={i === 0 ? { background: accent + '25', color: accent } : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.3)' }}>{i === 0 ? 'Live' : 'Draft'}</div>
        </div>
      ))}
    </div>
  );

  if (type === 'analytics') return (
    <div className="p-3 space-y-2">
      <div className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Traffic Overview</div>
      <div className="flex gap-0.5 items-end h-12">
        {[4,7,5,8,6,10,8,7,9,11,8,10].map((h,i) => (
          <div key={i} className="flex-1 rounded-t" style={{ height: `${h * 8}%`, background: `linear-gradient(to top, ${accent}, ${accent}44)` }} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1 text-center">
        {[['12.4K','Users'],['3.2K','Sessions'],['68%','Bounce']].map(([v,l]) => (
          <div key={l}><div className="text-[10px] font-bold" style={{ color: accent }}>{v}</div><div className="text-[6px] text-white/30">{l}</div></div>
        ))}
      </div>
    </div>
  );

  if (type === 'music') return (
    <div className="p-3 space-y-2.5">
      <div className="aspect-square w-16 mx-auto rounded-xl flex items-center justify-center text-2xl" style={{ background: accent + '20' }}>🎵</div>
      <div className="text-center">
        <div className="text-[9px] font-bold text-white">Midnight Bloom</div>
        <div className="text-[7px] text-white/40">Luna Ray · Wavify</div>
      </div>
      <div className="h-0.5 w-full rounded-full bg-white/10"><div className="h-full w-[45%] rounded-full" style={{ background: accent }} /></div>
      <div className="flex justify-center gap-4 text-[14px]">
        {['⏮','⏸','⏭'].map(i => <span key={i} className="cursor-pointer" style={i==='⏸'?{color:accent}:{color:'rgba(255,255,255,0.4)'}}>{i}</span>)}
      </div>
    </div>
  );

  if (type === 'travel') return (
    <div className="p-3 space-y-2">
      <div className="rounded-xl h-16 flex items-center justify-center text-[8px] tracking-widest uppercase font-bold" style={{ background: `linear-gradient(135deg, ${accent}22, ${accent}08)`, color: accent }}>🗺 Santorini, Greece</div>
      <div className="grid grid-cols-3 gap-1">
        {['5 Days','2 Guests','$1,240'].map((v,i) => (
          <div key={i} className="rounded-lg p-1.5 text-center" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="text-[8px] font-bold text-white">{v.split(' ')[0]}</div>
            <div className="text-[6px] text-white/30">{v.split(' ').slice(1).join(' ')}</div>
          </div>
        ))}
      </div>
      <div className="rounded-lg py-1.5 text-center text-[8px] font-bold" style={{ background: accent, color: '#050507' }}>Book Now →</div>
    </div>
  );

  if (type === 'fitness') return (
    <div className="p-3 space-y-2">
      <div className="flex justify-between items-center">
        <div className="text-[9px] font-bold text-white">Today's Workout</div>
        <div className="text-[7px] px-2 py-0.5 rounded-full font-bold" style={{ background: accent + '25', color: accent }}>ACTIVE</div>
      </div>
      {['Push-ups 3×15','Squats 4×12','Plank 60s'].map((ex,i) => (
        <div key={ex} className="flex items-center gap-2 rounded-lg px-2 py-1.5" style={{ background: 'rgba(255,255,255,0.05)' }}>
          <div className="h-4 w-4 rounded-full flex items-center justify-center text-[8px] font-bold" style={{ background: i < 2 ? accent : 'rgba(255,255,255,0.1)', color: i < 2 ? '#050507' : 'rgba(255,255,255,0.4)' }}>✓</div>
          <div className="text-[8px] text-white/70">{ex}</div>
        </div>
      ))}
    </div>
  );

  if (type === 'banking') return (
    <div className="p-3 space-y-2">
      <div className="rounded-xl p-3" style={{ background: `linear-gradient(135deg, ${accent}22, transparent)`, border: `1px solid ${accent}30` }}>
        <div className="text-[7px] text-white/40 uppercase tracking-widest">Balance</div>
        <div className="text-base font-black text-white mt-0.5">$24,831.50</div>
      </div>
      <div className="space-y-1.5">
        {[['Netflix','-$15.99'],['Salary','+$3,200'],['Rent','-$800']].map(([l,v]) => (
          <div key={l} className="flex justify-between items-center">
            <div className="text-[8px] text-white/60">{l}</div>
            <div className="text-[8px] font-bold" style={{ color: v.startsWith('+') ? accent : '#f87171' }}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );

  // portfolio
  return (
    <div className="p-3 space-y-2">
      <div className="grid grid-cols-2 gap-1.5">
        {['Branding','Motion','Web','3D'].map((t,i) => (
          <div key={t} className="rounded-xl aspect-square flex items-center justify-center text-[8px] font-bold" style={{ background: i === 0 ? accent + '25' : 'rgba(255,255,255,0.05)', color: i === 0 ? accent : 'rgba(255,255,255,0.4)', border: i === 0 ? `1px solid ${accent}40` : '1px solid rgba(255,255,255,0.08)' }}>{t}</div>
        ))}
      </div>
      <div className="text-[7px] text-white/30 text-center">12 Projects · 8 Clients</div>
    </div>
  );
}

export default function UIShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<number>(0);
  const offsetRef = useRef(0);
  const [activeIdx, setActiveIdx] = useState(0);
  const cardW = 280;
  const gap   = 24;
  const step  = cardW + gap;
  const total = cards.length;
  const speed = 0.85;

  // Infinite auto-scroll
  useEffect(() => {
    const totalWidth = total * step;
    const tick = () => {
      offsetRef.current += speed;
      if (offsetRef.current >= totalWidth) offsetRef.current -= totalWidth;
      if (trackRef.current) trackRef.current.style.transform = `translateX(-${offsetRef.current}px)`;
      const center = offsetRef.current + (typeof window !== 'undefined' ? window.innerWidth / 2 : 700);
      const idx = Math.round(center / step) % total;
      setActiveIdx((idx + total) % total);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [total, step]);

  // 3D tilt on hover
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>, cardEl: HTMLDivElement) => {
    const rect = cardEl.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top  + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width  / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    cardEl.style.transform = `perspective(900px) rotateY(${dx * 12}deg) rotateX(${-dy * 8}deg) scale(1.06)`;
  }, []);

  const handleMouseLeave = useCallback((cardEl: HTMLDivElement) => {
    cardEl.style.transform = '';
  }, []);

  const doubled = [...cards, ...cards, ...cards];

  return (
    <section id="showcase" className="relative overflow-hidden bg-ink py-32 md:py-40">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-neon-blue/5 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-neon-purple/5 blur-[100px]" />
      </div>

      {/* Header */}
      <div className="relative z-10 mx-auto mb-16 max-w-[1200px] px-6 sm:px-12">
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 1, ease: 'circOut' }}
          className="mb-8 h-[2px] w-16 origin-left bg-neon-blue"
        />
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 }}
          className="font-display text-4xl font-black tracking-[-0.05em] text-white md:text-6xl"
        >
          UI Concepts
          <span className="text-white/20"> Reimagined.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 max-w-md text-base text-white/40 md:text-lg"
        >
          10 distinct product interfaces. Each crafted with intent.
        </motion.p>
      </div>

      {/* Carousel — overflow-x clips sides, overflow-y visible so scaled center card isn't cut */}
      <div
        className="relative"
        style={{
          overflowX: 'clip',
          overflowY: 'visible',
          paddingTop: '60px',
          paddingBottom: '60px',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div ref={trackRef} className="flex" style={{ width: `${doubled.length * step}px`, gap: `${gap}px`, willChange: 'transform', alignItems: 'center' }}>
          {doubled.map((card, i) => {
            const realIdx = i % total;
            const isCenter = realIdx === activeIdx;
            const isSide = Math.abs(((realIdx - activeIdx + total) % total)) === 1 ||
                           Math.abs(((activeIdx - realIdx + total) % total)) === 1;
            const scale = isCenter ? 1.1 : isSide ? 0.92 : 0.82;
            const opacity = isCenter ? 1 : isSide ? 0.7 : 0.45;
            return (
              <div
                key={`${card.id}-${i}`}
                onMouseMove={e => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={e => handleMouseLeave(e.currentTarget)}
                className="tilt-card flex-shrink-0 rounded-2xl overflow-hidden relative"
                style={{
                  width: `${cardW}px`,
                  height: '340px',
                  background: card.preview === 'dashboard' ? 'linear-gradient(135deg, #0f1729, #1a2040)'
                    : card.preview === 'ecommerce' ? 'linear-gradient(135deg, #1a0f1f, #2d1040)'
                    : card.preview === 'health'    ? 'linear-gradient(135deg, #0a1f1a, #0d2e28)'
                    : card.preview === 'cms'       ? 'linear-gradient(135deg, #1f1200, #2d1f00)'
                    : card.preview === 'analytics' ? 'linear-gradient(135deg, #0d0f1f, #15193a)'
                    : card.preview === 'music'     ? 'linear-gradient(135deg, #0f0a1f, #1a0f2e)'
                    : card.preview === 'travel'    ? 'linear-gradient(135deg, #0a1a12, #0f2418)'
                    : card.preview === 'fitness'   ? 'linear-gradient(135deg, #1f0a0a, #2e0f0f)'
                    : card.preview === 'banking'   ? 'linear-gradient(135deg, #0a100f, #0f1a18)'
                    :                               'linear-gradient(135deg, #1a1209, #2d200f)',
                  border: isCenter ? `1px solid ${card.accent}55` : '1px solid rgba(255,255,255,0.07)',
                  transform: `scale(${scale})`,
                  opacity,
                  boxShadow: isCenter
                    ? `0 0 70px ${card.accent}35, 0 30px 90px rgba(0,0,0,0.6)`
                    : '0 8px 30px rgba(0,0,0,0.3)',
                  transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease',
                  zIndex: isCenter ? 10 : isSide ? 5 : 1,
                }}
              >
                {/* Card header */}
                <div className="px-4 pt-4 pb-2 flex items-start justify-between">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] font-medium" style={{ color: card.accent }}>{card.tag}</div>
                    <div className="mt-1 text-sm font-bold text-white leading-tight">{card.title}</div>
                  </div>
                  <div className="h-2 w-2 rounded-full animate-pulse mt-1" style={{ background: card.accent }} />
                </div>

                {/* Card preview */}
                <div className="mx-3 rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.35)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <CardPreview type={card.preview} accent={card.accent} />
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <div className="text-[8px] text-white/25 uppercase tracking-widest">MERNSTACKSTUDIO</div>
                  <div className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: card.accent + '20', color: card.accent }}>Design</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
