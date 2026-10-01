import React from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA, INDUSTRIES_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle2, 
  PhoneCall, 
  Calculator, 
  Layers, 
  HardHat, 
  Compass, 
  CalendarRange, 
  Coins, 
  BadgeCheck, 
  FileSpreadsheet, 
  Eye, 
  Leaf, 
  ShieldCheck, 
  Download,
  Building2,
  FileCheck
} from 'lucide-react';

interface ServiceDetailPageProps {
  serviceId: string;
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
  onOpenEstimator: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Layers': <Layers className="w-8 h-8 text-[#FFD700]" />,
  'HardHat': <HardHat className="w-8 h-8 text-[#FFD700]" />,
  'Compass': <Compass className="w-8 h-8 text-[#FFD700]" />,
  'CalendarRange': <CalendarRange className="w-8 h-8 text-[#FFD700]" />,
  'Coins': <Coins className="w-8 h-8 text-[#FFD700]" />,
  'BadgeCheck': <BadgeCheck className="w-8 h-8 text-[#FFD700]" />,
  'FileSpreadsheet': <FileSpreadsheet className="w-8 h-8 text-[#FFD700]" />,
  'Eye': <Eye className="w-8 h-8 text-[#FFD700]" />,
  'Leaf': <Leaf className="w-8 h-8 text-[#FFD700]" />,
};

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const service = SERVICES_DATA.find((s) => s.id === serviceId) || SERVICES_DATA[0];
  const icon = SERVICE_ICONS[service.iconName] || <Layers className="w-8 h-8 text-[#FFD700]" />;

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Back Button & Breadcrumbs */}
      <div className="bg-white border-b-2 border-[#141414] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono-tech">
          <button
            onClick={() => {
              onNavigate('services');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 text-[#141414] hover:text-black font-black uppercase transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to All Services
          </button>
          
          <div className="text-[#666666] font-bold hidden sm:block">
            MINT-SVC // {service.slug}
          </div>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-[#141414] text-white py-16 sm:py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-neutral-900 border border-neutral-700 flex items-center justify-center">
                {icon}
              </div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black">
                Engineering Practice Detail
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black font-heading uppercase tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-xl text-neutral-300 font-body leading-relaxed max-w-3xl">
              {service.tagline}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                id="btn-discuss-project-hero"
                onClick={() => onOpenConsultation(service.id)}
                className="px-7 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center gap-2 shadow"
              >
                <PhoneCall className="w-4 h-4" /> Discuss Your Project
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-7 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-700 transition flex items-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#FFD700]" /> Configure Advisory Scope
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Overview, Capabilities, Process, Benefits */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Section: Service Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 space-y-6">
              <SectionHeading
                tag="01 // Service Overview"
                title="Engineering Depth & Strategic Oversight."
                className="mb-4"
              />
              <p className="text-base sm:text-lg text-[#141414] leading-relaxed font-body">
                {service.fullOverview}
              </p>
              <p className="text-sm text-[#666666] leading-relaxed font-body">
                Mint Projects International Engineering deploys seasoned technical directors, resident project managers, and digital control specialists. We establish disciplined communication protocols, real-time variance detection, and objective milestone verification that shields client capital from disputes and delivery slippages.
              </p>
            </div>

            {/* Sidebar Highlight Box */}
            <div className="lg:col-span-4 p-6 bg-white border-2 border-[#141414] shadow-sm space-y-5">
              <div className="text-xs font-mono-tech uppercase font-black text-[#141414]">
                Quality &amp; Standard Adherence
              </div>
              <ul className="space-y-3 text-xs text-[#141414] font-mono-tech">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>ISO 9001:2015 Quality System</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>FIDIC Contract Alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>Primavera P6 Master Controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>Independent Fiduciary Audits</span>
                </li>
              </ul>

              <div className="pt-2 border-t-2 border-[#141414]">
                <button
                  onClick={() => onOpenConsultation(service.id)}
                  className="w-full py-3 bg-[#141414] hover:bg-black text-white text-xs font-black font-mono-tech uppercase tracking-wider transition flex items-center justify-center gap-2"
                >
                  Request Technical Proposal <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" />
                </button>
              </div>
            </div>
          </div>

          {/* Section: Our Capabilities */}
          <div className="p-8 sm:p-10 bg-white border-2 border-[#141414] space-y-6">
            <SectionHeading
              tag="02 // Our Capabilities"
              title="Technical Scope & Capabilities."
              subtitle="Structured capabilities delivered through dedicated taskforces and digital control toolsets."
              className="mb-6"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#F5F5F2] border-2 border-[#141414] flex items-start gap-3"
                >
                  <span className="w-6 h-6 bg-[#141414] text-[#FFD700] font-mono-tech text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#141414] leading-snug">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: How We Work (4-step process) */}
          <div className="space-y-8">
            <SectionHeading
              tag="03 // Execution Framework"
              title="How We Work: 4-Stage Delivery Cycle."
              subtitle="A systematic, transparent execution process designed to maintain continuous alignment and zero surprises."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {service.howWeWork.map((step) => (
                <div
                  key={step.step}
                  className="p-6 bg-white border-2 border-[#141414] hover:border-black transition-all duration-200 space-y-3 relative overflow-hidden"
                >
                  <div className="text-2xl font-black font-mono-tech text-[#141414]">
                    {step.step}
                  </div>
                  <h4 className="text-base font-black uppercase font-heading text-[#141414]">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#666666] leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Key Benefits */}
          <div className="p-8 sm:p-10 bg-[#141414] text-white border-2 border-neutral-800 space-y-8">
            <SectionHeading
              tag="04 // Client Value"
              title="Key Strategic Benefits."
              subtitle="Quantifiable advantages for developers, institutional investors, and corporate builders."
              theme="dark"
              className="mb-4"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.keyBenefits.map((ben, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-neutral-900 border border-neutral-800 space-y-3"
                >
                  <div className="w-8 h-8 bg-[#FFD700] text-[#141414] flex items-center justify-center font-mono-tech text-xs font-black">
                    0{idx + 1}
                  </div>
                  <h4 className="text-lg font-black uppercase font-heading text-white">
                    {ben.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-body">
                    {ben.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Typical Deliverables & Industries Served */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Deliverables */}
            <div className="p-8 bg-white border-2 border-[#141414] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-black uppercase text-[#141414]">
                <FileCheck className="w-4 h-4 text-[#141414]" /> Documented Deliverables
              </div>
              <h3 className="text-xl font-black uppercase font-heading text-[#141414]">
                Engineering Outputs &amp; Dossiers
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#141414]">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#141414] shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries Served */}
            <div className="p-8 bg-white border-2 border-[#141414] space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-tech font-black uppercase text-[#141414]">
                <Building2 className="w-4 h-4 text-[#141414]" /> Sectors Applied
              </div>
              <h3 className="text-xl font-black uppercase font-heading text-[#141414]">
                Industries Served
              </h3>
              <p className="text-xs text-[#666666]">
                This service is customized for the regulatory codes, structural loads, and commercial dynamics of the following sectors:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {service.industriesServed.map((ind, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-[#F5F5F2] text-[#141414] text-xs font-black uppercase border border-[#141414]"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
          <div className="p-8 sm:p-12 bg-[#141414] text-white border-2 border-neutral-800 text-center space-y-5">
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-white">
              Discuss Your Project Requirements
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">
              Our senior engineering directors are available to evaluate your scope parameters, conduct preliminary peer reviews, and structure a custom advisory proposal.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <button
                id="btn-discuss-project-bottom"
                onClick={() => onOpenConsultation(service.id)}
                className="px-8 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center gap-2 shadow"
              >
                <PhoneCall className="w-4 h-4" /> Discuss Your Project
              </button>
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-700 transition"
              >
                View All Services
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
