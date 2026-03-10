import Hero from '@/components/sections/Hero';
import SocialProof from '@/components/sections/SocialProof';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import DashboardPreview from '@/components/sections/DashboardPreview';
import ResearchHighlights from '@/components/sections/ResearchHighlights';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import Testimonials from '@/components/sections/Testimonials';
import CTABand from '@/components/sections/CTABand';
import ScrollAnimations from '@/components/ScrollAnimations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ferrymano | Crypto Data Analyst & Tokenomics Specialist',
  description:
    'On-chain analytics, tokenomics research та dashboard-driven insights для протоколів, фондів і DAO. Портфоліо Ferrymano — Crypto Data Analyst.',
};

export default function HomePage() {
  return (
    <>
      <ScrollAnimations />
      <Hero />
      <SocialProof />
      <About />
      <Expertise />
      <FeaturedProjects />
      <DashboardPreview />
      <ResearchHighlights />
      <WhyWorkWithMe />
      <Testimonials />
      <CTABand />
    </>
  );
}
