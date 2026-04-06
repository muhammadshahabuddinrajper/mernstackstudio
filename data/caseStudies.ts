export interface CaseStudy {
  name: string;
  industry: string;
  visualConcept: string;
  problem: string;
  solution: string;
  outcome: string;
  stack: string[];
  gradient: string;
  accentColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    name: 'LumenPay',
    industry: 'Fintech Platform',
    visualConcept: 'Neo-fintech — clean payment architecture with trust-driven design',
    problem: 'Subscription onboarding was slow, fractured and lacked premium trust signals.',
    solution:
      'We rebuilt the checkout flow with a refined payment journey, layered trust messaging, and a reusable React/Next interface that feels secure and modern.',
    outcome: '26% reduction in drop-off · 38% faster checkout · measurable retention uplift',
    stack: ['Next.js', 'MERN', 'Stripe', 'Framer Motion'],
    gradient: 'from-blue-500/20 to-purple-500/20',
    accentColor: '#5db2ff',
  },
  {
    name: 'Vela Labs',
    industry: 'B2B SaaS Analytics',
    visualConcept: 'Data-immersive — motion-led analytics with enterprise clarity',
    problem: 'Complex analytics and an overburdened onboarding path were slowing enterprise conversions.',
    solution:
      'We created a motion-led dashboard system, simplified the information hierarchy, and launched a modern experience that positions Vela as a trusted partner.',
    outcome: '18% more demo requests · 20% faster buying cycle',
    stack: ['React', 'Node.js', 'MongoDB', 'GSAP'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    accentColor: '#a855f7',
  },
  {
    name: 'Noir Atelier',
    industry: 'Luxury D2C',
    visualConcept: 'Digital luxury — editorial product storytelling meets headless commerce',
    problem: 'The brand felt inconsistent across devices, and mobile buying moments were losing premium customers.',
    solution:
      'We crafted a headless storefront with high-impact mobile experience, curated editorial product pages and seamless one-click checkout.',
    outcome: 'Mobile revenue +42% · Average order value +31%',
    stack: ['Next.js', 'Shopify API', 'Tailwind CSS'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    accentColor: '#f59e0b',
  },
  {
    name: 'PulseHealth',
    industry: 'Digital Health',
    visualConcept: 'Calm-tech — patient-first healthcare UX with confidence-building flow',
    problem: 'Patient pathways were fragmented and the experience lacked confidence for new users.',
    solution:
      'We aligned identity, patient onboarding, and appointment flows into a cohesive platform that feels calm, reliable and performance-focused.',
    outcome: 'Bookings +27% · Support tickets -15%',
    stack: ['MERN', 'GraphQL', 'TypeScript', 'Vercel'],
    gradient: 'from-cyan-500/20 to-teal-500/20',
    accentColor: '#22d3ee',
  },
];
