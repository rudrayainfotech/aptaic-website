import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { ContactForm } from './ContactForm';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#071A41]/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-[#071A41] to-[#126BFF] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-cyan-200 text-xs font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Digital Journey</span>
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight">
            Let's Build Something Digital.
          </h3>
          <p className="text-blue-100 text-xs sm:text-sm mt-1">
            Fill out the details below to receive a personalized architecture proposal and quote.
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8">
          <ContactForm initialService={defaultService} isCompact onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
