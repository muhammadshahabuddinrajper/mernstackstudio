'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function AnimatedCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const scale = useMotionValue(1);
  const springScale = useSpring(scale, { stiffness: 400, damping: 30 });

  const isHovering = useRef(false);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      cursorX.set(event.clientX - 20);
      cursorY.set(event.clientY - 20);
      dotX.set(event.clientX - 4);
      dotY.set(event.clientY - 4);
    },
    [cursorX, cursorY, dotX, dotY]
  );

  const handleHoverStart = useCallback(() => {
    if (!isHovering.current) {
      isHovering.current = true;
      scale.set(2);
    }
  }, [scale]);

  const handleHoverEnd = useCallback(() => {
    if (isHovering.current) {
      isHovering.current = false;
      scale.set(1);
    }
  }, [scale]);

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [data-cursor="pointer"], input, textarea'
      );
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    };

    // Run on mount and observe for new elements
    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, [handleMouseMove, handleHoverStart, handleHoverEnd]);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ x: ringX, y: ringY, scale: springScale }}
        className="custom-cursor pointer-events-none fixed left-0 top-0 z-[9999] hidden h-10 w-10 rounded-full border border-neon-blue/50 bg-transparent md:block"
      />

      {/* Inner dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-2 w-2 rounded-full bg-neon-blue md:block"
      />
    </>
  );
}
