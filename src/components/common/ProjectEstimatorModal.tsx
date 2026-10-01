import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, ShieldCheck, Download, Sparkles, Send } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, COMPANY_INFO } from '../../data/companyData';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultationWithData?: (data: any) => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultationWithData,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('commercial');
  const [projectScale, setProjectScale] = useState<string>('500k-1m');
  const [projectStage, setProjectStage] = useState<string>('pre-construction');
  const [selectedServices, setSelectedServices] = useState<string[]>(['pmc', 'ppc', 'cost-mgmt']);
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientCompany, setClientCompany] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  const scaleMultiplier = {
    'under-250k': { label: 'Under 250,000 Sq. Ft.', time: '14 - 18 Months', team: '4-6 Specialist Engineers' },
    '250k-500k': { label: '250,000 – 500,000 Sq. Ft.', time: '18 - 24 Months', team: '6-10 Specialist Engineers' },
    '500k-1m': { label: '500,000 – 1,000,000 Sq. Ft.', time: '24 - 32 Months', team: '10-15 Specialist Engineers' },
    'over-1m': { label: 'Over 1,000,000 Sq. Ft. (Mega-Project)', time: '30 - 42 Months', team: '15-25+ Integrated PMC Division' },
  }[projectScale] || { label: 'Custom Scale', time: '24 Months', team: 'Dedicated PMC Division' };

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      if (onOpenConsultationWithData) {
        onOpenConsultationWithData({
          industry: selectedIndustry,
          scale: projectScale,
          stage: projectStage,
          services: selectedServices,
          name: clientName,
          email: clientEmail,
          company: clientCompany,
        });
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white text-[#141414] border-4 border-[#141414] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#141414] text-white p-6 sm:p-8 flex items-start justify-between border-b-2 border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black uppercase mb-2">
              <Calculator className="w-3.5 h-3.5" /> Project Advisory & Scope Configurator
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-white">
              Configure Your Project Advisory Scope
            </h3>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Model your project requirements to receive recommended governance frameworks, control toolkits, and an instant advisory proposal.
            </p>
          </div>
          <button
            id="btn-close-estimator"
            onClick={onClose}
            className="p-2 text-white border-2 border-white hover:bg-[#FFD700] hover:text-[#141414] transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-8">
          {/* Step 1: Industry Selection */}
          <div>
            <label className="block text-xs font-black font-mono-tech uppercase text-[#141414] tracking-wider mb-3">
              Step 01 // Select Project Sector
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
              {INDUSTRIES_DATA.map((ind) => {
                const isSelected = selectedIndustry === ind.id;
                return (
                  <button
                    key={ind.id}
                    id={`btn-est-industry-${ind.id}`}
                    type="button"
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-3 text-left border-2 text-xs font-black uppercase transition-all duration-150 ${
                      isSelected
                        ? 'bg-[#141414] text-[#FFD700] border-[#141414]'
                        : 'bg-[#F5F5F2] text-[#141414] border-[#141414] hover:bg-[#FFD700]'
                    }`}
                  >
                    <span className="block truncate">{ind.title.split('&')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Project Scale & Stage */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black font-mono-tech uppercase text-[#141414] tracking-wider mb-2">
                Step 02 // Built-Up Scale / Area
              </label>
              <select
                id="select-est-scale"
                value={projectScale}
                onChange={(e) => setProjectScale(e.target.value)}
                className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] font-bold text-sm focus:bg-white outline-none"
              >
                <option value="under-250k">Under 250,000 Sq. Ft. (Boutique / Single Asset)</option>
                <option value="250k-500k">250,000 – 500,000 Sq. Ft. (Mid-Scale Commercial/Residential)</option>
                <option value="500k-1m">500,000 – 1,000,000 Sq. Ft. (Large-Scale Development)</option>
                <option value="over-1m">Over 1,000,000 Sq. Ft. (Mega-Project / Integrated Campus)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-black font-mono-tech uppercase text-[#141414] tracking-wider mb-2">
                Step 03 // Current Project Stage
              </label>
              <select
                id="select-est-stage"
                value={projectStage}
                onChange={(e) => setProjectStage(e.target.value)}
                className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] font-bold text-sm focus:bg-white outline-none"
              >
                <option value="pre-construction">Pre-Construction (Feasibility, Design & BOQ Baseline)</option>
                <option value="tendering">Procurement & Tendering Phase</option>
                <option value="execution">Active Construction Execution & Structural Works</option>
                <option value="recovery">Distressed Project Recovery & Delay Auditing</option>
                <option value="commissioning">Final MEP Testing, Snagging & Handover</option>
              </select>
            </div>
          </div>

          {/* Step 4: Required Consultancy Modules */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="block text-xs font-black font-mono-tech uppercase text-[#141414] tracking-wider">
                Step 04 // Required Advisory & Engineering Modules ({selectedServices.length} Selected)
              </label>
              <span className="text-xs text-[#666666] font-bold">Multi-select available</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {SERVICES_DATA.map((srv) => {
                const isChecked = selectedServices.includes(srv.id);
                return (
                  <div
                    key={srv.id}
                    onClick={() => toggleService(srv.id)}
                    className={`cursor-pointer p-3 border-2 text-xs transition-all flex items-start gap-2.5 ${
                      isChecked
                        ? 'bg-[#141414] text-[#FFD700] border-[#141414]'
                        : 'bg-[#F5F5F2] text-[#141414] border-[#141414] hover:border-black'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 accent-[#FFD700]"
                    />
                    <div>
                      <div className="font-black uppercase">{srv.shortTitle}</div>
                      <div className={`text-[11px] mt-0.5 line-clamp-1 ${isChecked ? 'text-neutral-300' : 'text-[#666666]'}`}>
                        {srv.tagline}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Configured Advisory Plan Preview */}
          <div className="p-5 bg-[#141414] text-white border-2 border-neutral-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b-2 border-neutral-800 gap-2">
              <div>
                <span className="text-[11px] font-mono-tech text-[#FFD700] uppercase font-black tracking-wider block">Recommended Governance Architecture</span>
                <h4 className="text-lg font-black uppercase text-white">Integrated Project Controls & PMC Package</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black">Est. Timeline: {scaleMultiplier.time}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-neutral-900 border-2 border-neutral-800">
                <span className="text-neutral-400 block mb-1 font-bold">Recommended Deployment</span>
                <span className="font-black text-[#FFD700] text-sm uppercase">{scaleMultiplier.team}</span>
              </div>
              <div className="p-3 bg-neutral-900 border-2 border-neutral-800">
                <span className="text-neutral-400 block mb-1 font-bold">Control Tools Deployed</span>
                <span className="font-black text-white text-sm">Primavera P6 + BIM 4D + EVM</span>
              </div>
              <div className="p-3 bg-neutral-900 border-2 border-neutral-800">
                <span className="text-neutral-400 block mb-1 font-bold">Standard Compliance</span>
                <span className="font-black text-white text-sm">FIDIC / ISO 9001:2015 / NBC</span>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          {isSubmitted ? (
            <div className="p-6 bg-[#F5F5F2] border-2 border-[#141414] text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-[#141414] mx-auto" />
              <h4 className="text-lg font-black uppercase text-[#141414]">Scope Configuration Submitted Successfully</h4>
              <p className="text-sm text-[#141414] max-w-md mx-auto">
                A Senior Partner from Mint Projects International Engineering will review your scope parameters and furnish a customized Technical-Commercial Advisory Brief within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmitInquiry} className="p-5 bg-[#F5F5F2] border-2 border-[#141414] space-y-4">
              <div className="flex items-center gap-2 text-sm font-black uppercase text-[#141414]">
                <Send className="w-4 h-4 text-[#141414]" /> Receive Formal Scope & Fee Proposal
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Your Full Name *"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="p-2.5 bg-white border-2 border-[#141414] text-xs text-[#141414] focus:bg-white outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Company / Organization *"
                  value={clientCompany}
                  onChange={(e) => setClientCompany(e.target.value)}
                  className="p-2.5 bg-white border-2 border-[#141414] text-xs text-[#141414] focus:bg-white outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Corporate Email Address *"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="p-2.5 bg-white border-2 border-[#141414] text-xs text-[#141414] focus:bg-white outline-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-[#141414] font-black flex items-center gap-1.5 uppercase font-mono-tech">
                  <ShieldCheck className="w-4 h-4 text-[#141414]" /> Non-Disclosure (NDA) Protected Consultation
                </span>
                <button
                  id="btn-submit-estimator"
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2 shadow-md"
                >
                  Generate & Send Consultation Brief <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
