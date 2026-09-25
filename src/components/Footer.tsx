import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, ArrowUpRight, MessageCircle, MapPin, FileText } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/aptaicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071A41] text-white pt-16 pb-12 border-t border-blue-900/40 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Identity Column (span 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3 inline-block group">
              <img
                src={COMPANY_INFO.logoUrl}
                alt="APTAIC"
                className="w-12 h-12 rounded-full bg-white p-1 object-contain shadow-md group-hover:scale-105 transition-transform"
              />
              <div>
                <span className="text-2xl font-black tracking-wider text-white">APTAIC</span>
                <p className="text-xs text-cyan-300 font-semibold tracking-wide">
                  {COMPANY_INFO.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              Technology solutions designed for modern businesses. We build software, websites and
              digital systems that help businesses operate, automate and grow.
            </p>

            {/* Office & GSTIN badges */}
            <div className="space-y-2 pt-1 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={COMPANY_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-300 transition-colors"
                >
                  {COMPANY_INFO.address}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-cyan-200">
                  GSTIN: {COMPANY_INFO.gstin}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-[#25D366] text-white text-xs font-semibold transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Direct</span>
              </a>
              <span className="text-xs text-gray-400">Noida HQ Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-cyan-300 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/leadership" className="text-gray-300 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-cyan-300 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs uppercase font-extrabold tracking-widest text-cyan-300 mb-4">
              Contact
            </h4>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-1">
                  Direct Phone Lines
                </span>
                <div className="space-y-1">
                  <a
                    href={`tel:${COMPANY_INFO.phones.primary}`}
                    className="flex items-center gap-2 text-white hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{COMPANY_INFO.phones.primary}</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phones.alternate}`}
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400" />
                    <span>{COMPANY_INFO.phones.alternate}</span>
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-1">
                  Official Email
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-2 text-white hover:text-cyan-300 font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-1">
                  GSTIN
                </span>
                <span className="font-mono text-xs text-cyan-300 font-semibold">
                  {COMPANY_INFO.gstin}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>{COMPANY_INFO.copyright}</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center sm:text-left">
            <span>{COMPANY_INFO.address}</span>
            <span>•</span>
            <span className="font-mono text-cyan-300">GSTIN: {COMPANY_INFO.gstin}</span>
            <span>•</span>
            <span>Enterprise Grade IT Services</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
