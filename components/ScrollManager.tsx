'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollManager() {
  useEffect(() => {
    /* ─── Lenis smooth scroll ─── */
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.08,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 1.5,
      infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    /* ─── Reveal: fade + rise + blur ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-reveal').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 50, scale: 0.97, filter: 'blur(6px)' },
        {
          autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)',
          duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Fade (lighter) ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-fade').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1, y: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Slide from left ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-slide-left').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, x: -60 },
        {
          autoAlpha: 1, x: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Slide from right ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-slide-right').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, x: 60 },
        {
          autoAlpha: 1, x: 0, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Zoom in ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-zoom').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, scale: 0.88 },
        {
          autoAlpha: 1, scale: 1, duration: 1.0, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Depth (3D) ─── */
    gsap.utils.toArray<HTMLElement>('.gsap-depth').forEach((el) => {
      gsap.fromTo(el,
        { autoAlpha: 0, y: 60, rotateX: 10, scale: 0.95 },
        {
          autoAlpha: 1, y: 0, rotateX: 0, scale: 1, duration: 1.2, ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
        }
      );
    });

    /* ─── Parallax slow ─── */
    gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach((el) => {
      gsap.to(el, {
        y: -60, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
    });

    /* ─── Parallax fast ─── */
    gsap.utils.toArray<HTMLElement>('.parallax-fast').forEach((el) => {
      gsap.to(el, {
        y: -120, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.5 },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
