import Hero from '@/components/Hero';
import MarqueeText from '@/components/MarqueeText';
import Services from '@/components/Services';
import WorkShowcase from '@/components/WorkShowcase';
import AboutStory from '@/components/AboutStory';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import PageShell from '@/components/PageShell';

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <PageShell>
        <Hero />
        <MarqueeText text="Design · Development · Strategy · Innovation · Performance" speed={35} />
        <Services />
        <MarqueeText text="LumenPay · Vela Labs · Noir Atelier · PulseHealth" speed={25} />
        <WorkShowcase />
        <AboutStory />
        <FinalCta />
        <Footer />
      </PageShell>
    </main>
  );
}
