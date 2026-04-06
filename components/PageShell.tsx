'use client';

import type { ReactNode } from 'react';
import AnimatedCursor from './AnimatedCursor';
import ScrollManager from './ScrollManager';
import Navbar from './Navbar';
import Preloader from './Preloader';

export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Preloader />
      <ScrollManager />
      <AnimatedCursor />
      <Navbar />
      {children}
    </>
  );
}
