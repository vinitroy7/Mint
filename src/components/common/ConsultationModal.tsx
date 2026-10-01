import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, PhoneCall, Building2, User, Mail, FileText } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, COMPANY_INFO } from '../../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: initialServiceId || 'pmc',
    industry: 'commercial',
    projectLocation: '',
    estimatedValue: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white text-[#141414] border-4 border-[#141414] shadow-2xl overflow-hidden my-6 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#141414] text-white p-6 flex items-start justify-between border-b-2 border-neutral-800">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black uppercase mb-2">
              <PhoneCall className="w-3.5 h-3.5" /> Confidential Engineering Consultation
            </div>
            <h3 className="text-2xl font-black uppercase font-heading tracking-tight text-white">
              Talk to a Senior Engineering Partner
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              Discuss your project parameters, schedule constraints, or peer-review requirements with our leadership.
            </p>
          </div>
          <button
            id="btn-close-consultation-modal"
            onClick={onClose}
            className="p-2 text-white border-2 border-white hover:bg-[#FFD700] hover:text-[#141414] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4 bg-[#F5F5F2] p-6 border-2 border-[#141414]">
              <div className="w-16 h-16 bg-[#FFD700] text-[#141414] border-2 border-[#141414] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black uppercase text-[#141414]">Consultation Request Received</h4>
              <p className="text-sm text-[#141414] max-w-md mx-auto leading-relaxed">
                Thank you. A senior director from our Engineering & Project Controls division will reach out to you within 24 business hours at <strong className="text-black">{formData.email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  id="btn-consult-modal-finish"
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#141414] text-[#FFD700] text-xs font-black font-mono-tech uppercase tracking-wider border-2 border-[#141414] hover:bg-[#FFD700] hover:text-[#141414] transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Company / Organization *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Infrastructure Ltd."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Corporate Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="v.malhotra@apexinfra.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <PhoneCall className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98110 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Primary Service of Interest
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none font-bold"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                    Industry Sector
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    className="w-full p-2.5 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none font-bold"
                  >
                    {INDUSTRIES_DATA.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase font-mono-tech text-[#141414] mb-1">
                  Project Brief & Critical Challenges
                </label>
                <textarea
                  rows={3}
                  placeholder="Outline your project scope, location, expected timeline, and key engineering or project management challenges..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 bg-[#F5F5F2] border-2 border-[#141414] text-sm text-[#141414] focus:bg-white outline-none resize-none"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="text-[11px] text-[#141414] font-black flex items-center gap-1.5 uppercase font-mono-tech">
                  <ShieldCheck className="w-4 h-4 text-[#141414] shrink-0" />
                  <span>Confidential & protected by strict NDA protocols</span>
                </div>

                <button
                  id="btn-submit-consultation-modal"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    'Processing...'
                  ) : (
                    <>
                      Request Consultation <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
