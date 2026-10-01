import React, { useState } from 'react';
import { PageId } from '../types';
import { 
  SERVICES_DATA, 
  INDUSTRIES_DATA, 
  APPROACH_STEPS, 
  WHY_MINT_REASONS, 
  COMPANY_STATS,
  COMPANY_INFO 
} from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  HardHat, 
  Compass, 
  CalendarRange, 
  Coins, 
  BadgeCheck, 
  FileSpreadsheet, 
  Eye, 
  Leaf, 
  Wrench, 
  BarChart3, 
  Users2, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  PhoneCall, 
  Calculator,
  Building2,
  Cpu,
  CornerDownRight
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: (serviceId?: string) => void;
  onOpenEstimator: () => void;
}

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'Layers': <Layers className="w-6 h-6" />,
  'HardHat': <HardHat className="w-6 h-6" />,
  'Compass': <Compass className="w-6 h-6" />,
  'CalendarRange': <CalendarRange className="w-6 h-6" />,
  'Coins': <Coins className="w-6 h-6" />,
  'BadgeCheck': <BadgeCheck className="w-6 h-6" />,
  'FileSpreadsheet': <FileSpreadsheet className="w-6 h-6" />,
  'Eye': <Eye className="w-6 h-6" />,
  'Leaf': <Leaf className="w-6 h-6" />,
};

const WHY_ICONS: Record<string, React.ReactNode> = {
  'Wrench': <Wrench className="w-5 h-5 text-[#FFD700]" />,
  'Compass': <Compass className="w-5 h-5 text-[#FFD700]" />,
  'BarChart3': <BarChart3 className="w-5 h-5 text-[#FFD700]" />,
  'Users2': <Users2 className="w-5 h-5 text-[#FFD700]" />,
  'ShieldCheck': <ShieldCheck className="w-5 h-5 text-[#FFD700]" />,
  'TrendingUp': <TrendingUp className="w-5 h-5 text-[#FFD700]" />,
};

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
}) => {
  const [activeApproachStep, setActiveApproachStep] = useState<number>(0);

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO                                                          */}
      {/* ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center bg-[#F5F5F2] border-b-2 border-[#141414] overflow-hidden pt-8 pb-16 lg:py-20">
        {/* Subtle engineering grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Architectural Typography & CTAs (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Category pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-[#141414] text-xs font-mono-tech uppercase font-black text-[#141414] shadow-sm">
                <span className="w-2.5 h-2.5 bg-[#FFD700]"></span>
                <span>Engineering Consultancy &bull; Project Management</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-1">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black uppercase tracking-tight text-[#141414] leading-[1.02]">
                  Engineering Excellence.
                </h1>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-black uppercase tracking-tight text-[#141414] leading-[1.04] bg-[#FFD700] px-2 inline-block">
                  Project Confidence.
                </h2>
              </div>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg lg:text-xl text-[#666666] font-body leading-relaxed max-w-2xl">
                Mint Projects International Engineering Pvt. Ltd. delivers professional engineering, project management, and construction consultancy solutions designed to bring clarity, control, and confidence to every stage of project delivery.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  id="hero-btn-explore-services"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-8 py-4 bg-[#141414] hover:bg-black text-white text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-md group border border-[#141414]"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 text-[#FFD700] group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  id="hero-btn-talk-expert"
                  onClick={() => onOpenConsultation()}
                  className="px-8 py-4 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] text-xs sm:text-sm font-black uppercase tracking-wider transition-all duration-150 flex items-center justify-center gap-2 shadow-md border-2 border-[#141414]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Talk to an Expert</span>
                </button>
              </div>

              {/* Credibility Micro Badges */}
              <div className="pt-6 border-t-2 border-neutral-300 flex flex-wrap items-center gap-6 text-xs text-[#141414] font-mono-tech font-bold">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>ISO 9001:2015 Quality Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>FIDIC Contract Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#141414]" />
                  <span>Earned Value (EVM) Controls</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Geometry Hero Graphic (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Structural Image Container with Architectural Geometry Frame */}
                <div className="relative overflow-hidden border-2 border-[#141414] shadow-2xl bg-[#141414] aspect-[4/5] group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern high-performance engineering & infrastructure geometry"
                    className="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />

                  {/* Blueprint Grid Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                  
                  {/* Technical Coordinates Stamp */}
                  <div className="absolute top-4 left-4 p-2 bg-[#141414]/90 backdrop-blur text-white text-[10px] font-mono-tech border border-[#FFD700]/40">
                    <div className="text-[#FFD700] font-bold">MINT // ENG-STRUCTURAL-01</div>
                    <div className="text-neutral-400">TOLERANCE: ±2.0MM // 3D-BIM</div>
                  </div>

                  {/* Floating Metric Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#141414]/95 backdrop-blur border border-neutral-800 text-white space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-mono-tech text-neutral-400 border-b border-neutral-800 pb-1.5 font-bold">
                      <span>CAPITAL GOVERNANCE</span>
                      <span className="text-[#FFD700]">ACTIVE BENCHMARK</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div>
                        <div className="text-xl font-black text-[#FFD700] font-mono-tech">18M+</div>
                        <div className="text-[11px] text-neutral-300 font-bold uppercase">Sq. Ft. Managed</div>
                      </div>
                      <div>
                        <div className="text-xl font-black text-white font-mono-tech">99.4%</div>
                        <div className="text-[11px] text-neutral-300 font-bold uppercase">Budget Accuracy</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Decorative Geometric Crosshairs */}
                <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#FFD700] pointer-events-none"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#FFD700] pointer-events-none"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — INTRODUCTION                                                  */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b-2 border-[#141414] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Introduction"
            title="Building Better Projects Through Better Engineering."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left side: Short Company Introduction (6 cols) */}
            <div className="lg:col-span-6 space-y-6 text-[#141414] leading-relaxed text-base sm:text-lg">
              <p>
                <strong>Mint Projects International Engineering Pvt. Ltd.</strong> is a dedicated engineering and project management consultancy firm committed to solving the fundamental complexities of modern development.
              </p>
              <p className="text-[#666666]">
                We combine deep technical engineering rigor with mathematical project controls, strict quality assurance, and independent contract administration. By operating as an unbiased technical partner to developers, institutional investors, and corporate builders, we transform complex design visions into predictable, high-value, and defect-free realities.
              </p>
              
              <div className="pt-2">
                <button
                  id="intro-btn-about"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-black font-mono-tech text-[#141414] hover:bg-[#FFD700] px-2 py-1 uppercase tracking-wider group transition"
                >
                  <span>Learn More About Our Heritage &amp; Values</span>
                  <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right side: Large Architectural Typography (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 bg-[#141414] text-white border-l-8 border-[#FFD700] shadow-xl space-y-6">
                <div className="text-xs font-mono-tech uppercase tracking-widest text-[#FFD700] font-black">
                  Core Operational Pillars
                </div>

                <div className="space-y-4 font-heading font-black text-2xl sm:text-3xl md:text-4xl tracking-tight leading-none uppercase">
                  <div className="pb-3 border-b border-neutral-800 flex items-center justify-between group">
                    <span className="text-white group-hover:text-[#FFD700] transition">Engineering</span>
                    <span className="text-xs font-mono-tech text-neutral-400 font-bold">01 // TECHNICAL</span>
                  </div>
                  <div className="pb-3 border-b border-neutral-800 flex items-center justify-between group">
                    <span className="text-white group-hover:text-[#FFD700] transition">Project Management</span>
                    <span className="text-xs font-mono-tech text-neutral-400 font-bold">02 // GOVERNANCE</span>
                  </div>
                  <div className="flex items-center justify-between group">
                    <span className="text-white group-hover:text-[#FFD700] transition">Construction Consultancy</span>
                    <span className="text-xs font-mono-tech text-neutral-400 font-bold">03 // EXECUTION</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-neutral-400 font-mono-tech font-bold">
                  + DELIVERING PREDICTABILITY ACROSS ALL 3 LIFECYCLE VECTORS
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 pt-12 border-t-2 border-neutral-200">
            {COMPANY_STATS.map((stat, idx) => (
              <div key={idx} className="p-5 bg-[#F5F5F2] border-2 border-[#141414]">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black font-mono-tech text-[#141414]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-black uppercase text-[#141414] mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-[#666666] mt-0.5 leading-tight font-medium">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — WHAT WE DO (SERVICES GRID)                                   */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F5F2] border-b-2 border-[#141414] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              tag="What We Do"
              title="Comprehensive Expertise. One Trusted Partner."
              subtitle="From pre-construction conceptual feasibility to final account reconciliation, we provide specialized engineering and project management services."
              className="mb-0"
            />
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-white border-2 border-[#141414] hover:bg-[#FFD700] text-xs font-black font-mono-tech uppercase tracking-wider transition flex items-center gap-1.5 shadow-sm"
              >
                View Detailed Service Matrix <ArrowRight className="w-3.5 h-3.5 text-[#141414]" />
              </button>
            </div>
          </div>

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, index) => {
              const icon = SERVICE_ICONS[service.iconName] || <Layers className="w-6 h-6" />;
              return (
                <div
                  key={service.id}
                  id={`home-service-card-${service.id}`}
                  onClick={() => {
                    onNavigate('service-detail', service.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="p-7 bg-white border-2 border-[#141414] hover:border-black transition-all duration-200 hover:shadow-xl flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  {/* Yellow top accent bar on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div>
                    {/* Icon & Service Index */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 bg-[#F5F5F2] text-[#141414] group-hover:bg-[#141414] group-hover:text-[#FFD700] flex items-center justify-center transition-colors border-2 border-[#141414]">
                        {icon}
                      </div>
                      <span className="text-xs font-mono-tech text-[#141414] font-black">
                        0{index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black uppercase font-heading text-[#141414] group-hover:bg-[#FFD700] transition-colors leading-tight inline-block">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-3 text-xs sm:text-sm text-[#666666] leading-relaxed font-body">
                      {service.description}
                    </p>
                  </div>

                  {/* Explore Service Interaction Link */}
                  <div className="mt-6 pt-4 border-t-2 border-neutral-200 flex items-center justify-between text-xs font-black font-mono-tech uppercase text-[#141414] group-hover:text-black">
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — OUR APPROACH (5-STEP HORIZONTAL PROCESS)                      */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b-2 border-[#141414] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Our Methodology"
            title="From Vision to Successful Delivery."
            subtitle="A structured 5-step engineering lifecycle framework designed to eliminate uncertainties and maintain complete control over time, cost, and quality."
          />

          {/* 5-Step Horizontal Process Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 mb-8">
            {APPROACH_STEPS.map((step, idx) => {
              const isActive = activeApproachStep === idx;
              return (
                <button
                  key={step.number}
                  id={`btn-approach-step-${step.number}`}
                  type="button"
                  onClick={() => setActiveApproachStep(idx)}
                  className={`p-5 text-left border-2 transition-all duration-200 relative ${
                    isActive
                      ? 'bg-[#141414] text-white border-[#141414] shadow-lg ring-2 ring-[#FFD700]'
                      : 'bg-[#F5F5F2] text-[#141414] border-[#141414] hover:bg-neutral-200'
                  }`}
                >
                  <div className={`text-2xl sm:text-3xl font-black font-mono-tech ${isActive ? 'text-[#FFD700]' : 'text-neutral-500'}`}>
                    {step.number}
                  </div>
                  <div className="text-sm font-black uppercase font-heading mt-1">
                    {step.title}
                  </div>
                  <div className={`text-[11px] mt-1 line-clamp-1 ${isActive ? 'text-neutral-300' : 'text-[#666666]'}`}>
                    {step.subtitle}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card (Engineering Drawing Inspired) */}
          {(() => {
            const currentStep = APPROACH_STEPS[activeApproachStep];
            return (
              <div className="p-8 sm:p-10 bg-[#141414] text-white border-2 border-[#141414] shadow-2xl relative overflow-hidden">
                {/* Blueprint lines on dark */}
                <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black">
                      PHASE {currentStep.number} // {currentStep.code}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading tracking-tight text-white">
                      {currentStep.title}: {currentStep.subtitle}
                    </h3>
                    <p className="text-sm text-neutral-300 leading-relaxed font-body">
                      {currentStep.description}
                    </p>
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          onNavigate('approach');
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="text-xs font-mono-tech text-[#FFD700] font-black uppercase tracking-wider hover:underline inline-flex items-center gap-1.5"
                      >
                        Explore Full Methodology Matrix <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Process Checklist */}
                    <div className="p-5 bg-neutral-900 border border-neutral-800 space-y-3">
                      <div className="text-xs font-mono-tech uppercase text-[#FFD700] font-black">
                        Key Workstreams &amp; Actions
                      </div>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {currentStep.detailedProcess.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#FFD700] mt-1.5 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables */}
                    <div className="p-5 bg-neutral-900 border border-neutral-800 space-y-3">
                      <div className="text-xs font-mono-tech uppercase text-[#FFD700] font-black">
                        Primary Engineering Deliverables
                      </div>
                      <ul className="space-y-2 text-xs text-neutral-300">
                        {currentStep.keyDeliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD700] mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — WHY MINT PROJECTS (6 REASONS)                                 */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F5F2] border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Why Mint Projects"
            title="Built on Expertise. Driven by Results."
            subtitle="Six core reasons why premier developers, institutional funds, and corporate enterprises choose Mint Projects International Engineering as their primary consultancy partner."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_MINT_REASONS.map((reason) => {
              const icon = WHY_ICONS[reason.iconName] || <ShieldCheck className="w-5 h-5 text-[#FFD700]" />;
              return (
                <div
                  key={reason.number}
                  className="p-7 bg-white border-2 border-[#141414] hover:border-black transition duration-150 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-[#141414] text-[#FFD700] flex items-center justify-center">
                      {icon}
                    </div>
                    <span className="text-xs font-mono-tech font-black text-[#141414]">
                      {reason.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase font-heading text-[#141414]">
                    {reason.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — INDUSTRIES (10 SECTOR VISUAL GRID)                           */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionHeading
              tag="Sectors & Experience"
              title="Expertise Across Industries."
              subtitle="Deep technical capabilities tailored to the distinct structural, operational, and regulatory demands of 10 key sectors."
              className="mb-0"
            />
            <div className="mt-4 md:mt-0">
              <button
                onClick={() => {
                  onNavigate('industries');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-5 py-2.5 bg-[#141414] text-white hover:bg-black text-xs font-black font-mono-tech uppercase tracking-wider transition flex items-center gap-1.5 shadow border border-[#141414]"
              >
                Explore All Sectors <ArrowRight className="w-3.5 h-3.5 text-[#FFD700]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                id={`home-ind-${ind.id}`}
                onClick={() => {
                  onNavigate('industries', ind.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="group relative overflow-hidden border-2 border-[#141414] hover:border-black transition-all duration-300 aspect-[3/4] cursor-pointer bg-[#141414]"
              >
                {/* Background Image with monochrome treatment */}
                <img
                  src={ind.image}
                  alt={ind.title}
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Yellow Hover Bottom Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#FFD700] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>

                {/* Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-mono-tech text-[#FFD700] uppercase font-black tracking-wider mb-1">
                    SECTOR
                  </span>
                  <h4 className="text-sm sm:text-base font-black uppercase font-heading leading-tight group-hover:text-[#FFD700] transition-colors">
                    {ind.title}
                  </h4>
                  <div className="text-[11px] text-neutral-300 line-clamp-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {ind.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — COMPANY STATEMENT (BOLD BLACK BACKGROUND)                     */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-[#141414] text-white border-b-2 border-neutral-800 relative overflow-hidden">
        {/* Engineering blueprint background */}
        <div className="absolute inset-0 bg-blueprint-lines opacity-15 pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black uppercase tracking-widest">
            + THE MINT COMMITMENT
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-[#FFD700] leading-tight">
              WE DON&apos;T JUST MANAGE PROJECTS.
            </h2>
            <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
              WE BUILD CONFIDENCE IN EVERY STAGE OF THE JOURNEY.
            </h3>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-body">
            Through precision engineering, authoritative project controls, and fiduciary integrity, we ensure that every client asset is protected against schedule slippages, cost escalations, and structural compromises.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs font-mono-tech font-bold text-neutral-300">
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-700">
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-700">
              FIDIC CONTRACT PROTOCOLS
            </span>
            <span className="px-3 py-1 bg-neutral-900 border border-neutral-700">
              BIM 4D/5D INTEGRATED
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — CALL TO ACTION                                                */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#F5F5F2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 bg-white border-2 border-[#141414] shadow-2xl relative overflow-hidden text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech font-black uppercase text-[#141414]">
              <span className="w-2.5 h-2.5 bg-[#FFD700]"></span>
              <span>Engage Our Advisory Practice</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase font-heading text-[#141414] tracking-tight">
              Let&apos;s Build Better Projects Together.
            </h2>

            <p className="text-[#666666] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Whether you are planning a new development, managing an ongoing project, or looking to improve project performance, our team is ready to support your journey.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-btn-start-conversation"
                onClick={() => onOpenConsultation()}
                className="w-full sm:w-auto px-8 py-4 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#141414] transition-all duration-150 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="cta-btn-scope-estimator"
                onClick={onOpenEstimator}
                className="w-full sm:w-auto px-8 py-4 bg-[#141414] hover:bg-black text-white font-black text-xs sm:text-sm uppercase tracking-wider border-2 border-[#141414] transition-all duration-150 flex items-center justify-center gap-2 shadow-md"
              >
                <Calculator className="w-4 h-4 text-[#FFD700]" />
                <span>Scope &amp; Fee Configurator</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
