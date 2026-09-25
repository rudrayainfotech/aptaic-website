import React, { useState } from 'react';
import {
  X,
  Check,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Calculator,
  Info,
  DollarSign,
} from 'lucide-react';
import { ServiceItem } from '../types';
import { PRICING_DISCLAIMER } from '../data/aptaicData';

interface ServicePricingModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectPlan: (planName: string, serviceTitle: string) => void;
}

export const ServicePricingModal: React.FC<ServicePricingModalProps> = ({
  service,
  onClose,
  onSelectPlan,
}) => {
  const [showGst, setShowGst] = useState(false);

  if (!service) return null;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#071A41]/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-[#071A41] via-[#0D224A] to-[#126BFF] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-semibold mb-2">
            <span>SERVICE {service.number}</span>
            <span>•</span>
            <span>{service.pricingCategory || 'Enterprise Service'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            {service.title}
          </h3>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
          {/* Features Highlights */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Core Modules & Delivered Capabilities</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {service.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-800"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className="pt-2 border-t border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-[#071A41] flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  <span>Standard Pricing Packages for {service.title}</span>
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Select a standardized tier or request custom workflow modifications.
                </p>
              </div>

              {/* GST Toggle */}
              <button
                type="button"
                onClick={() => setShowGst(!showGst)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors w-fit"
              >
                <Calculator className="w-3.5 h-3.5 text-blue-600" />
                <span>{showGst ? 'Hide 18% GST' : 'Show 18% GST Breakdown'}</span>
              </button>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
              {(service.pricingPlans || []).map((plan) => {
                const gstInfo = calculateWithGst(plan.price);
                return (
                  <div
                    key={plan.name}
                    className={`rounded-2xl p-5 sm:p-6 transition-all duration-300 relative flex flex-col justify-between ${
                      plan.isPopular
                        ? 'bg-blue-50/50 border-2 border-blue-600 shadow-md ring-2 ring-blue-100'
                        : 'bg-white border border-gray-200/90 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {plan.badge && (
                      <span className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider">
                        {plan.badge}
                      </span>
                    )}

                    <div>
                      <h5 className="font-bold text-gray-900 text-base">{plan.name}</h5>
                      <span className="text-[11px] text-gray-500 block mb-3">
                        {plan.billingPeriod || 'Standard package'}
                      </span>

                      <div className="mb-4 pb-3 border-b border-gray-200/70">
                        <span className="text-2xl sm:text-3xl font-black text-[#071A41]">
                          {plan.price}
                        </span>
                        <span className="text-xs font-semibold text-blue-600 block mt-0.5">
                          {plan.gstNote}
                        </span>

                        {showGst && (
                          <div className="mt-2.5 p-2 rounded-lg bg-white border border-blue-100 text-[10px] space-y-0.5 font-mono text-gray-600">
                            <div className="flex justify-between">
                              <span>Base:</span>
                              <span>{gstInfo.base}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>18% GST:</span>
                              <span>{gstInfo.gst}</span>
                            </div>
                            <div className="flex justify-between font-bold text-gray-900 pt-0.5 border-t border-gray-100">
                              <span>Total:</span>
                              <span>{gstInfo.total}</span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Inclusions */}
                      <div className="space-y-2 mb-5">
                        {plan.includes.map((inc, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-gray-700">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
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
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                          : 'bg-[#071A41] hover:bg-blue-600 text-white'
                      }`}
                    >
                      <span>Choose {plan.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer in Modal */}
            <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs text-gray-600 leading-relaxed">
                {PRICING_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
