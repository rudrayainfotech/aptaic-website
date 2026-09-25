import React, { useState } from 'react';
import {
  Code2,
  Database,
  Users,
  Globe,
  ShoppingCart,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Tag,
  ChevronDown,
  ChevronUp,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/aptaicData';
import { ServiceItem } from '../types';
import { TiltCard } from './TiltCard';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  isDetailed?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  isDetailed = false,
}) => {
  const [expandedPricingId, setExpandedPricingId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-blue-600" />;
      case 'Database':
        return <Database className="w-6 h-6 text-indigo-600" />;
      case 'Users':
        return <Users className="w-6 h-6 text-cyan-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-purple-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-blue-600" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-rose-500" />;
      default:
        return <Code2 className="w-6 h-6 text-blue-600" />;
    }
  };

  const getStartingPrice = (service: ServiceItem) => {
    if (!service.pricingPlans || service.pricingPlans.length === 0) return 'Custom Quote';
    return service.pricingPlans[0].price;
  };

  const toggleInlinePricing = (e: React.MouseEvent, serviceId: string) => {
    e.stopPropagation();
    setExpandedPricingId(expandedPricingId === serviceId ? null : serviceId);
  };

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFD]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            What We Build
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            From business automation to digital marketing, Aptaic builds technology around the way
            your business works. Tap any service below to view instant package pricing.
          </p>
        </div>

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => {
            const startingPrice = getStartingPrice(service);
            const isExpanded = expandedPricingId === service.id;

            return (
              <TiltCard key={service.id} maxTilt={5}>
                <div
                  onClick={() => onSelectService(service)}
                  className="group h-full rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-2xl transition-all duration-300 p-7 sm:p-8 flex flex-col justify-between cursor-pointer hover:border-blue-400 hover:ring-2 hover:ring-blue-100 relative"
                >
                  <div>
                    {/* Top Bar: Icon, Number & Starting Price Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100/60 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 [&>svg]:group-hover:text-white">
                        {getIcon(service.iconName)}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-xs font-bold text-gray-400 group-hover:text-blue-600 transition-colors">
                          {service.number}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50/90 px-2 py-0.5 rounded-full border border-blue-100/80 mt-1">
                          <Tag className="w-3 h-3 text-blue-600" />
                          <span>Starts {startingPrice}</span>
                        </span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[#071A41] mb-2.5 group-hover:text-blue-600 transition-colors tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {isDetailed ? service.fullDesc : service.shortDesc}
                    </p>

                    {/* Key Feature Bullets (Preview) */}
                    <div className="space-y-1.5 mb-5">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <span className="text-[11px] text-gray-400 pl-5.5 block">
                          +{service.features.length - 3} more modules included
                        </span>
                      )}
                    </div>

                    {/* Inline Pricing Accordion for Services Page or Quick View */}
                    {isDetailed && (
                      <div className="mt-4 pt-3 border-t border-gray-100">
                        <button
                          type="button"
                          onClick={(e) => toggleInlinePricing(e, service.id)}
                          className="w-full py-2 px-3 rounded-xl bg-gray-50 hover:bg-blue-50 border border-gray-200/80 text-xs font-bold text-[#071A41] flex items-center justify-between transition-colors"
                        >
                          <span className="flex items-center gap-1.5">
                            <Tag className="w-3.5 h-3.5 text-blue-600" />
                            <span>{isExpanded ? 'Hide Pricing Tiers' : 'View Package Pricing'}</span>
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-blue-600" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="mt-3 space-y-2.5 animate-in fade-in duration-200">
                            {(service.pricingPlans || []).map((plan) => (
                              <div
                                key={plan.name}
                                className="p-2.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center justify-between text-xs"
                              >
                                <div>
                                  <span className="font-bold text-[#071A41] block">{plan.name}</span>
                                  <span className="text-[10px] text-gray-500">
                                    {plan.includes.slice(0, 2).join(' • ')}
                                  </span>
                                </div>
                                <div className="text-right">
                                  <span className="font-bold text-blue-700 block">{plan.price}</span>
                                  <span className="text-[9px] text-gray-500">{plan.gstNote}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Card Action Link */}
                  <div className="pt-4 mt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#071A41] group-hover:text-blue-600 transition-colors">
                    <span className="flex items-center gap-1.5">
                      <span>View Pricing & Capabilities</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
