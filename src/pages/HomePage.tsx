import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { TrustIntroSection } from '../components/TrustIntroSection';
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

      {/* 3. SERVICES PREVIEW (With tap-to-view pricing) */}
      <ServicesSection onSelectService={onSelectService} />

      {/* 4. WHY APTAIC */}
      <WhyAptaicSection />

      {/* 5. FEATURED PORTFOLIO */}
      <PortfolioSection onSelectProject={onSelectProject} />

      {/* 6. PRICING PREVIEW */}
      <PricingSection onSelectPlan={onSelectPlan} />

      {/* 7. LEADERSHIP */}
      <LeadershipSection />

      {/* 8. CALL TO ACTION */}
      <CallToAction onStartProject={onStartProject} />

      {/* 9. CONTACT */}
      <ContactSection />
    </div>
  );
};