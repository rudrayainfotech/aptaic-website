import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustIntroSection } from '../components/TrustIntroSection';
import { VideoShowcase } from '../components/VideoShowcase';
import { ServicesSection } from '../components/ServicesSection';
import { WhyAptaicSection } from '../components/WhyAptaicSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { PricingSection } from '../components/PricingSection';
import { LeadershipSection } from '../components/LeadershipSection';
import { CallToAction } from '../components/CallToAction';
import { ContactSection } from '../components/ContactSection';
import { PortfolioItem, ServiceItem } from '../types';

interface HomePageProps {
  onStartProject: () => void;
  onSelectProject: (project: PortfolioItem) => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectPlan: (planName: string, category: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartProject,
  onSelectProject,
  onSelectService,
  onSelectPlan,
}) => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <HeroSection
        onStartProject={onStartProject}
        onExploreServices={scrollToServices}
      />

      {/* 2. TRUST / INTRO */}
      <TrustIntroSection />

      {/* 3. PROMOTIONAL VIDEO */}
      <VideoShowcase videoSrc="/assets/aptaic-promo.mp4" />

      {/* 4. SERVICES PREVIEW (With tap-to-view pricing) */}
      <ServicesSection onSelectService={onSelectService} />

      {/* 5. WHY APTAIC */}
      <WhyAptaicSection />

      {/* 6. FEATURED PORTFOLIO */}
      <PortfolioSection onSelectProject={onSelectProject} />

      {/* 7. PRICING PREVIEW */}
      <PricingSection onSelectPlan={onSelectPlan} />

      {/* 8. LEADERSHIP */}
      <LeadershipSection />

      {/* 9. CALL TO ACTION */}
      <CallToAction onStartProject={onStartProject} />

      {/* 10. CONTACT */}
      <ContactSection />
    </div>
  );
};
