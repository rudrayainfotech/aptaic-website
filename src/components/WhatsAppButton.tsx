import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

export const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={COMPANY_INFO.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aptaic on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(37,211,102,0.65)] transition-all duration-300 transform hover:scale-105 group"
    >
      <span className="relative flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
        <MessageCircle className="relative inline-flex h-5 w-5 fill-current" />
      </span>
      <span className="hidden md:inline-block font-semibold text-sm tracking-wide pr-1">
        Chat on WhatsApp
      </span>
    </a>
  );
};
