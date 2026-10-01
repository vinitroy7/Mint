import React, { useState } from 'react';
import { PageId } from '../types';
import { SERVICES_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  HardHat, 
  Compass, 
  CalendarRange, 
  Coins, 
  BadgeCheck, 
  FileSpreadsheet, 
  Eye, 
  Leaf, 
  PhoneCall, 
  Calculator,
  ChevronRight
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
  onOpenEstimator: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Layers': <Layers className="w-7 h-7" />,
  'HardHat': <HardHat className="w-7 h-7" />,
  'Compass': <Compass className="w-7 h-7" />,
  'CalendarRange': <CalendarRange className="w-7 h-7" />,
  'Coins': <Coins className="w-7 h-7" />,
  'BadgeCheck': <BadgeCheck className="w-7 h-7" />,
  'FileSpreadsheet': <FileSpreadsheet className="w-7 h-7" />,
  'Eye': <Eye className="w-7 h-7" />,
  'Leaf': <Leaf className="w-7 h-7" />,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterCategories = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'pmc', label: 'Management & Governance' },
    { id: 'eng', label: 'Engineering & QA/QC' },
    { id: 'commercial', label: 'Cost, Contracts & Controls' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'pmc') return ['pmc', 'cpc', 'monitoring'].includes(service.id);
    if (selectedFilter === 'eng') return ['eng', 'qa-qc', 'green-building'].includes(service.id);
    if (selectedFilter === 'commercial') return ['ppc', 'cost-mgmt', 'procurement'].includes(service.id);
    return true;
  });

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Specialized Engineering &amp; Advisory Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            EXPERTISE THAT MOVES<br />
            <span className="text-[#FFD700]">PROJECTS FORWARD.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            We provide deep technical expertise across all project phases—protecting capital investment, accelerating schedules, and enforcing uncompromised quality standards.
          </p>

          <div className="pt-6 flex flex-wrap gap-4">
            <button
              onClick={onOpenEstimator}
              className="px-6 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center gap-2 shadow"
            >
              <Calculator className="w-4 h-4" /> Scope &amp; Fee Configurator
            </button>
            <button
              onClick={() => onOpenConsultation()}
              className="px-6 py-3.5 bg-neutral-900 hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-wider border-2 border-neutral-700 transition flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Services List Matrix */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#141414]">
            <div className="flex flex-wrap items-center gap-2">
              {filterCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2 text-xs font-mono-tech font-black uppercase tracking-wider transition ${
                    selectedFilter === cat.id
                      ? 'bg-[#141414] text-[#FFD700] border-2 border-[#141414] shadow'
                      : 'bg-white text-[#141414] border-2 border-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono-tech font-bold text-[#666666] hidden sm:inline-block">
              SHOWING {filteredServices.length} OF 9 CORE PRACTICES
            </span>
          </div>

          {/* Large Detailed Service Cards */}
          <div className="space-y-8">
            {filteredServices.map((service, index) => {
              const icon = SERVICE_ICONS[service.iconName] || <Layers className="w-7 h-7" />;
              return (
                <div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  className="p-8 sm:p-10 bg-white border-2 border-[#141414] hover:border-black transition-all duration-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative overflow-hidden group"
                >
                  {/* Subtle Yellow Accent Bar */}
                  <div className="absolute top-0 left-0 bottom-0 w-2 bg-[#FFD700]"></div>

                  {/* Left (5 cols): Icon, Title, Description */}
                  <div className="lg:col-span-5 space-y-4 pl-2">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-[#141414] text-[#FFD700] flex items-center justify-center shadow">
                        {icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-tech uppercase font-black text-[#666666]">
                          PRACTICE // 0{index + 1}
                        </span>
                        {service.statsHighlight && (
                          <div className="text-xs font-mono-tech font-black text-[#141414] uppercase">
                            {service.statsHighlight.value} &bull; {service.statsHighlight.label}
                          </div>
                        )}
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#141414] leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body">
                      {service.fullOverview}
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          onNavigate('service-detail', service.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="px-5 py-2.5 bg-[#141414] hover:bg-black text-white text-xs font-black font-mono-tech uppercase tracking-wider transition flex items-center gap-2 group/btn"
                      >
                        <span>Explore Full Scope</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#FFD700] group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => onOpenConsultation(service.id)}
                        className="px-4 py-2.5 bg-[#F5F5F2] hover:bg-neutral-200 text-[#141414] text-xs font-black font-mono-tech uppercase tracking-wider border-2 border-[#141414] transition"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>

                  {/* Right (7 cols): Key Capabilities & Deliverables */}
                  <div className="lg:col-span-7 bg-[#F5F5F2] p-6 sm:p-8 border-2 border-[#141414] space-y-6">
                    <div>
                      <h4 className="text-xs font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-3">
                        Key Capabilities &amp; Methodologies
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.capabilities.map((cap, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#141414]">
                            <span className="w-2 h-2 bg-[#FFD700] border border-[#141414] mt-1 shrink-0"></span>
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="font-black text-[#141414] block font-mono-tech uppercase text-[11px]">Industries Served:</span>
                        <span className="text-[#666666]">{service.industriesServed.join(' • ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
