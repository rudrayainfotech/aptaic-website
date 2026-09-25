import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { COMPANY_INFO } from '../data/aptaicData';

const SERVICE_OPTIONS = [
  'Software Development',
  'CRM / ERP',
  'HRMS',
  'Website Development',
  'E-Commerce',
  'Digital Marketing',
  'Other',
];

const BUDGET_RANGES = [
  'Under ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  '₹1,00,000 - ₹2,50,000',
  '₹2,50,000+',
  'Flexible / Custom Scope',
];

interface ContactFormProps {
  initialService?: string;
  isCompact?: boolean;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialService = '',
  isCompact = false,
  onSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    serviceRequired: initialService || 'Software Development',
    projectBudget: '₹50,000 - ₹1,00,000',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.serviceRequired) newErrors.serviceRequired = 'Please select a service';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#126BFF', '#00C6FF', '#6C3BFF', '#071A41'],
        });
      } catch {
        // Safe fallback if canvas-confetti is not available
      }
      if (onSuccess) onSuccess();
    }, 800);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-white border border-emerald-100 shadow-xl text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold text-[#071A41]">
          Thank you. Our team will contact you shortly.
        </h3>
        <p className="text-sm text-gray-600 max-w-md mx-auto">
          We have received your enquiry regarding{' '}
          <strong className="text-blue-600 font-semibold">{formData.serviceRequired}</strong>. Harshit
          Agrawal or a senior digital systems architect from APTAIC will reach out to you within 24
          hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aptaic%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(
              formData.serviceRequired
            )}%20(Name%3A%20${encodeURIComponent(formData.fullName)}).`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>Connect instantly on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            type="button"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                phone: '',
                email: '',
                serviceRequired: 'Software Development',
                projectBudget: '₹50,000 - ₹1,00,000',
                message: '',
              });
            }}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium transition-colors"
          >
            Send Another Enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
              errors.fullName ? 'border-red-400 bg-red-50/50' : 'border-gray-200'
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Company Name
          </label>
          <input
            type="text"
            placeholder="e.g. Shyam Enterprises / Pvt Ltd"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
              <Phone className="w-4 h-4" />
            </span>
            <input
              type="tel"
              required
              placeholder="e.g. 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
                errors.phone ? 'border-red-400 bg-red-50/50' : 'border-gray-200'
              }`}
            />
          </div>
          {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-gray-400 pointer-events-none">
              <Mail className="w-4 h-4" />
            </span>
            <input
              type="email"
              required
              placeholder="e.g. name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 border text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all ${
                errors.email ? 'border-red-400 bg-red-50/50' : 'border-gray-200'
              }`}
            />
          </div>
          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Service Required Dropdown */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Service Required <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
          >
            {SERVICE_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Project Budget Dropdown */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
            Project Budget
          </label>
          <select
            value={formData.projectBudget}
            onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all cursor-pointer"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1.5">
          Project Details / Message
        </label>
        <textarea
          rows={isCompact ? 3 : 4}
          placeholder="Briefly describe your business process, requirements or goals..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#071A41] via-[#0D2660] to-[#126BFF] hover:from-[#126BFF] hover:to-[#00C6FF] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Enquiry</span>
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-gray-400">
        Your information is confidential and protected by APTAIC enterprise privacy standards.
      </p>
    </form>
  );
};
