import React, { useState } from 'react';
import { Check, Info, ArrowRight, Sparkles, Calculator } from 'lucide-react';
import { PRICING_DATA, PRICING_DISCLAIMER } from '../data/aptaicData';
import { TiltCard } from './TiltCard';

interface PricingSectionProps {
  onSelectPlan: (planName: string, category: string) => void;
  showAllCategories?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
}) => {
  const [activeTab, setActiveTab] = useState<string>('ALL');
  const [showGstBreakdown, setShowGstBreakdown] = useState<boolean>(false);

  const calculateWithGst = (priceString: string) => {
    const numeric = parseInt(priceString.replace(/[^0-9]/g, ''), 10);
    if (isNaN(numeric)) return { base: priceString, gst: '₹0', total: priceString };
    const gst = Math.round(numeric * 0.18);
    const total = numeric + gst;
    return {
      base: `₹${numeric.toLocaleString('en-IN')}`,
      gst: `₹${gst.toLocaleString('en-IN')}`,
      total: `₹${total.toLocaleString('en-IN')}`,
    };
  };

  // Filter categories dynamically based on user selection
  const categoriesToDisplay =
    activeTab === 'ALL'
      ? PRICING_DATA
      : PRICING_DATA.filter((cat) => cat.category === activeTab);

  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFD]">
      {/* Ambient background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Predictable Packages. Enterprise Value.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Choose a standardized package designed for immediate deployment, or speak to our team for custom enterprise workflow engineering. Tap any single service tab below to filter plans.
          </p>

          {/* Interactive Controls: Category Tabs & GST Toggle */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Category Filter Pills - Tapping any single service updates the view immediately */}
            <div className="inline-flex flex-wrap p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('ALL')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === 'ALL'
                    ? 'bg-[#071A41] text-white shadow-sm'
                    : 'text-gray-600 hover:text-[#071A41] hover:bg-gray-50'
                }`}
              >
                All Packages
              </button>
              {PRICING_DATA.map((cat) => (
                <button
                  type="button"
                  key={cat.category}
                  onClick={() => setActiveTab(cat.category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    activeTab === cat.category
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>

            {/* GST Calculator Breakdown Toggle */}
            <button
              type="button"
              onClick={() => setShowGstBreakdown(!showGstBreakdown)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-200 text-xs sm:text-sm font-semibold text-gray-700 hover:border-blue-400 shadow-sm transition-all cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>{showGstBreakdown ? 'Hide GST Breakdown' : 'Show 18% GST Total'}</span>
            </button>
          </div>
        </div>

        {/* Pricing Categories */}
        <div className="space-y-16 sm:space-y-20">
          {categoriesToDisplay.map((category) => (
            <div key={category.category} className="space-y-6">
              {/* Category Title */}
              <div className="border-b border-gray-200/80 pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#071A41] tracking-tight">
                    {category.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{category.subtitle}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-blue-600 bg-blue-50 px-3 py-1 rounded-full w-fit">
                    Standard Fixed Tier
                  </span>
                  {activeTab !== 'ALL' && (
                    <button
                      type="button"
                      onClick={() => setActiveTab('ALL')}
                      className="text-xs text-gray-500 hover:text-blue-600 underline cursor-pointer"
                    >
                      Show All Categories
                    </button>
                  )}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {category.plans.map((plan) => {
                  const gstCalculated = calculateWithGst(plan.price);
                  return (
                    <TiltCard
                      key={plan.name}
                      glowColor={plan.isPopular ? 'rgba(18, 107, 255, 0.25)' : 'rgba(7, 26, 65, 0.08)'}
                      onClick={() => onSelectPlan(plan.name, category.category)}
                    >
                      <div
                        className={`h-full flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 relative cursor-pointer ${
                          plan.isPopular
                            ? 'bg-white border-2 border-blue-600 shadow-[0_20px_45px_-10px_rgba(18,107,255,0.22)] ring-4 ring-blue-50'
                            : 'bg-white border border-gray-200/90 shadow-md hover:shadow-xl'
                        }`}
                      >
                        {/* Popular Badge */}
                        {plan.badge && (
                          <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                            {plan.badge}
                          </div>
                        )}

                        <div>
                          {/* Plan Name */}
                          <div className="mb-4">
                            <h4 className="text-lg font-bold text-[#071A41] tracking-wide">
                              {plan.name}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5">
                              {plan.billingPeriod || 'Standard terms'}
                            </p>
                          </div>

                          {/* Plan Price */}
                          <div className="mb-6 pb-6 border-b border-gray-100">
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl sm:text-4xl font-black text-[#071A41]">
                                {plan.price}
                              </span>
                            </div>
                            <span className="text-xs font-semibold text-blue-600 block mt-1">
                              {plan.gstNote}
                            </span>

                            {/* GST Breakdown Details */}
                            {showGstBreakdown && (
                              <div className="mt-3 p-2.5 rounded-xl bg-blue-50/60 border border-blue-100 text-[11px] text-gray-700 space-y-1 font-mono">
                                <div className="flex justify-between">
                                  <span>Base Price:</span>
                                  <span>{gstCalculated.base}</span>
                                </div>
                                <div className="flex justify-between text-gray-500">
                                  <span>18% GST:</span>
                                  <span>{gstCalculated.gst}</span>
                                </div>
                                <div className="flex justify-between font-bold text-[#071A41] pt-1 border-t border-blue-200/60">
                                  <span>Total Payable:</span>
                                  <span>{gstCalculated.total}</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Features List */}
                          <div className="space-y-3 mb-8">
                            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-3">
                              Package Inclusions
                            </span>
                            {plan.includes.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                                </div>
                                <span className="font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* CTA Button */}
                        <div>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectPlan(plan.name, category.category);
                            }}
                            className={`w-full py-3.5 px-5 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                              plan.isPopular
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02]'
                                : 'bg-[#071A41] hover:bg-blue-600 text-white hover:scale-[1.02]'
                            }`}
                          >
                            <span>{plan.cta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Mandatory Disclaimer Box */}
        <div className="mt-14 max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-amber-200/80 shadow-sm flex items-start gap-4">
          <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h5 className="text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">
              Important Standard Package Disclaimer
            </h5>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {PRICING_DISCLAIMER}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
