import React from 'react';
import { LeadershipSection } from '../components/LeadershipSection';
import { CallToAction } from '../components/CallToAction';
import { Sparkles, MessageCircle, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

interface LeadershipPageProps {
  onStartProject: () => void;
}

export const LeadershipPage: React.FC<LeadershipPageProps> = ({ onStartProject }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Leadership Main Section */}
      <LeadershipSection />

      {/* Direct Advisory Banner */}
      <section className="py-12 bg-[#F8FAFD] border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Founder Access</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#071A41]">
            Talk Directly With Our Leadership Team
          </h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            At Aptaic, your project isn't handed off to junior sales reps. You collaborate directly
            with technology architects who understand business logic and software engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${COMPANY_INFO.phones.primary}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-gray-800 font-bold text-sm shadow-sm hover:border-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call Founder: {COMPANY_INFO.phones.primary}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Leadership</span>
            </a>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CallToAction onStartProject={onStartProject} />
    </div>
  );
};
