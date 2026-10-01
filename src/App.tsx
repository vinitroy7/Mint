import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { SearchDialog } from './components/common/SearchDialog';
import { ConsultationModal } from './components/common/ConsultationModal';
import { ProjectEstimatorModal } from './components/common/ProjectEstimatorModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ApproachPage } from './pages/ApproachPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [pageParam, setPageParam] = useState<string | undefined>(undefined);
  
  // Modals state
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationServiceId, setConsultationServiceId] = useState<string | undefined>(undefined);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState<boolean>(false);

  // Global keydown for Search (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (page: PageId, param?: string) => {
    setCurrentPage(page);
    setPageParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (serviceId?: string) => {
    setConsultationServiceId(serviceId);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#111315] font-body selection:bg-[#E5A910] selection:text-black">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page Content Router */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'service-detail' && (
          <ServiceDetailPage
            serviceId={pageParam || 'pmc'}
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            initialIndustryId={pageParam}
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'approach' && (
          <ApproachPage
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            initialProjectId={pageParam}
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}

        {currentPage === 'insights' && (
          <InsightsPage
            initialArticleId={pageParam}
            onNavigate={handleNavigate}
            onOpenConsultation={() => handleOpenConsultation()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenEstimator={() => setIsEstimatorOpen(true)}
          />
        )}
      </main>

      {/* Corporate Technical Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* Global Interactive Modals */}
      <SearchDialog
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => {
          setIsConsultationOpen(false);
          setConsultationServiceId(undefined);
        }}
        preselectedServiceId={consultationServiceId}
      />

      <ProjectEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onOpenConsultation={() => {
          setIsEstimatorOpen(false);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
