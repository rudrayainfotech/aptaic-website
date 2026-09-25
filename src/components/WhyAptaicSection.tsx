import React from 'react';
import {
  Target,
  Sliders,
  Cpu,
  Layers,
  TrendingUp,
  Headphones,
  CheckCircle2,
  Sparkles,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { WHY_CHOOSE_DATA, COMPANY_INFO } from '../data/aptaicData';
import { TiltCard } from './TiltCard';

export const WhyAptaicSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-6 h-6 text-blue-600" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-cyan-600" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-purple-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-emerald-600" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-rose-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background Tech Grids & Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The APTAIC Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Why Businesses Choose Aptaic
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {COMPANY_INFO.positioningStatement}
          </p>
        </div>

        {/* 6 Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_DATA.map((item, index) => (
            <TiltCard key={item.id} maxTilt={7}>
              <div className="h-full rounded-3xl bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group hover:border-blue-400 hover:ring-2 hover:ring-blue-50">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 [&>svg]:group-hover:text-white">
                      {getIcon(item.iconName)}
                    </div>
                    <span className="font-mono text-xs font-bold text-gray-300 group-hover:text-blue-600 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071A41] mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100/80 flex items-center gap-2 text-xs font-semibold text-blue-600">
                  <span>Guaranteed Principle</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
