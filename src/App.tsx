import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ContactModal } from './components/ContactModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServicePricingModal } from './components/ServicePricingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { PortfolioItem, ServiceItem } from './types';

// Scroll to top helper on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const AppContent: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [selectedServiceForPricing, setSelectedServiceForPricing] = useState<ServiceItem | null>(null);

  const handleStartProject = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || 'Software Development');
    setIsContactModalOpen(true);
  };

  const handleSelectPlan = (planName: string, category: string) => {
    setSelectedServiceForModal(`${category} — ${planName}`);
    setIsContactModalOpen(true);
  };

  const handleServiceTap = (service: ServiceItem) => {
    setSelectedServiceForPricing(service);
  };

  const handleChoosePlanFromServiceModal = (planName: string, serviceTitle: string) => {
    setSelectedServiceForPricing(null);
    setSelectedServiceForModal(`${serviceTitle} — ${planName} Package`);
    setIsContactModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFD] text-[#111827] selection:bg-[#126BFF] selection:text-white">
      <ScrollToTop />

      {/* Fixed Sticky Luxury Navigation */}
      <Navbar onOpenContactModal={() => handleStartProject()} />

      {/* Main Routed Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onStartProject={() => handleStartProject()}
                onSelectProject={(proj) => setSelectedProject(proj)}
                onSelectService={handleServiceTap}
                onSelectPlan={handleSelectPlan}
              />
            }
          />
          <Route
            path="/about"
            element={<AboutPage onStartProject={() => handleStartProject()} />}
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                onSelectService={handleServiceTap}
                onSelectPlan={handleSelectPlan}
                onStartProject={() => handleStartProject()}
              />
            }
          />
          <Route
            path="/leadership"
            element={<LeadershipPage onStartProject={() => handleStartProject()} />}
          />
          <Route
            path="/portfolio"
            element={
              <PortfolioPage
                onSelectProject={(proj) => setSelectedProject(proj)}
                onStartProject={() => handleStartProject()}
              />
            }
          />
          <Route
            path="/pricing"
            element={
              <PricingPage
                onSelectPlan={handleSelectPlan}
                onStartProject={() => handleStartProject()}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback route */}
          <Route
            path="*"
            element={
              <HomePage
                onStartProject={() => handleStartProject()}
                onSelectProject={(proj) => setSelectedProject(proj)}
                onSelectService={handleServiceTap}
                onSelectPlan={handleSelectPlan}
              />
            }
          />
        </Routes>
      </main>

      {/* Corporate Premium Footer with Address & GSTIN */}
      <Footer />

      {/* Fixed WhatsApp Pulse Button */}
      <WhatsAppButton />

      {/* Service Pricing & Details Modal (Opened upon tapping any service) */}
      <ServicePricingModal
        service={selectedServiceForPricing}
        onClose={() => setSelectedServiceForPricing(null)}
        onSelectPlan={handleChoosePlanFromServiceModal}
      />

      {/* Interactive Project Details Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(clientName) => {
          setSelectedProject(null);
          handleStartProject(`Similar solution to ${clientName}`);
        }}
      />

      {/* Universal Quick Inquiry Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={selectedServiceForModal}
      />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
