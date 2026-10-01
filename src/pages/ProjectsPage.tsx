import React, { useState } from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS_DATA, INDUSTRIES_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Layers, 
  X, 
  PhoneCall, 
  Calculator,
  ShieldCheck,
  Maximize2
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
  onOpenEstimator: () => void;
  initialProjectId?: string;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenEstimator,
  initialProjectId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(
    initialProjectId ? PROJECTS_DATA.find((p) => p.id === initialProjectId) || null : null
  );

  const categories = ['all', 'Commercial', 'Residential', 'Infrastructure', 'Industrial', 'Healthcare', 'Hospitality', 'Warehousing & Logistics', 'Mixed-Use Developments'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const categoryMatch = selectedCategory === 'all' || project.industry.toLowerCase().includes(selectedCategory.toLowerCase());
    const statusMatch = selectedStatus === 'all' || project.projectStatus === selectedStatus;
    return categoryMatch && statusMatch;
  });

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Proven Track Record &bull; Quality Delivery
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            PROJECTS &amp;<br />
            <span className="text-[#FFD700]">EXPERIENCE.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Showcasing our engineering consultancy, project management (PMC), and independent site monitoring across marquee commercial, residential, infrastructure, and industrial developments.
          </p>
        </div>
      </section>

      {/* Filter Toolbar & Projects Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b-2 border-[#141414]">
            {/* Sector filter tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.slice(0, 6).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech font-black uppercase tracking-wider transition ${
                    selectedCategory === cat
                      ? 'bg-[#141414] text-[#FFD700] border-2 border-[#141414] shadow'
                      : 'bg-white text-[#141414] border-2 border-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  {cat === 'all' ? 'All Sectors' : cat}
                </button>
              ))}
            </div>

            {/* Status toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tech text-[#141414] uppercase font-black">Status:</span>
              {['all', 'Completed', 'Ongoing'].map((st) => (
                <button
                  key={st}
                  onClick={() => setSelectedStatus(st)}
                  className={`px-2.5 py-1 text-xs font-mono-tech font-bold uppercase transition border border-[#141414] ${
                    selectedStatus === st
                      ? 'bg-[#141414] text-[#FFD700] font-black'
                      : 'bg-white text-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  {st === 'all' ? 'All' : st}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setActiveModalProject(project)}
                className="bg-white border-2 border-[#141414] hover:border-black transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Featured Image */}
                  <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden border-b-2 border-[#141414]">
                    <img
                      src={project.featuredImage}
                      alt={project.name}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    {/* Status Pill */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className={`px-2.5 py-1 text-[10px] font-mono-tech font-black uppercase border border-[#141414] ${
                        project.projectStatus === 'Completed'
                          ? 'bg-[#FFD700] text-[#141414]'
                          : 'bg-[#141414] text-white'
                      }`}>
                        {project.projectStatus}
                      </span>
                      <span className="px-2 py-1 bg-black text-white text-[10px] font-mono-tech font-bold">
                        {project.year}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] font-mono-tech text-[#FFD700] uppercase font-black block">
                        {project.industry}
                      </span>
                      <h3 className="text-lg font-black uppercase font-heading leading-tight group-hover:text-[#FFD700] transition-colors">
                        {project.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-1.5 text-xs text-[#666666] font-mono-tech font-bold">
                      <MapPin className="w-3.5 h-3.5 text-[#141414] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono-tech uppercase font-black text-[#141414] block mb-1">
                        Scope of Work
                      </span>
                      <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed">
                        {project.scopeOfWork}
                      </p>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono-tech uppercase font-black text-[#141414] block mb-1.5">
                        Services Delivered
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.servicesProvided.map((srv, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-[#F5F5F2] text-[#141414] text-[10px] font-mono-tech font-bold border border-[#141414]"
                          >
                            {srv}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Interaction */}
                <div className="px-6 py-3.5 bg-[#F5F5F2] border-t-2 border-[#141414] flex items-center justify-between text-xs font-mono-tech font-black uppercase text-[#141414]">
                  <span>Scale: {project.scale}</span>
                  <span className="text-[#141414] flex items-center gap-1">
                    Details <Maximize2 className="w-3.5 h-3.5 text-[#141414]" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-white text-[#141414] border-4 border-[#141414] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative aspect-[21/9] bg-neutral-900 border-b-2 border-[#141414]">
              <img
                src={activeModalProject.featuredImage}
                alt={activeModalProject.name}
                className="w-full h-full object-cover filter grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 bg-black text-white border-2 border-white hover:bg-[#FFD700] hover:text-[#141414] transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black uppercase">
                  {activeModalProject.industry} &bull; {activeModalProject.projectStatus}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase font-heading mt-2">
                  {activeModalProject.name}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-tech">
                <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                  <span className="text-[#666666] font-bold uppercase block mb-1">Location</span>
                  <span className="font-black text-[#141414] truncate block">{activeModalProject.location.split(',')[0]}</span>
                </div>
                <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                  <span className="text-[#666666] font-bold uppercase block mb-1">Built-Up Scale</span>
                  <span className="font-black text-[#141414]">{activeModalProject.scale}</span>
                </div>
                <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                  <span className="text-[#666666] font-bold uppercase block mb-1">Client Entity</span>
                  <span className="font-black text-[#141414]">{activeModalProject.clientType}</span>
                </div>
                <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                  <span className="text-[#666666] font-bold uppercase block mb-1">Duration / Year</span>
                  <span className="font-black text-[#141414]">{activeModalProject.technicalDetails.projectDuration || activeModalProject.year}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-2">
                  Scope of Engineering Advisory
                </h4>
                <p className="text-sm text-[#141414] leading-relaxed font-body">
                  {activeModalProject.scopeOfWork}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div className="p-5 bg-[#141414] text-white border-2 border-neutral-800 space-y-3">
                <h4 className="text-xs font-mono-tech uppercase font-black text-[#FFD700] tracking-wider">
                  Technical Milestones &amp; Outcomes
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeModalProject.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD700] mt-0.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {activeModalProject.technicalDetails.structuralType && (
                  <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                    <span className="text-[#666666] font-mono-tech uppercase font-bold block">Structural Typology</span>
                    <span className="font-bold text-[#141414]">{activeModalProject.technicalDetails.structuralType}</span>
                  </div>
                )}
                {activeModalProject.technicalDetails.sustainabilityStandard && (
                  <div className="p-3 bg-[#F5F5F2] border-2 border-[#141414]">
                    <span className="text-[#666666] font-mono-tech uppercase font-bold block">Sustainability Rating</span>
                    <span className="font-bold text-[#141414]">{activeModalProject.technicalDetails.sustainabilityStandard}</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-3">
                <span className="text-xs text-[#666666] font-mono-tech font-bold">
                  + PROJECT REF: MINT-EXP-2026
                </span>
                <button
                  onClick={() => {
                    setActiveModalProject(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-6 py-3 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" /> Inquire for Similar Development
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
