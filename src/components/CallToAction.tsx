import React from 'react';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

interface CallToActionProps {
  onStartProject: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onStartProject }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#071A41] via-[#091F4D] to-[#126BFF] text-white p-8 sm:p-12 md:p-16 lg:p-20 shadow-[0_30px_70px_-20px_rgba(7,26,65,0.4)] border border-blue-400/20">
          {/* Subtle Grid and Glow */}
          <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/20 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600/30 rounded-full blur-[90px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Transform Your Business Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Have An Idea? Let's Build It.
            </h2>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto">
              From your first idea to a complete digital product, Aptaic helps you turn business
              challenges into technology solutions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-gray-50 text-[#071A41] font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </button>

              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
