import React, { useState } from 'react';
import { PageId } from '../types';
import { APPROACH_STEPS } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Compass, 
  CalendarRange, 
  Eye, 
  Award, 
  PhoneCall, 
  Calculator,
  ShieldCheck,
  Cpu,
  FileCheck
} from 'lucide-react';

interface ApproachPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Hero Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Structured Project Lifecycle Framework
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            OUR APPROACH:<br />
            <span className="text-[#FFD700]">FROM VISION TO DELIVERY.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Our 5-stage project methodology applies mathematical control, independent technical scrutiny, and structured governance to eliminate surprises and maintain continuous client confidence.
          </p>
        </div>
      </section>

      {/* Interactive 5-Step Process Timeline */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Top Stage Indicator Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3">
            {APPROACH_STEPS.map((step, idx) => {
              const isSelected = selectedPhase === idx;
              return (
                <button
                  key={step.number}
                  id={`btn-timeline-step-${step.number}`}
                  onClick={() => setSelectedPhase(idx)}
                  className={`p-5 text-left border-2 transition-all duration-150 flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141414] text-white border-[#141414] shadow-md'
                      : 'bg-white text-[#141414] border-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl font-black font-mono-tech ${isSelected ? 'text-[#FFD700]' : 'text-[#141414]'}`}>
                    {step.number}
                  </div>
                  <div>
                    <h4 className="text-sm font-black font-heading uppercase mt-2">
                      {step.title}
                    </h4>
                    <p className={`text-[11px] font-bold line-clamp-1 mt-0.5 ${isSelected ? 'text-neutral-300' : 'text-[#666666]'}`}>
                      {step.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Phase Inspection Box */}
          {(() => {
            const current = APPROACH_STEPS[selectedPhase];
            return (
              <div className="p-8 sm:p-12 bg-white border-2 border-[#141414] shadow-md space-y-10">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b-2 border-[#141414]">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                      <span className="w-2.5 h-2.5 bg-[#FFD700]"></span>
                      PHASE {current.number} // {current.code}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading text-[#141414]">
                      {current.title}: {current.subtitle}
                    </h2>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={onOpenConsultation}
                      className="px-6 py-3 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition"
                    >
                      Discuss Phase Scope
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left (6 cols): Overview & Workstreams */}
                  <div className="lg:col-span-6 space-y-6">
                    <p className="text-base text-[#141414] leading-relaxed font-body">
                      {current.description}
                    </p>

                    <div className="space-y-3 pt-2">
                      <h4 className="text-xs font-mono-tech uppercase font-black text-[#141414] tracking-wider">
                        Workstreams &amp; Technical Execution Steps
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-[#141414]">
                        {current.detailedProcess.map((proc, i) => (
                          <li key={i} className="flex items-start gap-2.5 p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                            <span className="w-5 h-5 bg-[#141414] text-[#FFD700] font-mono-tech text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">
                              {i + 1}
                            </span>
                            <span className="font-bold">{proc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right (6 cols): Key Deliverables & Toolsets */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Deliverables Card */}
                    <div className="p-6 bg-[#141414] text-white border-2 border-neutral-800 space-y-4">
                      <div className="text-xs font-mono-tech uppercase text-[#FFD700] font-black flex items-center gap-2">
                        <FileCheck className="w-4 h-4" /> Official Engineering Deliverables
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                        {current.keyDeliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Software Tools & Standards */}
                    <div className="p-6 bg-[#F5F5F2] border-2 border-[#141414] space-y-3">
                      <div className="text-xs font-mono-tech uppercase text-[#141414] font-black flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-[#141414]" /> Control Platforms &amp; Global Standards
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {current.toolsAndStandards.map((tool, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-white text-[#141414] text-xs font-black font-mono-tech uppercase border border-[#141414] shadow-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Sequential 5-Step Deep Cards */}
          <div className="pt-8 space-y-8">
            <SectionHeading
              tag="Full Lifecycle"
              title="Sequential Phase Overview"
              subtitle="Review the entire 5-step journey that guides every project from blueprint to final handover."
            />

            <div className="space-y-6">
              {APPROACH_STEPS.map((step, idx) => (
                <div
                  key={step.number}
                  className="p-6 sm:p-8 bg-white border-2 border-[#141414] flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl font-black font-mono-tech text-[#141414] shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-black uppercase font-heading text-[#141414]">
                        {step.title}: {step.subtitle}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#666666] mt-1 max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPhase(idx);
                      window.scrollTo({ top: 350, behavior: 'smooth' });
                    }}
                    className="px-4 py-2 bg-[#F5F5F2] hover:bg-[#FFD700] text-[#141414] text-xs font-black font-mono-tech uppercase tracking-wider border-2 border-[#141414] transition shrink-0"
                  >
                    Inspect Phase &rarr;
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="p-8 bg-[#141414] text-white border-2 border-neutral-800 text-center space-y-4">
            <h3 className="text-2xl font-black uppercase font-heading text-white">
              Need a Custom Project Execution Framework?
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm max-w-xl mx-auto">
              Our project controls team will tailor the 5-step methodology to your contract model (EPC, Item Rate, or Turnkey).
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition"
              >
                Schedule Methodology Briefing
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
