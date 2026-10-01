import React, { useState } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO, OFFICE_LOCATIONS, SERVICES_DATA, INDUSTRIES_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Linkedin, 
  Clock, 
  Building2, 
  Globe2,
  FileCheck,
  Calculator
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenEstimator: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenEstimator }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Commercial & Corporate Real Estate',
    projectLocation: '',
    builtUpArea: '500,000 – 1,000,000 Sq. Ft.',
    currentStage: 'Pre-Construction & Design',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeOffice, setActiveOffice] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Global Engineering Advisory &bull; Inquiries
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            LET&apos;S DISCUSS<br />
            <span className="text-[#FFD700]">YOUR PROJECT.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Connect directly with our senior leadership for project management consultancy, structural peer reviews, cost planning, or independent site monitoring.
          </p>
        </div>
      </section>

      {/* Main Grid: Consultation Form & Direct Inquiries */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left 7 cols: Comprehensive Consultation Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border-2 border-[#141414] shadow-md space-y-6">
              <div className="border-b-2 border-[#141414] pb-4">
                <span className="text-xs font-mono-tech uppercase font-black text-[#141414]">
                  Consultation Request Form
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading text-[#141414] mt-1">
                  Start an Engineering Consultation
                </h2>
                <p className="text-xs text-[#666666] mt-1">
                  All submissions are strictly confidential and protected by standard NDA protocols.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-[#F5F5F2] p-8 border-2 border-[#141414]">
                  <div className="w-16 h-16 bg-[#FFD700] text-[#141414] border-2 border-[#141414] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#141414]">
                    Project Inquiry Successfully Transmitted
                  </h3>
                  <p className="text-sm text-[#141414] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. A Senior Engineering Partner from Mint Projects International will review your project parameters and contact you at <strong>{formData.email}</strong> within 24 business hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 bg-[#141414] text-[#FFD700] text-xs font-mono-tech font-black uppercase border-2 border-[#141414] hover:bg-[#FFD700] hover:text-[#141414] transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Malhotra"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Infrastructure Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="v.malhotra@apexinfra.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Phone / Direct Line *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98110 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Project Type & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Project Sector / Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none font-bold"
                      >
                        {INDUSTRIES_DATA.map((ind) => (
                          <option key={ind.id} value={ind.title}>
                            {ind.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Project Location (City / Region)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. NCR / Bengaluru / Mumbai / Dubai"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                      />
                    </div>
                  </div>

                  {/* Scale & Stage */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Estimated Built-Up Area
                      </label>
                      <select
                        value={formData.builtUpArea}
                        onChange={(e) => setFormData({ ...formData, builtUpArea: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none font-bold"
                      >
                        <option value="under-250k">Under 250,000 Sq. Ft.</option>
                        <option value="250k-500k">250,000 – 500,000 Sq. Ft.</option>
                        <option value="500k-1m">500,000 – 1,000,000 Sq. Ft.</option>
                        <option value="over-1m">Over 1,000,000 Sq. Ft. (Mega-Project)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                        Current Project Lifecycle Stage
                      </label>
                      <select
                        value={formData.currentStage}
                        onChange={(e) => setFormData({ ...formData, currentStage: e.target.value })}
                        className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none font-bold"
                      >
                        <option value="concept">Concept &amp; Feasibility</option>
                        <option value="pre-construction">Pre-Construction &amp; Design</option>
                        <option value="procurement">Tendering &amp; Procurement</option>
                        <option value="active-construction">Active Construction on Site</option>
                        <option value="recovery">Distressed Project Recovery</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono-tech font-black uppercase text-[#141414] mb-1">
                      Project Scope Description &amp; Technical Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please outline the project objectives, primary technical challenges, expected milestone deadlines, or specific consultancy packages required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button & Security Note */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-[11px] text-[#141414] font-black flex items-center gap-1.5 font-mono-tech uppercase">
                      <ShieldCheck className="w-4 h-4 text-[#141414] shrink-0" />
                      Fiduciary Confidentiality Guaranteed
                    </span>

                    <button
                      id="btn-submit-contact-form"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2 shadow disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Submit Project Inquiry'} <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right 5 cols: Corporate Contact Details & Regional Hubs */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Touchpoints Box */}
              <div className="p-8 bg-[#141414] text-white border-2 border-neutral-800 shadow-md space-y-6">
                <div>
                  <span className="text-xs font-mono-tech uppercase font-black text-[#FFD700]">
                    Direct Touchpoints
                  </span>
                  <h3 className="text-xl font-black uppercase font-heading text-white mt-1">
                    Corporate Headquarters
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-neutral-300 font-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#FFD700] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-bold">New Delhi / Gurugram</strong>
                      Level 8, Worldmark 2, Aerocity, New Delhi, 110037, India
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#FFD700] shrink-0" />
                    <div>
                      <strong className="text-white block font-bold">Direct Phone</strong>
                      +91 (011) 4982-3000 / +91 98110 92340
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#FFD700] shrink-0" />
                    <div>
                      <strong className="text-white block font-bold">General Inquiries</strong>
                      contact@mintprojectsinternational.com
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#FFD700] shrink-0" />
                    <div>
                      <strong className="text-white block font-bold">Operating Hours</strong>
                      Monday – Friday: 08:30 – 18:30 IST
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t-2 border-neutral-800 flex items-center justify-between text-xs font-mono-tech">
                  <span className="text-neutral-400 font-bold">CONNECT ON LINKEDIN:</span>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#FFD700] hover:underline flex items-center gap-1 font-black"
                  >
                    <Linkedin className="w-4 h-4" /> Mint Projects International
                  </a>
                </div>
              </div>

              {/* Regional Office Hubs Selector */}
              <div className="p-6 bg-white border-2 border-[#141414] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech uppercase font-black text-[#141414] flex items-center gap-1.5">
                    <Globe2 className="w-4 h-4 text-[#141414]" /> Regional Presence
                  </span>
                  <span className="text-[10px] font-mono-tech font-bold text-[#666666]">4 LOCATIONS</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {OFFICE_LOCATIONS.map((loc, idx) => (
                    <button
                      key={loc.city}
                      onClick={() => setActiveOffice(idx)}
                      className={`p-2.5 text-left border-2 text-xs font-black font-mono-tech uppercase transition ${
                        activeOffice === idx
                          ? 'bg-[#141414] text-[#FFD700] border-[#141414]'
                          : 'bg-[#F5F5F2] text-[#141414] border-[#141414] hover:bg-[#FFD700]'
                      }`}
                    >
                      {loc.city.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {(() => {
                  const currLoc = OFFICE_LOCATIONS[activeOffice];
                  return (
                    <div className="p-4 bg-[#F5F5F2] border-2 border-[#141414] text-xs space-y-1.5 font-mono-tech">
                      <div className="font-black uppercase text-[#141414]">{currLoc.city} ({currLoc.country})</div>
                      <div className="text-[#666666] text-[11px] font-bold">{currLoc.type}</div>
                      <div className="text-[#141414] pt-1">{currLoc.address}</div>
                      <div className="text-[#141414] font-black">{currLoc.phone}</div>
                    </div>
                  );
                })()}
              </div>

              {/* Quick Configurator Promo Box */}
              <div className="p-6 bg-[#FFD700] border-2 border-[#141414] space-y-3">
                <div className="text-xs font-mono-tech uppercase font-black text-[#141414] flex items-center gap-1.5">
                  <Calculator className="w-4 h-4 text-[#141414]" /> Need an Instant Scope Model?
                </div>
                <p className="text-xs text-[#141414] font-bold">
                  Use our interactive Project Scope &amp; Fee Configurator to define your required governance packages.
                </p>
                <button
                  onClick={onOpenEstimator}
                  className="w-full py-3 bg-[#141414] hover:bg-neutral-800 text-[#FFD700] text-xs font-black font-mono-tech uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2"
                >
                  Launch Scope Configurator
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
