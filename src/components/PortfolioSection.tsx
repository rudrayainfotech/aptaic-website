import React, { useState } from 'react';
import { ArrowRight, Layers, Sparkles, Building2, CheckCircle2, ChevronRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/aptaicData';
import { PortfolioItem } from '../types';
import { TiltCard } from './TiltCard';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioItem) => void;
  limit?: number;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectProject,
  limit,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'CRM / ERP', 'HRMS', 'E-Commerce', 'Inventory'];

  const filteredProjects = PORTFOLIO_DATA.filter((item) => {
    if (selectedFilter === 'ALL') return true;
    return item.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="portfolio" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Our Work
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Real-world digital solutions built for businesses across different industries.
          </p>

          {/* Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFilter === cat
                    ? 'bg-[#071A41] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'ALL' ? 'All Case Studies' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={6}>
              <div
                onClick={() => onSelectProject(project)}
                className="group h-full rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between cursor-pointer relative hover:border-blue-400"
              >
                <div>
                  {/* Visual Interface Preview Banner */}
                  <div
                    className={`h-48 w-full bg-gradient-to-br ${project.color} p-6 relative overflow-hidden flex flex-col justify-between`}
                  >
                    {/* Background Tech Grid & Watermark */}
                    <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />

                    <div className="flex items-center justify-between relative z-10">
                      <span className="px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-white text-[11px] font-mono tracking-wider font-semibold border border-white/15">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                        {project.category}
                      </span>
                    </div>

                    {/* Blueprint Title Display */}
                    <div className="relative z-10">
                      <div className="text-[11px] uppercase tracking-wider text-cyan-200 font-bold mb-1 flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{project.industry}</span>
                      </div>
                      <h4 className="text-xl font-black text-white tracking-tight drop-shadow-sm line-clamp-1">
                        {project.solution}
                      </h4>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#071A41] group-hover:text-blue-600 transition-colors">
                        {project.clientName}
                      </h3>
                      <p className="text-xs font-semibold text-blue-600 mt-0.5">
                        Solution: {project.solution}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights Preview */}
                    <div className="space-y-1.5 pt-1">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="truncate">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 border-t border-gray-100 mt-2">
                  <div className="pt-4 flex items-center justify-between text-xs font-bold text-[#071A41] group-hover:text-blue-600 transition-colors">
                    <span>View Project Architecture</span>
                    <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
