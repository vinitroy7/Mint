import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, FileText, Briefcase, Layers, Factory } from 'lucide-react';
import { SERVICES_DATA, INDUSTRIES_DATA, PROJECTS_DATA, INSIGHTS_DATA } from '../../data/companyData';
import { PageId } from '../../types';

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId, param?: string) => void;
}

export const SearchDialog: React.FC<SearchDialogProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        // toggle search
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  const filteredServices = SERVICES_DATA.filter(
    (s) =>
      s.title.toLowerCase().includes(normalizedQuery) ||
      s.description.toLowerCase().includes(normalizedQuery) ||
      s.capabilities.some((c) => c.toLowerCase().includes(normalizedQuery))
  );

  const filteredIndustries = INDUSTRIES_DATA.filter(
    (i) =>
      i.title.toLowerCase().includes(normalizedQuery) ||
      i.description.toLowerCase().includes(normalizedQuery)
  );

  const filteredProjects = PROJECTS_DATA.filter(
    (p) =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.location.toLowerCase().includes(normalizedQuery) ||
      p.scopeOfWork.toLowerCase().includes(normalizedQuery) ||
      p.industry.toLowerCase().includes(normalizedQuery)
  );

  const filteredInsights = INSIGHTS_DATA.filter(
    (a) =>
      a.title.toLowerCase().includes(normalizedQuery) ||
      a.shortDescription.toLowerCase().includes(normalizedQuery) ||
      a.category.toLowerCase().includes(normalizedQuery)
  );

  const totalResults =
    filteredServices.length +
    filteredIndustries.length +
    filteredProjects.length +
    filteredInsights.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl bg-white text-[#141414] border-4 border-[#141414] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b-2 border-[#141414] bg-[#F5F5F2]">
          <Search className="w-5 h-5 text-[#141414] mr-3" />
          <input
            type="text"
            autoFocus
            placeholder="Search engineering services, project controls, sectors, case studies, insights..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base outline-none placeholder:text-[#666666] font-bold text-[#141414]"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#141414] hover:text-black mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-mono-tech font-black bg-[#141414] text-[#FFD700] border border-[#141414] hover:bg-[#FFD700] hover:text-[#141414] transition"
          >
            ESC
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {totalResults === 0 && (
            <div className="py-12 text-center text-[#666666] text-sm font-bold">
              No results found for &ldquo;{query}&rdquo;. Try searching for &ldquo;PMC&rdquo;, &ldquo;Cost&rdquo;, &ldquo;BIM&rdquo;, or &ldquo;Commercial&rdquo;.
            </div>
          )}

          {/* Services Group */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-[11px] font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#141414]" /> Services &amp; Capabilities ({filteredServices.length})
              </div>
              <div className="space-y-1.5">
                {filteredServices.map((srv) => (
                  <div
                    key={srv.id}
                    onClick={() => {
                      onNavigate('service-detail', srv.id);
                      onClose();
                    }}
                    className="p-2.5 border-2 border-transparent hover:border-[#141414] hover:bg-[#FFD700] cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <h4 className="text-sm font-black uppercase text-[#141414]">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-[#666666] group-hover:text-[#141414] line-clamp-1">{srv.tagline}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-0.5 transition shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries Group */}
          {filteredIndustries.length > 0 && (
            <div>
              <div className="text-[11px] font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-2 flex items-center gap-1.5">
                <Factory className="w-3.5 h-3.5 text-[#141414]" /> Industries &amp; Sectors ({filteredIndustries.length})
              </div>
              <div className="space-y-1.5">
                {filteredIndustries.map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => {
                      onNavigate('industries', ind.id);
                      onClose();
                    }}
                    className="p-2.5 border-2 border-transparent hover:border-[#141414] hover:bg-[#FFD700] cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <h4 className="text-sm font-black uppercase text-[#141414]">
                        {ind.title}
                      </h4>
                      <p className="text-xs text-[#666666] group-hover:text-[#141414] line-clamp-1">{ind.subtitle}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-0.5 transition shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Group */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-2 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-[#141414]" /> Projects &amp; Experience ({filteredProjects.length})
              </div>
              <div className="space-y-1.5">
                {filteredProjects.map((prj) => (
                  <div
                    key={prj.id}
                    onClick={() => {
                      onNavigate('projects', prj.id);
                      onClose();
                    }}
                    className="p-2.5 border-2 border-transparent hover:border-[#141414] hover:bg-[#FFD700] cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-black uppercase text-[#141414]">
                          {prj.name}
                        </h4>
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#141414] text-[#FFD700] font-mono-tech font-bold uppercase">
                          {prj.industry}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] group-hover:text-[#141414] line-clamp-1">{prj.scopeOfWork}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-0.5 transition shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Insights Group */}
          {filteredInsights.length > 0 && (
            <div>
              <div className="text-[11px] font-mono-tech uppercase font-black text-[#141414] tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#141414]" /> Engineering Insights &amp; Articles ({filteredInsights.length})
              </div>
              <div className="space-y-1.5">
                {filteredInsights.map((art) => (
                  <div
                    key={art.id}
                    onClick={() => {
                      onNavigate('insights', art.id);
                      onClose();
                    }}
                    className="p-2.5 border-2 border-transparent hover:border-[#141414] hover:bg-[#FFD700] cursor-pointer flex items-center justify-between group transition"
                  >
                    <div>
                      <h4 className="text-sm font-black uppercase text-[#141414]">
                        {art.title}
                      </h4>
                      <p className="text-xs text-[#666666] group-hover:text-[#141414] line-clamp-1">{art.shortDescription}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-0.5 transition shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
