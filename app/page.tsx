import Hero from '@/components/Hero';
import MarqueeText from '@/components/MarqueeText';
import UIShowcase from '@/components/UIShowcase';
import Services from '@/components/Services';
import FloatingDevices from '@/components/FloatingDevices';
import AboutStory from '@/components/AboutStory';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MarqueeText text="MERNSTACKSTUDIO · UI/UX DESIGN · MERN DEVELOPMENT · SAAS LAUNCH · E-COMMERCE · PRODUCT STRATEGY" speed={60} />
      <UIShowcase />
      <Services />
      <FloatingDevices />
      <AboutStory />
      <FinalCta />
      <Footer />
    </main>
  );
}
