import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Cpu, Activity, CheckCircle, Database, Layers } from 'lucide-react';
import { COMPANY_INFO } from '../data/aptaicData';

interface HeroSectionProps {
  onStartProject: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onExploreServices,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFD] to-[#FFFFFF]">
      {/* Background Tech Grid & Dynamic Light Trails */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

      {/* Floating 4D Luxury Gradient Orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePosition.x * -0.5}px), ${mousePosition.y * -0.5}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-blue-600/10 blur-[110px] rounded-full pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (col-span-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Animated Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200/80 shadow-sm text-xs sm:text-sm font-semibold text-gray-700 animate-in fade-in slide-in-from-top-3 duration-500">
              <span className="w-2 h-2 rounded-full bg-[#126BFF] animate-ping" />
              <span className="text-[#071A41] font-bold">APTAIC</span>
              <span className="text-gray-300">•</span>
              <span className="text-blue-600 font-medium">
                {COMPANY_INFO.subTagline}
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#071A41] tracking-tight leading-[1.08]">
                <span>BUILD DIGITAL.</span>
                <br />
                <span className="gradient-text-blue">BUILD SMART.</span>
                <br />
                <span>BUILD WITH APTAIC.</span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {COMPANY_INFO.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={onStartProject}
                className="w-full sm:w-auto btn-primary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-3 cursor-pointer shadow-lg hover:shadow-xl"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto btn-secondary px-8 py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Trust Line & Highlights */}
            <div className="pt-6 border-t border-gray-200/60 grid grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0">
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#071A41]">100%</span>
                <span className="text-xs text-gray-500 font-medium">Custom Engineered</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#071A41]">Enterprise</span>
                <span className="text-xs text-gray-500 font-medium">SaaS & Workflows</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-black text-[#071A41]">Direct</span>
                <span className="text-xs text-gray-500 font-medium">Founder Partnership</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D/4D-Inspired UI Card Matrix (col-span-5) */}
          <div className="lg:col-span-5 relative perspective-1000">
            <div
              className="relative w-full max-w-md mx-auto transition-transform duration-300 ease-out"
              style={{
                transform: `rotateY(${mousePosition.x * 0.4}deg) rotateX(${mousePosition.y * -0.4}deg)`,
              }}
            >
              {/* Central Premium System Monitor Card */}
              <div className="relative rounded-3xl bg-white border border-gray-200/90 shadow-[0_25px_60px_-15px_rgba(7,26,65,0.18)] p-6 sm:p-7 space-y-6 z-20 backdrop-blur-md">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={COMPANY_INFO.logoUrl}
                      alt="APTAIC"
                      className="w-9 h-9 rounded-full bg-white p-0.5 object-contain border border-gray-100 shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-[#071A41]">APTAIC Engine</h4>
                      <p className="text-[10px] text-gray-400 font-mono">v4.2.0 • Cloud Active</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online
                  </span>
                </div>

                {/* Live Core Modules */}
                <div className="space-y-2.5">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-gray-400 block">
                    Enterprise System Modules
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100/80 flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-blue-600" />
                      <div className="text-xs">
                        <span className="font-bold text-gray-800 block">CRM & ERP</span>
                        <span className="text-[10px] text-gray-500">Live Sync</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100/80 flex items-center gap-2.5">
                      <Cpu className="w-4 h-4 text-indigo-600" />
                      <div className="text-xs">
                        <span className="font-bold text-gray-800 block">HRMS Core</span>
                        <span className="text-[10px] text-gray-500">Automated</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100/80 flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-cyan-600" />
                      <div className="text-xs">
                        <span className="font-bold text-gray-800 block">Custom Web</span>
                        <span className="text-[10px] text-gray-500">High Speed</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-gray-50 border border-gray-100/80 flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-purple-600" />
                      <div className="text-xs">
                        <span className="font-bold text-gray-800 block">Digital Mktg</span>
                        <span className="text-[10px] text-gray-500">30+ Media</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress / Performance Gauge */}
                <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-100 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-blue-900">Digital Transformation Speed</span>
                    <span className="font-bold text-blue-700">99.4% Efficiency</span>
                  </div>
                  <div className="w-full h-2 bg-blue-200/60 rounded-full overflow-hidden">
                    <div className="w-[94%] h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Satellite Card 1 (Top Left) */}
              <div
                className="hidden sm:flex absolute -top-6 -left-8 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl items-center gap-3 animate-float-slow"
                style={{
                  transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 block">Zero Template Debt</span>
                  <span className="text-[10px] text-gray-500">Built for your workflow</span>
                </div>
              </div>

              {/* Floating Satellite Card 2 (Bottom Right) */}
              <div
                className="hidden sm:flex absolute -bottom-6 -right-6 z-30 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl items-center gap-3"
                style={{
                  transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
                }}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-900 block">GST & India Ready</span>
                  <span className="text-[10px] text-gray-500">Full compliance engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
