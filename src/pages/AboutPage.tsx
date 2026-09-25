import React from 'react';
import { Target, Compass, Sparkles, CheckCircle2, ArrowRight, Shield, Cpu, Users } from 'lucide-react';
import { COMPANY_INFO, LEADERSHIP_DATA } from '../data/aptaicData';
import { CallToAction } from '../components/CallToAction';
import { LeadershipSection } from '../components/LeadershipSection';

interface AboutPageProps {
  onStartProject: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onStartProject }) => {
  return (
    <div className="pt-28 pb-16">
      {/* Hero Header */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About APTAIC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#071A41] tracking-tight mb-6">
            Technology With Purpose.
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aptaic is a technology company focused on helping businesses move from traditional processes to smarter digital systems.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Narrative */}
      <section className="py-16 bg-[#F8FAFD] border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#071A41] tracking-tight">
                Engineering Digital Systems That Actually Drive Enterprise Growth.
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  Aptaic is a technology company focused on helping businesses move from traditional processes to smarter digital systems.
                </p>
                <p>
                  We build software, websites and digital solutions that simplify operations, improve productivity and create better customer experiences.
                </p>
                <p>
                  Our approach combines technology, design and business understanding to create solutions that are practical, scalable and easy to use.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onStartProject}
                  className="btn-primary px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2"
                >
                  <span>Work With APTAIC</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Brand Cards: Mission & Vision */}
            <div className="lg:col-span-5 space-y-6">
              {/* Mission Card */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#071A41]">Our Mission</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  Make technology simple, useful and accessible for businesses.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
              </div>

              {/* Vision Card */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/90 shadow-md space-y-4 relative overflow-hidden">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#071A41]">Our Vision</h3>
                <p className="text-base text-gray-700 leading-relaxed font-medium">
                  Become a trusted technology partner for businesses looking to build, automate and grow digitally.
                </p>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Triad Approach: Technology + Design + Business Understanding */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071A41] mb-4">
              The Aptaic Triad
            </h2>
            <p className="text-base text-gray-600">
              Technology fails when built in isolation. We bridge engineering with human psychology and commercial pragmatism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-gray-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100/60 text-blue-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071A41]">1. Modern Technology</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cloud databases, high-availability architecture, real-time sync, and rock-solid APIs designed for frictionless scaling.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-gray-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100/60 text-cyan-700 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071A41]">2. Intuitive Design</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Clean white luxury aesthetic, minimal cognitive friction, and fast interfaces that employees and customers love using every day.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F8FAFD] border border-gray-200/80 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100/60 text-purple-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#071A41]">3. Business Understanding</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We understand inventory turnover, cash-flow ledgers, site rosters, and operational bottlenecks before writing a line of code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section Component */}
      <LeadershipSection />

      {/* Final CTA */}
      <CallToAction onStartProject={onStartProject} />
    </div>
  );
};
