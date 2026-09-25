import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, Building, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';
import { ContactForm } from './ContactForm';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-[#F8FAFD]">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#071A41] tracking-tight mb-5">
            Let's Build Something Digital.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Have an idea, business problem or project in mind? Let's discuss how technology can solve it.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* Left Column: Direct Contact Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-gray-200/90 p-7 sm:p-8 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-[#071A41]">Contact Details</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Connect directly with our technology team. We review every business requirement with
                deep technical and commercial diligence.
              </p>

              {/* Direct Details */}
              <div className="space-y-4 pt-2">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                      Corporate Office Address
                    </span>
                    <a
                      href={COMPANY_INFO.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-[#071A41] hover:text-blue-600 transition-colors leading-snug block"
                    >
                      {COMPANY_INFO.address}
                    </a>
                  </div>
                </div>

                {/* GSTIN Number */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                      GSTIN Identification
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-bold text-[#071A41]">
                        {COMPANY_INFO.gstin}
                      </span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                      Primary Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phones.primary}`}
                      className="text-base sm:text-lg font-bold text-[#071A41] hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_INFO.phones.primary}
                    </a>
                  </div>
                </div>

                {/* Alternate Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                      Alternate Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_INFO.phones.alternate}`}
                      className="text-base sm:text-lg font-bold text-[#071A41] hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_INFO.phones.alternate}
                    </a>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-gray-400 block mb-0.5">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base sm:text-lg font-bold text-[#071A41] hover:text-blue-600 transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Quick Card */}
              <div className="pt-4 border-t border-gray-100">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-4 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 flex items-center gap-3 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-900 block group-hover:text-emerald-700">
                      Need Immediate Answers?
                    </span>
                    <span className="text-xs text-[#25D366] font-semibold">
                      Chat with Founder on WhatsApp →
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Assurance Card */}
            <div className="p-5 rounded-2xl bg-white border border-gray-200/90 shadow-sm flex items-center gap-3 text-xs text-gray-600">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span>
                All inquiries reviewed directly by <strong>Harshit Agrawal</strong> and{' '}
                <strong>Mridul Gautam</strong> at Ithum Tower, Noida.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-gray-200/90 p-7 sm:p-10 shadow-xl">
              <h3 className="text-xl font-bold text-[#071A41] mb-2">Project Enquiry Form</h3>
              <p className="text-xs sm:text-sm text-gray-500 mb-6">
                Tell us about your organization and requirements to receive a detailed technical roadmap.
              </p>
              <ContactForm initialService={initialService} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
