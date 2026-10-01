import React, { useState } from 'react';
import { PageId } from '../types';
import { INDUSTRIES_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  PhoneCall, 
  Calculator,
  ChevronRight
} from 'lucide-react';

interface IndustriesPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
  initialIndustryId?: string;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
  initialIndustryId,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    initialIndustryId || INDUSTRIES_DATA[0].id
  );

  const activeSector = INDUSTRIES_DATA.find((i) => i.id === selectedIndustry) || INDUSTRIES_DATA[0];

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Sector-Specific Engineering Mastery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            EXPERTISE ACROSS<br />
            <span className="text-[#FFD700]">INDUSTRIES.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Every sector possesses distinct structural codes, speed-to-market pressures, and technical risks. We tailor our engineering and project controls to your exact industry parameters.
          </p>
        </div>
      </section>

      {/* Main Interactive Sector Explorer */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Sector Navigation Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
            {INDUSTRIES_DATA.map((ind) => {
              const isSelected = selectedIndustry === ind.id;
              return (
                <button
                  key={ind.id}
                  id={`btn-select-ind-${ind.id}`}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`p-3.5 text-left border-2 text-xs font-black uppercase transition-all duration-150 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141414] text-[#FFD700] border-[#141414] shadow-md'
                      : 'bg-white text-[#141414] border-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  <span className="truncate block font-heading text-sm uppercase">{ind.title.split('&')[0]}</span>
                  <span className={`text-[10px] font-mono-tech mt-1 block font-black ${isSelected ? 'text-[#FFD700]' : 'text-[#666666]'}`}>
                    VIEW SECTOR &rarr;
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Sector Detailed Showcase */}
          <div className="p-8 sm:p-12 bg-white border-2 border-[#141414] shadow-md grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 6 cols: Sector Overview & Challenges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech font-black uppercase text-[#141414]">
                <Building2 className="w-4 h-4 text-[#141414]" /> Sector Analysis
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading text-[#141414] leading-tight">
                  {activeSector.title}
                </h2>
                <p className="text-sm font-black text-[#666666] font-mono-tech mt-1 uppercase">
                  {activeSector.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#141414] leading-relaxed font-body">
                {activeSector.description}
              </p>

              {/* Metric Callout */}
              <div className="p-4 bg-[#F5F5F2] border-2 border-[#141414]">
                <span className="text-[11px] font-mono-tech uppercase font-black text-[#141414] block mb-1">
                  Track Record &amp; Experience
                </span>
                <span className="text-sm font-bold text-[#141414]">
                  {activeSector.keyMetrics}
                </span>
              </div>

              {/* Key Engineering Challenges */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono-tech uppercase font-black text-[#141414] tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-[#141414]" /> Critical Sector Challenges
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#141414]">
                  {activeSector.keyChallenges.map((ch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-[#141414] mt-1.5 shrink-0"></span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 6 cols: Sector Image & Mint Solutions */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative overflow-hidden border-2 border-[#141414] aspect-[16/10] bg-neutral-900 shadow">
                <img
                  src={activeSector.image}
                  alt={activeSector.title}
                  className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-mono-tech uppercase font-black text-[#FFD700]">TYPICAL ASSET CLASSES</span>
                  <div className="text-xs font-bold text-neutral-200 mt-0.5">
                    {activeSector.typicalProjects.join(' • ')}
                  </div>
                </div>
              </div>

              {/* Our Engineered Solutions */}
              <div className="p-6 bg-[#141414] text-white border-2 border-neutral-800 space-y-3">
                <h4 className="text-xs font-mono-tech uppercase font-black text-[#FFD700] tracking-wider">
                  The Mint Projects Solution Framework
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
                  {activeSector.ourSolutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 shrink-0" />
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2 shadow"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Inquire for this Sector
                </button>
                <button
                  onClick={onOpenEstimator}
                  className="px-6 py-3.5 bg-[#F5F5F2] hover:bg-neutral-200 text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2"
                >
                  <Calculator className="w-3.5 h-3.5 text-[#141414]" /> Scope Configurator
                </button>
              </div>
            </div>

          </div>

          {/* Grid of All 10 Sectors */}
          <div className="pt-8 space-y-6">
            <SectionHeading
              tag="Full Portfolio"
              title="All 10 Specialized Industry Verticals."
              subtitle="Select any sector below to view its specific engineering methodologies."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES_DATA.map((ind) => (
                <div
                  key={ind.id}
                  onClick={() => {
                    setSelectedIndustry(ind.id);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="p-6 bg-white border-2 border-[#141414] hover:bg-[#FFD700] transition-all duration-200 cursor-pointer shadow-sm space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech uppercase font-black text-[#141414]">
                      SECTOR
                    </span>
                    <ChevronRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg font-black uppercase font-heading text-[#141414]">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-[#666666] line-clamp-2 group-hover:text-[#141414]">
                    {ind.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
