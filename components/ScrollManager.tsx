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
      duration: 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      lerp: 0.07,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      touchMultiplier: 1.2,
      infinite: false,
    });

    /* Sync Lenis with GSAP ScrollTrigger */
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    /* ─── GSAP reveal animations ─── */
    const reveals = gsap.utils.toArray<HTMLElement>('.gsap-reveal');
    reveals.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50, scale: 0.98, filter: 'blur(6px)' },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          stagger: 0.1,
        }
      );
    });

    /* ─── Fade animations (lighter) ─── */
    const fades = gsap.utils.toArray<HTMLElement>('.gsap-fade');
    fades.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    /* ─── Parallax depth layers ─── */
    const parallaxElements = gsap.utils.toArray<HTMLElement>('.parallax-slow');
    parallaxElements.forEach((el) => {
      gsap.to(el, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    const parallaxFast = gsap.utils.toArray<HTMLElement>('.parallax-fast');
    parallaxFast.forEach((el) => {
      gsap.to(el, {
        y: -120,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.5,
        },
      });
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
