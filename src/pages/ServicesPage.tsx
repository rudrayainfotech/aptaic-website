import React, { useState } from 'react';
import {
  Code2,
  Database,
  Users,
  Globe,
  ShoppingCart,
  Megaphone,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Tag,
  Check,
  Info,
} from 'lucide-react';
import { SERVICES_DATA, PRICING_DISCLAIMER } from '../data/aptaicData';
import { ServiceItem } from '../types';
import { CallToAction } from '../components/CallToAction';

interface ServicesPageProps {
  onSelectService: (service: ServiceItem) => void;
  onSelectPlan: (planName: string, serviceTitle: string) => void;
  onStartProject: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onSelectPlan,
  onStartProject,
}) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-8 h-8 text-blue-600" />;
      case 'Database':
        return <Database className="w-8 h-8 text-indigo-600" />;
      case 'Users':
        return <Users className="w-8 h-8 text-cyan-600" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-purple-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-8 h-8 text-blue-600" />;
      case 'Megaphone':
        return <Megaphone className="w-8 h-8 text-rose-500" />;
      default:
        return <Code2 className="w-8 h-8 text-blue-600" />;
    }
  };

  const filteredServices =
    activeTab === 'ALL'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.id === activeTab);

  return (
    <div className="pt-28 pb-16">
      {/* Services Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Technology & Pricing Stack</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071A41] tracking-tight mb-6">
            Comprehensive Digital Services.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From business automation and enterprise CRM/ERP to conversion-focused websites and digital marketing. Tap any service below to view detailed features and transparent package pricing.
          </p>

          {/* Quick Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'ALL'
                  ? 'bg-[#071A41] text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All 6 Services & Pricing
            </button>
            {SERVICES_DATA.map((srv) => (
              <button
                key={srv.id}
                onClick={() => setActiveTab(srv.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === srv.id
                    ? 'bg-[#071A41] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {srv.title.replace(' Development', '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detailed List with Integrated Pricing */}
      <section className="py-16 bg-[#F8FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-3xl bg-white border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-7 sm:p-10 lg:p-12 overflow-hidden relative"
            >
              {/* Top Row: Service Info & Modules */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8 pb-8 border-b border-gray-100">
                {/* Left Info (col-span-5) */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shadow-inner">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-blue-600 block">
                        SERVICE {service.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071A41] tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base text-gray-700 leading-relaxed font-medium">
                    {service.fullDesc}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="btn-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      <span>Open Interactive Pricing Modal</span>
                    </button>
                  </div>
                </div>

                {/* Right Modules Grid (col-span-7) */}
                <div className="lg:col-span-7 bg-[#F8FAFD] rounded-2xl p-6 sm:p-7 border border-gray-200/70">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200/80">
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-600 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>Included Modules & Engineering Scope</span>
                    </span>
                    <span className="text-xs font-mono font-semibold text-blue-600">
                      {service.features.length} Features
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-gray-200/80 shadow-xs text-xs sm:text-sm text-gray-800"
                      >
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-semibold truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row: Exact Pricing Plans for this Service */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm sm:text-base font-extrabold text-[#071A41] uppercase tracking-wider">
                      Standard Pricing Tiers for {service.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-gray-500">
                    Category: {service.pricingCategory}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {(service.pricingPlans || []).map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 relative flex flex-col justify-between ${
                        plan.isPopular
                          ? 'bg-blue-50/40 border-2 border-blue-600 shadow-md ring-2 ring-blue-100'
                          : 'bg-[#F8FAFD]/60 border border-gray-200/90 shadow-xs hover:shadow-md'
                      }`}
                    >
                      {plan.badge && (
                        <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                          {plan.badge}
                        </span>
                      )}

                      <div>
                        <div className="flex items-baseline justify-between mb-1">
                          <h4 className="font-bold text-gray-900 text-base">{plan.name}</h4>
                          <span className="text-[10px] text-gray-500 font-mono">
                            {plan.billingPeriod}
                          </span>
                        </div>

                        <div className="mb-4 pb-3 border-b border-gray-200/70">
                          <span className="text-2xl sm:text-3xl font-black text-[#071A41]">
                            {plan.price}
                          </span>
                          <span className="text-xs font-semibold text-blue-600 block mt-0.5">
                            {plan.gstNote}
                          </span>
                        </div>

                        <div className="space-y-1.5 mb-5">
                          {plan.includes.map((inc, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span>{inc}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectPlan(plan.name, service.title)}
                        className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                          plan.isPopular
                            ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                            : 'bg-[#071A41] hover:bg-blue-600 text-white'
                        }`}
                      >
                        <span>Choose {plan.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Important Disclaimer box */}
                <div className="mt-5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {PRICING_DISCLAIMER}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction onStartProject={onStartProject} />
    </div>
  );
};
