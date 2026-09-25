import React from 'react';
import { PricingSection } from '../components/PricingSection';
import { CallToAction } from '../components/CallToAction';

interface PricingPageProps {
  onSelectPlan: (planName: string, category: string) => void;
  onStartProject: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onSelectPlan,
  onStartProject,
}) => {
  return (
    <div className="pt-28 pb-16">
      {/* Full Pricing Section with working single-service filters */}
      <PricingSection onSelectPlan={onSelectPlan} />

      {/* Final Call to Action */}
      <CallToAction onStartProject={onStartProject} />
    </div>
  );
};
