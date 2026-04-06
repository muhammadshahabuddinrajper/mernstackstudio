'use client';

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function MarqueeText({ text, speed = 30, className = '' }: MarqueeTextProps) {
  const items = Array(6).fill(text);

  return (
    <div className={`relative overflow-hidden border-y border-white/5 bg-ink py-6 ${className}`}>
      <div
        className="marquee-track"
        style={{ '--marquee-duration': `${speed}s` } as React.CSSProperties}
      >
        {items.map((t, i) => (
          <span
            key={i}
            className="mx-8 whitespace-nowrap font-display text-4xl font-bold uppercase tracking-[0.08em] text-white/[0.04] sm:text-5xl lg:text-7xl"
          >
            {t}
            <span className="mx-8 text-neon-blue/20">✦</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((t, i) => (
          <span
            key={`dup-${i}`}
            className="mx-8 whitespace-nowrap font-display text-4xl font-bold uppercase tracking-[0.08em] text-white/[0.04] sm:text-5xl lg:text-7xl"
          >
            {t}
            <span className="mx-8 text-neon-blue/20">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
