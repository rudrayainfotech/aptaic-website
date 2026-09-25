import React from 'react';
import { X, CheckCircle, ArrowRight, Layers, ShieldCheck, Building2, ExternalLink } from 'lucide-react';
import { PortfolioItem } from '../types';
import { COMPANY_INFO } from '../data/aptaicData';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#071A41]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.color} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-white/90 text-xs font-semibold mb-3">
            <span>{project.number}</span>
            <span>•</span>
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            {project.clientName}
          </h3>
          <p className="text-blue-100 text-base font-medium flex items-center gap-2">
            <Building2 className="w-4 h-4 text-cyan-300" />
            <span>Solution: {project.solution}</span>
            <span className="text-white/40">•</span>
            <span className="text-cyan-200">{project.industry}</span>
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2">
              Project Overview
            </h4>
            <p className="text-base text-gray-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Deliverables & Systems Built */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Core Modules & Delivered Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100 text-sm text-gray-800"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Tech Stack */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-gray-500 mb-2.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Engineered Architecture</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-medium border border-blue-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-gray-500">
              Verified client implementation by <strong className="text-[#071A41]">APTAIC</strong>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Aptaic%2C%20I%20saw%20your%20work%20for%20${encodeURIComponent(
                  project.clientName
                )}%20(${encodeURIComponent(project.solution)})%20and%20would%20like%20to%20discuss%20a%20similar%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#071A41] hover:bg-[#126BFF] text-white text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span>Request Similar Solution</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
