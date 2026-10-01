import React from 'react';
import { PageId } from '../types';
import { CORE_VALUES, COMPANY_INFO, COMPANY_STATS } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Users2, 
  CheckCircle2, 
  Leaf, 
  ArrowRight, 
  Building2, 
  Compass, 
  Layers,
  PhoneCall
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
}

const VALUE_ICONS: Record<string, React.ReactNode> = {
  'ShieldCheck': <ShieldCheck className="w-6 h-6 text-[#FFD700]" />,
  'Award': <Award className="w-6 h-6 text-[#FFD700]" />,
  'Cpu': <Cpu className="w-6 h-6 text-[#FFD700]" />,
  'Users2': <Users2 className="w-6 h-6 text-[#FFD700]" />,
  'CheckCircle2': <CheckCircle2 className="w-6 h-6 text-[#FFD700]" />,
  'Leaf': <Leaf className="w-6 h-6 text-[#FFD700]" />,
};

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenConsultation }) => {
  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Corporate Profile &bull; Governance &bull; Heritage
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight max-w-4xl text-white leading-tight">
            Engineering Excellence.<br />
            <span className="text-[#FFD700]">Independent Project Confidence.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Mint Projects International Engineering Pvt. Ltd. was founded on a singular principle: to deliver unbiased, mathematically rigorous engineering and project management consultancy that safeguards our clients&apos; capital, schedule, and quality baselines.
          </p>
        </div>
      </section>

      {/* Section: Who We Are & Our Story */}
      <section className="py-20 bg-white border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Who We Are */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                tag="Who We Are"
                title="A Modern, Trust-First Engineering Consultancy."
                className="mb-6"
              />
              <p className="text-base text-[#141414] leading-relaxed font-body">
                <strong>Mint Projects International Engineering Pvt. Ltd.</strong> is an independent multi-disciplinary consultancy providing Project Management Consultancy (PMC), Construction Project Consultancy, Structural &amp; MEP Engineering Advisory, and Project Controls.
              </p>
              <p className="text-base text-[#666666] leading-relaxed font-body">
                We operate across commercial high-rises, residential townships, public and private infrastructure, logistics parks, healthcare centers, and industrial facilities. Unlike contracting companies, we do not participate in construction bids, guaranteeing 100% fiduciary objectivity for developers, landowners, financial institutions, and corporate boards.
              </p>
              
              <div className="p-5 bg-[#F5F5F2] border-2 border-[#141414] flex items-start gap-3.5">
                <ShieldCheck className="w-6 h-6 text-[#141414] shrink-0 mt-0.5" />
                <div className="text-xs text-[#141414]">
                  <strong className="text-[#141414] block font-black uppercase mb-0.5">Strict Fiduciary Independence</strong>
                  We maintain zero commercial conflicts with contractors or vendors, ensuring that all audits, bill verifications, and quality non-conformances are enforced purely in the client’s best interest.
                </div>
              </div>
            </div>

            {/* Our Story */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                tag="Our Story"
                title="Engineered for Complex Real-World Execution."
                className="mb-6"
              />
              <p className="text-base text-[#141414] leading-relaxed font-body">
                The modern built environment faces compounding risks: fluctuating material commodity prices, complex supply chains, stringent regulatory codes, and intricate architectural geometries. Traditional fragmented management models consistently fail to anticipate delays.
              </p>
              <p className="text-base text-[#666666] leading-relaxed font-body">
                Mint Projects was established to bridge this critical divide. By uniting veteran structural engineers, certified PMP project managers, FIDIC contract specialists, and BIM modelers under an integrated governance model, we empower clients with true predictive control from day one.
              </p>

              {/* Milestone Box */}
              <div className="p-6 bg-[#141414] text-white border-l-8 border-[#FFD700] space-y-3">
                <span className="text-xs font-mono-tech text-[#FFD700] uppercase tracking-wider font-black">
                  Operational Milestone
                </span>
                <div className="text-xl font-black uppercase font-heading">
                  18+ Million Sq. Ft. Managed Across Key Global &amp; National Corridors
                </div>
                <p className="text-xs text-neutral-400">
                  With active engineering operations in India, the UAE, and cross-border advisory across Southeast Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-20 bg-[#F5F5F2] border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 sm:p-10 bg-white border-2 border-[#141414] hover:border-black transition shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-[#141414] text-[#FFD700] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono-tech font-black uppercase tracking-widest text-[#141414]">
                Our Vision
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#141414]">
                To become a trusted global engineering and project consultancy recognized for innovation, technical excellence, sustainable practices, and successful project delivery.
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Setting the definitive international benchmark for project certainty, ethical governance, and structural resilience across every sector we serve.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 bg-white border-2 border-[#141414] hover:border-black transition shadow-sm space-y-4 relative overflow-hidden">
              <div className="w-12 h-12 bg-[#141414] text-[#FFD700] flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono-tech font-black uppercase tracking-widest text-[#141414]">
                Our Mission
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#141414]">
                To provide reliable, innovative, and value-driven engineering and project consultancy services.
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                Empowering real estate developers, investors, and institutions through advanced project controls, rigorous quality assurance, value engineering, and seamless multi-stakeholder coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-28 bg-white border-b-2 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Guiding Principles"
            title="Our Core Values"
            subtitle="The foundational engineering ethics and operational commitments that govern every site inspection, peer review, and commercial audit."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const icon = VALUE_ICONS[val.iconName] || <ShieldCheck className="w-6 h-6 text-[#FFD700]" />;
              return (
                <div
                  key={val.name}
                  className="p-7 bg-[#F5F5F2] border-2 border-[#141414] hover:border-black transition-all duration-200 space-y-3.5 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-white text-[#141414] border-2 border-[#141414] group-hover:bg-[#141414] group-hover:text-[#FFD700] flex items-center justify-center transition-colors">
                      {icon}
                    </div>
                    <span className="text-[10px] font-mono-tech uppercase font-black text-[#141414]">
                      CORE VALUE
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black uppercase font-heading text-[#141414]">
                      {val.name}
                    </h3>
                    <div className="text-xs font-bold font-mono-tech text-[#666666] mt-0.5 uppercase">
                      {val.principle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed font-body">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Compliance Section */}
      <section className="py-20 bg-[#141414] text-white border-b-2 border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono-tech uppercase font-black text-[#FFD700]">
                Accreditations &amp; Institutional Rigor
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase font-heading text-white">
                Engineered to International Quality &amp; Safety Codes.
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                We embed formal management systems into every stage of project delivery. All engineering recalculations, drawing peer reviews, concrete batch sampling, and site safety audits comply strictly with global benchmarks.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4 text-xs font-mono-tech">
              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                <span className="text-[#FFD700] font-black block">ISO 9001:2015</span>
                <span className="text-neutral-300">Quality Management System (QMS)</span>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                <span className="text-[#FFD700] font-black block">ISO 14001:2015</span>
                <span className="text-neutral-300">Environmental Management System (EMS)</span>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                <span className="text-[#FFD700] font-black block">ISO 45001:2018</span>
                <span className="text-neutral-300">Occupational Health &amp; Safety (OH&amp;S)</span>
              </div>
              <div className="p-4 bg-neutral-900 border border-neutral-800 space-y-1">
                <span className="text-[#FFD700] font-black block">FIDIC / PMI</span>
                <span className="text-neutral-300">International Contract &amp; Schedule Frameworks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#141414]">
            Ready to bring engineering precision to your next development?
          </h2>
          <p className="text-sm text-[#666666] mt-2 mb-6">
            Consult with our partners regarding pre-construction planning, structural peer reviews, or full-scope PMC.
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition inline-flex items-center gap-2 shadow"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Consult Our Engineering Practice</span>
          </button>
        </div>
      </section>
    </div>
  );
};
