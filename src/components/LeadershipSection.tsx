import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { LEADERSHIP_DATA, COMPANY_INFO } from '../data/aptaicData';
import { TiltCard } from './TiltCard';

interface LeadershipSectionProps {
  onContactLead?: (leaderName: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onContactLead }) => {
  return (
    <section id="leadership" className="py-20 md:py-28 relative overflow-hidden bg-white">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Team</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Meet The People Behind Aptaic
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Building technology with vision, execution and a focus on real business problems.
          </p>
        </div>

        {/* Leadership Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
          {LEADERSHIP_DATA.map((leader) => (
            <TiltCard key={leader.name} maxTilt={6}>
              <div className="group h-full rounded-3xl bg-white border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative flex flex-col justify-between hover:border-transparent hover:ring-2 hover:ring-blue-500/50">
                {/* Animated Gradient Border Overlay on Hover */}
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xs" />

                <div>
                  {/* Photo Container with zoom effect */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071A41]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                    {/* Role Pill */}
                    <div className="absolute top-4 left-4 z-10 px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-white/40 shadow-sm text-xs font-bold text-[#071A41] tracking-wide">
                      {leader.role}
                    </div>

                    {/* Social/Contact Quick Actions on Image */}
                    <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={COMPANY_INFO.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white text-gray-800 hover:text-[#25D366] flex items-center justify-center shadow-md transition-colors"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                      </a>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="w-9 h-9 rounded-full bg-white text-gray-800 hover:text-blue-600 flex items-center justify-center shadow-md transition-colors"
                        title="Send Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${COMPANY_INFO.phones.primary}`}
                        className="w-9 h-9 rounded-full bg-white text-gray-800 hover:text-blue-600 flex items-center justify-center shadow-md transition-colors"
                        title="Call Direct"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#071A41] tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                        {leader.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider font-semibold text-blue-600 mt-0.5">
                        {leader.role} • APTAIC
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {leader.description}
                    </p>

                    {/* Leadership Quote */}
                    {leader.quote && (
                      <blockquote className="p-3.5 rounded-xl bg-gray-50 border-l-2 border-blue-500 text-xs italic text-gray-700">
                        "{leader.quote}"
                      </blockquote>
                    )}

                    {/* Focus Areas */}
                    <div className="pt-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Core Domains & Focus
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {leader.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20${encodeURIComponent(
                      leader.name
                    )}%2C%20I%20would%20like%20to%20discuss%20a%20project%20with%20Aptaic.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-gray-50 hover:bg-[#071A41] text-[#071A41] hover:text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 group/btn border border-gray-200"
                  >
                    <span>Connect with {leader.name.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};
