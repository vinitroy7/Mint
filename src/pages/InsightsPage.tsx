import React, { useState } from 'react';
import { PageId, InsightArticle } from '../types';
import { INSIGHTS_DATA } from '../data/companyData';
import { SectionHeading } from '../components/common/SectionHeading';
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  X, 
  CheckCircle2, 
  Share2, 
  BookOpen, 
  PhoneCall, 
  Tag
} from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (page: PageId, param?: string) => void;
  onOpenConsultation: () => void;
  initialArticleId?: string;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  initialArticleId,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(
    initialArticleId ? INSIGHTS_DATA.find((a) => a.id === initialArticleId) || null : null
  );

  const categories = [
    'all',
    'Project Management',
    'Engineering',
    'Construction',
    'Sustainability',
    'Infrastructure',
  ];

  const filteredArticles = INSIGHTS_DATA.filter((art) => {
    if (selectedCategory === 'all') return true;
    return art.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  return (
    <div className="w-full bg-[#F5F5F2] text-[#141414]">
      {/* Header Banner */}
      <section className="bg-[#141414] text-white py-20 border-b-2 border-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint-lines opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech uppercase font-black mb-4">
            Technical Thought Leadership &bull; Industry Insights
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading uppercase tracking-tight text-white leading-tight">
            ENGINEERING &amp;<br />
            <span className="text-[#FFD700]">MANAGEMENT INSIGHTS.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-2xl font-body leading-relaxed">
            Technical analysis, project controls methodologies, structural value engineering strategies, and contract risk insights authored by our senior advisory partners.
          </p>
        </div>
      </section>

      {/* Main Articles Grid & Category Filters */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#141414]">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono-tech font-black uppercase tracking-wider transition ${
                    selectedCategory === cat
                      ? 'bg-[#141414] text-[#FFD700] border-2 border-[#141414] shadow'
                      : 'bg-white text-[#141414] border-2 border-[#141414] hover:bg-[#FFD700]'
                  }`}
                >
                  {cat === 'all' ? 'All Knowledge Hub' : cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono-tech font-black text-[#141414] hidden sm:inline-block">
              {filteredArticles.length} ARTICLES PUBLISHED
            </span>
          </div>

          {/* Articles Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                id={`insight-article-${article.id}`}
                onClick={() => setActiveArticle(article)}
                className="bg-white border-2 border-[#141414] hover:border-black transition-all duration-200 overflow-hidden shadow-sm flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Article Thumbnail */}
                  <div className="relative aspect-[16/9] bg-neutral-900 overflow-hidden border-b-2 border-[#141414]">
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-[#141414] text-[#FFD700] text-[10px] font-mono-tech font-black uppercase border border-[#FFD700]">
                        {article.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-neutral-300 text-[11px] font-mono-tech flex items-center justify-between">
                      <span className="flex items-center gap-1 font-bold">
                        <Calendar className="w-3 h-3 text-[#FFD700]" /> {article.date}
                      </span>
                      <span className="flex items-center gap-1 font-bold">
                        <Clock className="w-3 h-3 text-[#FFD700]" /> {article.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg sm:text-xl font-black uppercase font-heading text-[#141414] group-hover:text-[#141414] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-3 font-body">
                      {article.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Interaction */}
                <div className="px-6 py-4 bg-[#F5F5F2] border-t-2 border-[#141414] flex items-center justify-between text-xs font-mono-tech font-black uppercase text-[#141414] group-hover:bg-[#FFD700]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 transition-transform" />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-white text-[#141414] border-4 border-[#141414] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header Bar */}
            <div className="bg-[#141414] text-white p-6 sm:p-8 flex items-start justify-between border-b-2 border-neutral-800">
              <div className="space-y-2 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#FFD700] text-[#141414] text-xs font-mono-tech font-black uppercase">
                  {activeArticle.category} &bull; {activeArticle.readTime}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black uppercase font-heading leading-tight text-white">
                  {activeArticle.title}
                </h2>
                <div className="text-xs text-neutral-400 font-mono-tech flex items-center gap-3 pt-1">
                  <span>By {activeArticle.author.name} ({activeArticle.author.role})</span>
                  <span>&bull;</span>
                  <span>{activeArticle.date}</span>
                </div>
              </div>

              <button
                id="btn-close-article-reader"
                onClick={() => setActiveArticle(null)}
                className="p-2 text-white border-2 border-white hover:bg-[#FFD700] hover:text-[#141414] transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-10 space-y-6 max-h-[65vh] overflow-y-auto font-body text-[#141414]">
              <div className="p-4 bg-[#F5F5F2] border-l-4 border-[#FFD700] text-sm text-[#141414] font-bold italic">
                &ldquo;{activeArticle.shortDescription}&rdquo;
              </div>

              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed text-[#141414]">
                  {paragraph}
                </p>
              ))}

              {/* Key Takeaways Box */}
              <div className="p-6 bg-[#141414] text-white border-2 border-neutral-800 space-y-3">
                <h4 className="text-xs font-mono-tech uppercase font-black text-[#FFD700] tracking-wider">
                  Key Technical Takeaways for Project Leadership
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {activeArticle.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD700] shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 flex-wrap pt-2">
                <span className="text-xs font-mono-tech text-[#141414] uppercase font-black flex items-center gap-1">
                  <Tag className="w-3 h-3" /> Tags:
                </span>
                {activeArticle.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-[#F5F5F2] text-[#141414] text-xs font-mono-tech font-bold uppercase border border-[#141414]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Advisory CTA inside article */}
              <div className="p-6 bg-[#F5F5F2] border-2 border-[#141414] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-black uppercase text-[#141414]">
                    Need expert advisory on this topic for your active development?
                  </h4>
                  <p className="text-xs text-[#666666] mt-0.5">
                    Connect with our senior engineering division for a preliminary project consultation.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenConsultation();
                  }}
                  className="px-6 py-3 bg-[#FFD700] hover:bg-[#f0c800] text-[#141414] font-black text-xs uppercase tracking-wider border-2 border-[#141414] transition shrink-0"
                >
                  Start Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
