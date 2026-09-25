import React from 'react';
import { PortfolioSection } from '../components/PortfolioSection';
import { CallToAction } from '../components/CallToAction';
import { PortfolioItem } from '../types';

interface PortfolioPageProps {
  onSelectProject: (project: PortfolioItem) => void;
  onStartProject: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onSelectProject,
  onStartProject,
}) => {
  return (
    <div className="pt-28 pb-16">
      {/* Portfolio Section */}
      <PortfolioSection onSelectProject={onSelectProject} />

      {/* Final Call to Action */}
      <CallToAction onStartProject={onStartProject} />
    </div>
  );
};
