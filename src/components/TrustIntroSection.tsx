import React from 'react';
import { ShieldCheck, Award, Zap, Building2, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

export const TrustIntroSection: React.FC = () => {
  const capabilities = [
    'Custom Software',
    'CRM & ERP Systems',
    'HRMS Portals',
    'Inventory Automation',
    'Restaurant CRM',
    'E-Commerce Stores',
    'Digital Marketing',
  ];

  return (
    <section className="py-12 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Trust Statement */}
          <div className="lg:max-w-md text-center lg:text-left space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Enterprise Digital Partner</span>
            </div>
            <p className="text-sm sm:text-base font-semibold text-[#071A41] leading-snug">
              {COMPANY_INFO.positioningStatement}
            </p>
          </div>

          {/* Marquee / Capability Pills */}
          <div className="flex-1 overflow-hidden w-full">
            <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2.5">
              {capabilities.map((item, idx) => (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200/80 text-xs font-semibold text-gray-700 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
