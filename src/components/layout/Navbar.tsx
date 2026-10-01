import React, { useState, useEffect } from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA, COMPANY_INFO } from '../../data/companyData';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Search, 
  Calculator, 
  PhoneCall, 
  ArrowRight,
  ShieldCheck,
  Building,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
  onOpenEstimator: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; hasDropdown?: boolean }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'industries', label: 'Industries' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'projects', label: 'Projects' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200/80 py-3'
          : 'bg-white border-b border-neutral-200 py-4'
      }`}
    >
      {/* Top micro bar */}
      <div className="hidden lg:block border-b border-neutral-200 pb-2 mb-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[11px] font-mono-tech text-[#666666]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#141414] inline-block"></span>
              ISO 9001:2015 &amp; FIDIC STANDARDS COMPLIANT
            </span>
            <span className="text-neutral-300">|</span>
            <span>CIN: U74210DL2014PTC288190</span>
          </div>
          <div className="flex items-center gap-6">
            <span>DIRECT INQUIRIES: <strong className="text-[#141414] font-bold">+91 (011) 4982-3000</strong></span>
            <span className="text-neutral-300">|</span>
            <button
              onClick={onOpenEstimator}
              className="text-[#141414] hover:text-[#FFD700] hover:bg-[#141414] px-2 py-0.5 rounded font-black flex items-center gap-1 transition"
            >
              <Calculator className="w-3 h-3 text-[#141414]" /> Scope &amp; Fee Configurator
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <div
            id="brand-logo"
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="cursor-pointer flex items-center gap-3 group"
          >
            {/* Architectural Geometric Icon */}
            <div className="w-10 h-10 bg-[#141414] text-[#FFD700] flex items-center justify-center font-heading font-black text-xl border-b-2 border-[#FFD700] group-hover:bg-black transition-colors shadow-sm">
              M
            </div>
            
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tighter leading-tight text-[#141414] font-heading uppercase group-hover:text-black">
                MINT PROJECTS
              </span>
              <span className="text-[10px] font-mono-tech tracking-wider text-[#666666] uppercase font-bold">
                INTERNATIONAL ENGINEERING
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      id={`nav-${item.id}`}
                      onClick={() => onNavigate('services')}
                      className={`px-3 py-2 text-xs lg:text-[13px] font-black tracking-wider uppercase font-body flex items-center gap-1 transition-colors rounded ${
                        isActive
                          ? 'text-[#141414] bg-[#FFD700] font-black'
                          : 'text-[#141414] hover:text-black hover:bg-neutral-100'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#141414]' : 'text-neutral-500'}`} />
                    </button>

                    {/* Rich Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-[580px] bg-white text-[#141414] rounded-none shadow-2xl border-2 border-[#141414] p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                        <div className="col-span-2 pb-2 mb-1 border-b border-neutral-200 flex items-center justify-between">
                          <span className="text-[11px] font-mono-tech uppercase font-bold text-[#666666]">
                            Core Engineering &amp; Project Advisory Disciplines
                          </span>
                          <button
                            onClick={() => {
                              onNavigate('services');
                              setIsServicesDropdownOpen(false);
                            }}
                            className="text-xs text-[#141414] font-black hover:bg-[#FFD700] px-2 py-0.5 transition flex items-center gap-1 uppercase"
                          >
                            All Services <ArrowRight className="w-3 h-3 text-[#141414]" />
                          </button>
                        </div>
                        {SERVICES_DATA.map((srv) => (
                          <div
                            key={srv.id}
                            id={`dropdown-service-${srv.id}`}
                            onClick={() => {
                              onNavigate('service-detail', srv.id);
                              setIsServicesDropdownOpen(false);
                            }}
                            className="p-2.5 hover:bg-[#F5F5F2] cursor-pointer group transition border border-transparent hover:border-[#141414]"
                          >
                            <h5 className="text-xs font-black uppercase text-[#141414] group-hover:text-black flex items-center justify-between">
                              {srv.shortTitle}
                              <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:text-[#141414] group-hover:translate-x-0.5 transition" />
                            </h5>
                            <p className="text-[11px] text-[#666666] line-clamp-1 mt-0.5">{srv.tagline}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3 py-2 text-xs lg:text-[13px] font-black tracking-wider uppercase font-body transition-colors rounded ${
                    isActive
                      ? 'text-[#141414] bg-[#FFD700] font-black'
                      : 'text-[#141414] hover:text-black hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Tools & CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Trigger */}
            <button
              id="btn-nav-search"
              onClick={onOpenSearch}
              title="Search engineering services & articles"
              className="p-2 text-[#141414] hover:text-black rounded hover:bg-neutral-200 transition"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Talk to an Expert CTA */}
            <button
              id="btn-nav-talk-expert"
              onClick={() => onOpenConsultation()}
              className="px-5 py-2.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs tracking-wider uppercase border border-[#141414] shadow-sm hover:shadow transition-all duration-150 flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Talk to an Expert</span>
            </button>
          </div>

          {/* Mobile Menu & Search triggers */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 text-neutral-600 hover:text-black"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-800 hover:text-black focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-neutral-300 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id || (item.id === 'services' && currentPage === 'service-detail');
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded font-bold text-sm uppercase tracking-wider ${
                    isActive ? 'bg-[#111315] text-white' : 'text-neutral-700 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-neutral-200 space-y-2">
            <button
              onClick={() => {
                onOpenEstimator();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2"
            >
              <Calculator className="w-4 h-4 text-[#E5A910]" /> Scope &amp; Fee Configurator
            </button>

            <button
              id="btn-mobile-talk-expert"
              onClick={() => {
                onOpenConsultation();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#E5A910] hover:bg-[#d49b08] text-black font-extrabold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 shadow"
            >
              <PhoneCall className="w-4 h-4" /> Talk to an Expert
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
