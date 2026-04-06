'use client';

export default function Footer() {
  return (
    <footer className="relative bg-ink px-6 pb-8 pt-16 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-[1180px]">
        {/* Divider */}
        <div className="mb-12 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          {/* Brand */}
          <div>
            <p className="font-display text-xl font-bold tracking-[-0.02em]">
              <span className="text-gradient">MERN</span>
              <span className="text-white">STACKSTUDIO</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-7 text-white/30">
              Premium product design and MERN development for founders who want strategy, polish, and measurable growth.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-start gap-6 sm:items-end">
            <div className="flex flex-wrap gap-6 text-sm text-white/40">
              <a href="#services" data-cursor="pointer" className="transition-colors hover:text-neon-blue">Services</a>
              <a href="#work" data-cursor="pointer" className="transition-colors hover:text-neon-blue">Work</a>
              <a href="#about" data-cursor="pointer" className="transition-colors hover:text-neon-blue">About</a>
              <a href="#contact" data-cursor="pointer" className="transition-colors hover:text-neon-blue">Contact</a>
            </div>
            <p className="text-xs text-white/20">
              © {new Date().getFullYear()} MERNSTACKSTUDIO. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
