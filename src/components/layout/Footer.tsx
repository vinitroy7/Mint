import React from 'react';
import { PageId } from '../../types';
import { SERVICES_DATA, COMPANY_INFO } from '../../data/companyData';
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Globe2, 
  Linkedin, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <footer className="bg-[#141414] text-white pt-16 pb-12 border-t-4 border-[#FFD700] relative overflow-hidden">
      {/* Background Engineering Line Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none"></div>

      {/* Top Banner Accent */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-neutral-800">
          {/* Column 1: Brand & Credentials (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#FFD700] text-[#141414] font-black font-heading text-xl flex items-center justify-center rounded-none">
                M
              </div>
              <div>
                <h3 className="font-heading font-black text-lg sm:text-xl tracking-tight uppercase">
                  MINT PROJECTS
                </h3>
                <p className="text-[10px] font-mono-tech tracking-wider text-neutral-400 uppercase font-bold">
                  INTERNATIONAL ENGINEERING PVT. LTD.
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Engineering Excellence. Project Confidence. Independent technical advisory, project management consultancy (PMC), and advanced project controls for real estate, infrastructure, and industrial developments.
            </p>

            <div className="p-4 bg-neutral-900 rounded-none border border-neutral-800 space-y-2">
              <div className="text-[11px] font-mono-tech text-[#FFD700] uppercase font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" /> Quality &amp; Governance Credentials
              </div>
              <p className="text-xs text-neutral-300">
                Certified ISO 9001:2015 | ISO 14001:2015 | ISO 45001:2018. Compliant with FIDIC Conditions of Contract &amp; PMI Standards.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono-tech font-black uppercase tracking-wider text-[#FFD700]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-300">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'All Services' },
                { id: 'industries', label: 'Industries' },
                { id: 'approach', label: 'Our Approach' },
                { id: 'projects', label: 'Projects & Experience' },
                { id: 'insights', label: 'Engineering Insights' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id as PageId);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FFD700] hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-left uppercase font-bold text-[11px] tracking-wider"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Engineering Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech font-black uppercase tracking-wider text-[#FFD700]">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-neutral-300">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      onNavigate('service-detail', srv.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FFD700] hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-left line-clamp-1 uppercase text-[11px] font-bold tracking-wider"
                  >
                    <ChevronRight className="w-3 h-3 text-neutral-600 shrink-0" />
                    <span className="truncate">{srv.shortTitle}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs text-[#FFD700] hover:underline font-black pt-1 inline-flex items-center gap-1 uppercase tracking-wider"
                >
                  View All 9 Specialized Services <ArrowRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Inquiries (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono-tech font-black uppercase tracking-wider text-[#FFD700]">
              Corporate Inquiries
            </h4>
            
            <div className="space-y-3 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Level 8, Worldmark 2, Aerocity, New Delhi, 110037, India
                </span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>+91 (011) 4982-3000 / +91 98110 92340</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFD700] shrink-0" />
                <span>contact@mintprojectsinternational.com</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider rounded-none transition flex items-center justify-center gap-1.5 shadow"
              >
                Start a Conversation <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, CIN & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-tech text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} Mint Projects International Engineering Pvt. Ltd. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-neutral-300 transition">Corporate Governance</span>
            <span>&bull;</span>
            <span className="hover:text-neutral-300 transition">HSE &amp; Safety Policy</span>
            <span>&bull;</span>
            <span className="hover:text-neutral-300 transition">Confidentiality &amp; NDA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
